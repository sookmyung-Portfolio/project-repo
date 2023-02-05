import { Container } from "@mui/material";
import React from "react";
import { Link, Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Quals from "./Quals";
import Questions from "./Questions";
import Reviews from "./Reviews";
import qual from "../images/qual.jpg";
import question from "../images/question.jpg";
import review from "../images/review.jpg";


function Home() {
  return (
    <>
        <Container maxWidth="sm">
              <div className="row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '10vh',}}>
                <div style={{margin: "30px"}}>
                  <Link to ="/questions">
                    <img className="questions" alt="questions" src={question} width="200px"></img>
                  </Link>              
                  <h4 className="board">질문게시판</h4>
                </div>
                <br />
                <div style={{margin: "30px"}}>
                  <Link to ="/reviews">
                    <img className="reviews" alt="reviews" src={review} width="200px"></img>
                  </Link>      
                  <h4 className="board">취업후기게시판</h4>           
                </div>
                <br />  
                <div style={{margin: "30px"}}>
                  <Link to ="/quals">
                    <img className="quals" alt="quals" src={qual} width="200px"></img>
                  </Link>  
                  <h4 className="board">스펙게시판</h4>            
                </div>         
              </div>
            <Routes>  
              <Route path="/quals" element={<Quals/>} />
              <Route path="/questions" element={<Questions/>} />
              <Route path="/reviews" element={<Reviews/>} />
            </Routes>
        </Container>
    </>
  );
}

export default Home;