var users = [
    { id: 'park', password: '123', nickName: 'Park' },
    { id: 'lee', password: '456', nickName: 'Lee' },
    { id: 'kim', password: '789', nickName: 'Kim' }
]

function FindId(idforCheck) {
    const user = users.find(user => user.id === idforCheck);
    if(user === undefined){
        return true;
    } else{
        return false;
    }
}

function IdAuth(id) {
    console.log('Auth', id);  //확인용
    if (FindId(id)) {
        console.log("최종확인", id);  //id값 나오긴 함
        return true;
    } else {
        console.log("최종확인", id);    //
        return false;
    }
}

export default IdAuth;