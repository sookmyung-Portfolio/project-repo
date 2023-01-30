import { Container } from '@mui/material';
import React from 'react';

function Profile({ user }) {
  const { id, password, name, nickName, number, major } = user || {};
  return (
    <>
        <Container maxWidth="sm">
            <h1>Profile</h1>
            <dt>ID</dt>
            <dd>{id}</dd>
            <dt>Password</dt>
            <dd>{password}</dd>
            <dt>NickName</dt>
            <dd>{nickName}</dd>
            <dt>Number</dt>
            <dd>{number}</dd>
            <dt>Name</dt>
            <dd>{name}</dd>
            <dt>Major</dt>
            <dd>{major}</dd>
        </Container>
    </>
  );
}

export default Profile;