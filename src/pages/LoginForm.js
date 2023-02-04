import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import Auth from './Auth';
import Home from './Home';
import Profile from './Profile';
import TextField from "@mui/material/TextField";
import { Container } from '@mui/system';
import { Button } from '@mui/material';
import CheckForm from './CheckForm';

function LoginForm( {userId} ) {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  
  const handleClick = (event) => {
    event.preventDefault();
   if(CheckForm({
      idValue: id, pwValue: password
    })){
    fetch('http://localhost:5050/login', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idVal,
        password: this.state.pwVal,
      }),
    })
      .then(response => response.json())
      .then(response => {
          response ? 
      	// 응답하면
          <Route
          isLogin={null}   //로그인되어 있는 상태로 넘김
          path="/home"
          element={<Home user={id}/>}
        /> : 
        <Link to="/login"/>
      });
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