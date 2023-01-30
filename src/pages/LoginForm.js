import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Auth from './Auth';
import Profile from './Profile';
import TextField from "@mui/material/TextField";
import { Container } from '@mui/system';
import { Button } from '@mui/material';

function LoginForm( {isLogin} ) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  
  const handleClick = () => {
    try {
        var authen = Auth({ id, password });
        authen ? 
      	// Main 컴포넌트 호출 시 isLogin 이라는 props 값을 전달
          <Route
          isLogin={isLogin}
          path="/profile"
          element={<Profile isLogin= {isLogin} user={id}/>}
        /> : 
        <Link to="/login"/>
        //Auth({ id, password })? <Navigate to={from} /> : <Link to="/signin"/>
        //유저값이 true이면 메인 페이지 혹은 이전 페이지로 리턴, 없으면 회원가입 페이지로 이동 
    } catch (e) {
      alert('Failed to login');
      setId('');
      setPassword('');
    }
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