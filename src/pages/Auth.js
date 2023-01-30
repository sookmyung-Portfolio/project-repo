const users = [
    { id: 'park@test', password: '123', nickName: 'Park' },
    { id: 'lee@test', password: '456', nickName: 'Lee' },
    { id: 'kim@test', password: '789', nickName: 'Kim' }
  ]
function Auth({ id, password }) {
    const user = users.find(user => user.id === id && user.password === password);
    if (user === undefined) throw new Error();
    return (user);
}

export default Auth;