var users = [
    { id: 'park', password: '123', nickName: 'Park' },
    { id: 'lee', password: '456', nickName: 'Lee' },
    { id: 'kim', password: '789', nickName: 'Kim' }
]

function FindName(nameforCheck) {
    const user = users.find(user => user.name === nameforCheck);
    if(user === undefined){
        console.log("ok");
        return true;
    } else{
        console.log("no");
        return false;
    }
}

function NameAuth(name) {
    if (FindName(name)) {
        console.log("최종확인", name);  //id값 나오긴 함
        alert("사용할 수 있는 닉네임입니다.");
        return true;
    } else {
        console.log("최종확인", name);    //
        alert("사용할 수 없는 닉네임입니다."); 
        return false;
    }
}

export default NameAuth;