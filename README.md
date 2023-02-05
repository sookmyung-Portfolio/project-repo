# Solux Project 

#### Frontend   박지은 박혜린 
#### Backend    최유정 최현서


## 구현화면

## 사용한것
React, Node.js, mongoDB, mongoose, JWT
## 주요기능
<details>
<summary>메인페이지</summary>
    <ol>로그인한 사용자만 해당 기능을 이용할 수 있습니다.</ol>
    
</details>
<details>
<summary>로그인페이지</summary>
<div markdown="1">       
    <ol>사용자는 아이디와 패스워드를 입력하여 로그인을 요청합니다.</ol>
    <ol>서버는 DB와 해당 사용자가 존재한다면 토큰을 발급하고 로그인 요청을 승인합니다.</ol>
    <ol>로그인 성공 시 메인페이지로 이동합니다.</ol>
    
</div>
</details>
<details>
<summary>회원가입</summary>
<div markdown="1">      
    <ol> 아이디, 닉네임 중복확인 여부를 서버에 요청을 보내면 기존 사용자의 아이디, 닉네임과 중복되는지 체크합니다. </ol>
    <ol> 모든 조건을 충족한다면 가입정보와 패스워드(bcrypt 모듈을 활용하여 salt 해시 알고리즘으로 암호화된 값)를 DB에 저장합니다 </ol>
</div>
</details>
<details>
<summary>질문게시판</summary>
<div markdown="1">       
    <ol>로그인한 사용자만 글 작성이 가능합니다.</ol>
    <ol>제목과 내용을 작성하여 글쓰기 버튼을 누르면 게시글을 등록할 수 있습니다.</ol>
    <ol>누구든지 글의 제목, 작성자, 작성일, 댓글을 확인할 수 있습니다.</ol>
    <ol>댓글 작성은 로그인한 사용자에게만 보이며 댓글을 작성하여 등록할 수 있습니다. </ol>
    <ol>댓글은 최신순으로 보이며 자신이 작성한 댓글만 수정 및 삭제를 할 수 있습니다. </ol>
    <ol>해당 글의 작성자만 수정 및 삭제 버튼이 보이며 해당 기능을 이용할 수 있습니다.</ol>
<!--     <ol> 게시글 삭제 시 댓글들이 모두 지워집니다.</ol> -->
<!--     <ol>만약 로그인하지 않은 사용자가 강제로 페이지에 접속한다면 메인 페이지로 돌려보냅니다.</ol> -->
    
</div>
</details>
<details>
<summary>후기게시판</summary>
    <ol>로그인한 사용자만 글 작성이 가능합니다.</ol>
    <ol>제목과 내용을 작성하여 글쓰기 버튼을 누르면 게시글을 등록할 수 있습니다.</ol>
    <ol>해당 글의 작성자만 수정 및 삭제 버튼이 보이며 해당 기능을 이용할 수 있습니다.</ol>
    <ol>만약 로그인하지 않은 사용자가 강제로 페이지에 접속한다면 메인 페이지로 돌려보냅니다.</ol>
</details>
<details>
<summary>스펙게시판</summary>
    <ol>로그인한 사용자만 글 작성이 가능합니다.</ol>
    <ol>제목과 내용을 작성하여 글쓰기 버튼을 누르면 게시글을 등록할 수 있습니다.</ol>
    <ol>해당 글의 작성자만 수정 및 삭제 버튼이 보이며 해당 기능을 이용할 수 있습니다.</ol>
<!--     <ol>만약 로그인하지 않은 사용자가 강제로 페이지에 접속한다면 메인 페이지로 돌려보냅니다.</ol> -->
</details>
<details>
<summary>북마크 (추후 구현 예정)</summary>
<div markdown="1">       
    - 내용1
</div>
</details>
<details>
<summary>공통기능</summary>
<div markdown="1">       
    <ol>로그인이 필요한 기능은 모두 토큰을 확인하여 정상적인 사용자인지 체크합니다. (미들웨어)</ol>
    <ol>외부로 보이는 모든 정보는 XSS 공격을 대비해 sanitize-html 모듈을 활용하여 데이터를 저장하고 보여줍니다.</ol>
</div>
</details>

## 페이지별 기능 상세 설명

## API 목록
<details>
    <summary>자세히</summary>

|      |  기능  | Method |URL|request|response|
| :- | :- | :- | :- | :- | :- |
| 메인 페이지 |  화면 표시   |  GET|/||index.html|
| |접속 정보|GET|/user| |nickname|
|로그인|화면 표시|GET|/login| |login.html|
| |사용자 접속|POST|/login|{ id, password }|success \|\| empty \|\| fail|
|회원가입|화면 표시|GET|/register||register.html|
| |등록 요청|POST|/register|{ id, password, password_re, nickname }|success \|\| empty \|\| wrong_id \|\| wrong_nickname \|\| wrong_password \|\| already_id \|\| already_nickname \|\| diff_password |
| 글 작성 페이지 | 화면 표시 | GET | /new | | new.html |
| |질문게시판 글 리스트| GET | /questions | |{ postId, title, nickname, date }...|
| |질문게시판 글 조회| GET | /questions/:postId | |{ postId, title, nickname, date }...|
| |질문게시판 글 작성| GET | /list | |{ postId, title, nickname, date }...|
| |글 리스트| GET | /list | |{ postId, title, nickname, date }...|    
| | 글 작성 | POST | /new | { title, content} | success \|\| empty \|\| fail |
|  상세 페이지 |  화면 표시   | GET | /:postId | | detail.html |
| | 글 상세 정보 | GET | /list/:postId | |    {title, nickname, content, date}  |
| | 글 수정 | PUT | /list/:postId | { title, content  } | success \|\| empty \|\| fail |
| | 글 삭제 | DELETE |   /list/:postId | | success \|\| fail |
| | 댓글 목록 |  GET |  /comment/:postId  | | {nickname, comment, date}... |
| | 댓글 작성 |  POST |  /comment/:postId  | { comment } | success \|\| empty \|\| fail |
| | 댓글 수정 |  PUT | comment/:commentId | { commentId, comment } | success \|\| empty \|\| fail |
| | 댓글 삭제 | DELETE | comment/:commentId | | success \|\| fail |

</details>

## 후기

## 개선할점
