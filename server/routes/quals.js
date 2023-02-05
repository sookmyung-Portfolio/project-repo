const express = require('express');
const router = express.Router();
var Qual = require('../models/qual');
const {auth} = require('../middleware/auth');


/* 
    변수설명
    {port} : 포트번호
    {postId} : 게시글 _id (오브젝트 타입)

 */ 


// 게시글 작성 - 권한필요
// POST
// localhost:{port}/quals
router.post("/", auth, async (req, res) => {
    const post = new Qual();
    
    try {
        post.title = req.body.title;
        post.content = req.body.content;
        post.userId = req.user._id;
        post.username = req.user.name;
        post.mainDept = req.body.mainDept;
        post.subDept = req.body.subDept;

        await post.save();
      res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);
    }
});


// 게시글 수정
// PUT
// localhost:{port}/quals/edit/{postId}
router.put('/edit/:id', auth, async (req, res) => {
    const post = await Qual.findOne({_id : req.params.id}); 

    if (post.userId === req.user._id) {
        try {
            var date = new Date();
            post.title = req.body.title;
            post.content = req.body.content;
            post.updatedAt = date;
            post.mainDept = req.body.mainDept;
            post.subDept = req.body.subDept;

            await post.save();
            res.json(post);
        } catch(err) {
            res.status(500).json(err);
        }    
    } else {
        res.status(401).json("글 작성자만 수정 가능합니다.")
    }
})


// 게시물 삭제 - 권한필요
// PUT
// localhost:{port}/quals/delete/{postId}
router.put('/delete/:id', auth, async (req, res) => {
    const post = await Qual.findOne({_id : req.params.id}); 

    if (post.userId === req.user._id) {
        try {
            var date = new Date();
            post.isDeleted = true;
            post.updatedAt = date;

            await post.save();
            res.json(post);
        } catch(err) {
            res.status(500).json(err);
        }    
    } else {
        res.status(401).json("글 작성자만 수정 가능합니다.")
    }
})


// 특정 게시물 조회
// GET
// localhost:{port}/quals/{postId}
router.get("/:id", async (req, res) => {
    try {
        const post = await Qual.findOne({_id : req.params.id});
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json(err);   
    }
})



// 모든 게시글 조회
// GET
// localhost:{port}/quals
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if(username) {
            posts = await Qual.find({username:username})
        // } else if(catName) {
        //     posts = await Qual.find({categories: {
        //         $in:[catName]
        //     }})
        } else {
            posts = await Qual.find();
        }
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;