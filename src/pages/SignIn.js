import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import CheckForm from './CheckForm';
//import Auth from './Auth';
import IdAuth from "./IdAuth";
import NameAuth from './NameAuth';
import Profile from './Profile';
import DepComboBox from './CateComboBox';
import NumComboBox from './NumComboBox';
import TextField from "@mui/material/TextField";
import { Container } from '@mui/system';
import { Button } from '@mui/material';

function SignIn() {
  const [id, setId] = useState('');
  const [finalId, setFinalId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const [finalPassword, setFinalPassword] = useState('');
  const [nickName, setNickName] = useState('');
  const [finalName, setFinalName] = useState('');
  const [number, setNumber] = useState('');
  const [major, setMajor] = useState('');

  const handleSubmitClick = (event) => {
    event.preventDefault();
   if(CheckForm({
      idValue: finalId, pwValue: finalPassword, nameValue: finalName, numValue: number, depValue: major,
    })){
    fetch('http://10.58.4.36:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idVal,
        password: this.state.pwVal,
      }),
    })
      .then(response => response.json())
      .then(response => {
          alert('가입되셨습니다.');
          response ? 
      	// Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
          <Route
          isLogin={null}   //일단 로그인되어 있지 않은 상태로 넘김
          path="/profile"
          element={<Profile isLogin= {null} user={id}/>}
        /> : 
        <Link to="/login"/>
      });
    }
  };

  const onIdCheckClick = (event) => {
    event.preventDefault();
    //const data = event.target.value; 원래 이 줄 있어야 함

    //// 이 아래는 작업용으로만 추가
    if(IdAuth(id)){
      if(id!== ""){
        alert('사용 가능한 아이디입니다.'); //아이디 확인용
        setFinalId(id);
        //alert("finalId", finalId);
      } else{
        alert('아이디를 입력하세요.');
      }
    } else {
      alert('사용할 수 없는 아이디입니다.');
    }
    
    // fetch('http://localhost:3001/checkid',{ // localhost 3001번 포트 checkid라우터를 찾는다
    //         method:"post",
    //         headers: { "Content-Type":  "application/json" },
    //         body: JSON.stringify(data),	// json화 해버리기
    //     })
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log("asdasdasdasd");
    //         if(json.tf === true){		// json을 받아왔는데 .tf 값이 true면 사용가능
    //             alert("사용가능한 ID입니다");  //알람!
    //             this.setState({
    //                 usingid: true
    //             })
    //         }
    //         else{
    //             alert("다른 ID를 입력해주세요");
    //         }
    //     });

  }

  const onPwCheckClick = (event) => {
    event.preventDefault();
    if(password !== confirmedPassword  && password!=="" && confirmedPassword!==""){
      alert('비밀번호가 일치하지 않습니다.');
    } else if(password===""){
      alert('비밀번호란이 공백입니다.');
    } else if(confirmedPassword===""){
      alert('비밀번호 확인란이 공백입니다.');
    }else{
      const finalPassword = confirmedPassword;
      //alert(finalPassword); 비밀번호 세팅 확인용
      setFinalPassword(finalPassword);
      alert('비밀번호가 일치합니다.');
    }
  }

  const onNameCheckClick = (event) => {
    event.preventDefault();
    //const data = event.target.value;  원래 있어야 함

    //// 이 아래는 작업용으로만 추가
    if(NameAuth(nickName)){
      setFinalName(nickName);
    } else {
      alert('사용할 수 없는 아이디입니다.');
    }

    // fetch('http://localhost:3001/checknickname',{ // localhost 3001번 포트 checkid라우터를 찾는다
    //         method:"post",
    //         headers: { "Content-Type":  "application/json" },
    //         body: JSON.stringify(data),	// json화 해버리기
    //     })
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log("asdasdasdasd");
    //         if(json.tf === true){		// json을 받아왔는데 .tf 값이 true면 사용가능
    //             alert("사용가능한 ID입니다");  //알람!
    //             this.setState({
    //                 usingid: true
    //             })
    //         }
    //         else{
    //             alert("다른 ID를 입력해주세요");
    //         }
    //  });

  }
  
  return (
    <>
     <Container>
        <div style={{ 
          display: 'flex', justifyContent: 'center', alignItems: 'center', 
          width: '100%', height: '5vh'
          }}>
          <form style={{ display: 'flex', flexDirection: 'column'}}>
            <h1>Sign In</h1>
            <div>
            <TextField
                required
                id="outlined-required"
                label="아이디"
                value={id}
                name={id}
                onChange={({ target: { value } }) => setId(value)}  ///아이디 중복확인 ok
                type="text"
                placeholder="아이디"
                minlength="2" maxlength="6" size="small"
              />
            &nbsp; <Button variant="outlined" value={id} onClick = {onIdCheckClick}>중복 확인</Button>
            </div>
            <br/>
            <div>
            <TextField
                required
                id="outlined-required"
                label="비밀번호"
                value={password}
                name={password}
                onChange={({ target: { value } }) => setPassword(value)}
                type="password"
                placeholder="비밀번호"
                minlength="6" maxlength="12" 
                size="small"
              />
            </div>
            <br/>
            <div>
            <TextField
                required
                id="outlined-required"
                label="비밀번호 입력확인"
                value={confirmedPassword}
                onChange={({ target: { value } }) => setConfirmedPassword(value)}    ///비밀번호 재확인 ok
                type="password"
                placeholder="비밀번호 입력확인"
                minlength="6" maxlength="12" 
                size="small"
              />
            &nbsp; <Button variant="outlined" value={confirmedPassword} onClick = {onPwCheckClick} >일치 확인</Button>
            </div>
            <br/>
            <div>
            <TextField
                required
                id="outlined-required"
                label="닉네임"
                value={nickName}
                onChange={({ target: { value } }) => setNickName(value)}   ///닉네임 중복확인  ok
                type="text"
                placeholder="닉네임" 
                minlength="3" maxlength="6"
                size="small"
              />
            &nbsp; <Button variant="outlined" onClick = {onNameCheckClick} >중복 확인</Button>
            </div>
            <br/>
            <NumComboBox value={number}
              onChange={({ target: { value } }) => setNumber(value)}  //체크박스 오케이  >> 숫자만 입력 가능하게 해야 함
              />  
            <br/>
            <DepComboBox value={major}
              onChange={({ target: { value } }) => setMajor(value)} />
            <br/>
            <Button variant="contained" onClick={handleSubmitClick}>Sign In</Button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default SignIn;