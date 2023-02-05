import React, { useState } from 'react';
import { Link, Rout, useNavigate } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import Profile from './Profile';
import TextField from "@mui/material/TextField";
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import CheckForm from './CheckForm';
import axios from 'axios';

function LoginForm( {userId} ) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(id, "id값 전송 전");
    console.log(password, "pw값 전송 전");
    axios.post('http://localhost:5050/login',
      // 클라이언트에서 서버로 request(요청)하며 보내주는 데이터
      // 회원가입창에서 클라이언트가 입력하는 데이터
      {
        id: id,           
        password: password, 
      },
      {
        headers: {
          'Content-Type': 'application/json',
          // 'Accept': 'application/json',
        },
      })
      // 그러면 서버에서 클라이언트로 response(응답)으로 
      // {ok: true} 아니면 {ok: false}가 온다.
      // .then((response) => {
      //   console.log(response); // response.data로 해야?
      // })
      .then((result) => {
        console.log(result.data, "결과값");
        console.log(result.data.loginSuccess, "LoginSuccess 결과값");
        if (result.data.loginSuccess === true){
      	// 성공하면
          window.alert("로그인 성공");
          navigate("/");  //////////////////////로그인시 사용한 아이디를 넣어 보내기
        } else if (result.data.loginSuccess === false) {
          window.alert("로그인 실패");
          console.log("로그인 실패");
          //setId("");
          //setPassword("");  굳이
        }
      })
      .catch((error) => {
        window.alert("로그인 실패");
        console.log(error);
      })
  };

  return (
    <Container>
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '10vh',  
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}>
                <h1>Login</h1>
                <TextField
                    required
                    id="outlined-required"
                    label="아이디"
                    value={id}
                    name={id}
                    onChange={({ target: { value } }) => setId(value)}
                    type="text"
                    placeholder="아이디"
                    maxlength="10"
                    size="small"
                />
                <br/>
                <TextField
                    required
                    id="outlined-required"
                    label="비밀번호"
                    defaultValue="Hello"
                    value={password}
                    name={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                    type="password"
                    placeholder="Password"
                    maxlength="10"
                    size="small"
              />
                <br/>
                <Button variant="contained" onClick={handleClick}>Login</Button>
                <br/>
                <hr width="90" color="#0C2D82"/>
                <p>아이디가 없으시다면</p>
                <Link to="/signin">
                    <Button variant="outlined">Sign In</Button>
                </Link>
            </form>
        </div>
    </Container>
  );
}

export default LoginForm;