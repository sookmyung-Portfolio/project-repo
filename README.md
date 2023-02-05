# Solux Project 

#### Frontend   박지은 박혜린 
#### Backend    최유정 최현서


## 구현화면
![test01](https://user-images.githubusercontent.com/70712293/216828477-12948b76-c061-4d5b-a4c4-f17e753845a9.gif)
![test02](https://user-images.githubusercontent.com/70712293/216828504-13eae446-5011-48e0-983e-e2806fbf8378.gif)
![test03](https://user-images.githubusercontent.com/70712293/216828521-8c1e2b50-508e-44e1-910f-de79f0698d88.gif)
![test04](https://user-images.githubusercontent.com/70712293/216828527-db4aa827-0324-4a95-9471-26134e3b90ef.gif)

## 사용한것
React, Node.js, mongoDB, mongoose, JWT

## 주요 기능
- **회원가입**: 아이디, 비밀번호, 닉네임, 학번, 전공을 입력하고 회원가입을 진행할 수 있습니다.
- **로그인, 로그아웃**: 아이디, 패스워드를 입력하여 로그인과 로그아웃 버튼을 통해 로그아웃을 할 수 있습니다.
- **(질문게시판) 글 작성, 수정, 삭제**: 로그인한 사용자는 댓글을 달 수 있고 자신의 댓글만 수정 및 삭제가 가능합니다.
- **댓글 작성, 수정, 삭제**: 로그인한 사용자는 댓글을 달 수 있고 자신의 댓글만 수정 및 삭제가 가능해요.
- **검색** : 검색 기능을 통해 원하는 제목의 게시글을 확인 할 수 있습니다.
- **북마크**: 로그인한 사용자는 북마크 기능을 통해 원하는 글들을 모아서 확인할 수 있습니다.


## 페이지별 기능 상세 설명

<details>
    <summary>메인 페이지</summary>
    <img width="1508" alt="image" src="https://user-images.githubusercontent.com/70712293/216829054-a2e75b62-eb0f-40c4-9f60-07d40b7fd7a6.png">

- 로그인 여부에 따라 로그인 버튼 혹은 글쓰기 버튼이 보이게 되며 접속 중인 사용자 닉네임을 표시합니다.
- 글 목록은 최신순으로 표시되며 제목, 작성자, 작성 일자를 표시합니다.
- 자세히 보기 버튼을 누르면 해당 글의 상세 페이지로 이동합니다.
    
</details>
    

<details>
    <summary>로그인</summary>
    <img width="1510" alt="image" src="https://user-images.githubusercontent.com/70712293/216829112-18582c60-e8c9-4e46-b302-d2f5da0b9a51.png">
    
- 사용자는 아이디와 패스워드를 입력하여 로그인을 요청합니다.
- 서버는 DB에 해당 사용자 정보가 존재한다면 토큰을 발급하고 로그인 요청을 승인합니다.
- 로그인 성공 시 메인페이지로 이동합니다.
<!-- - 로그인한 사용자가 강제로 로그인 페이지에 접속한다면 메인 페이지로 돌려보냅니다.  -->
</details>

<details>
    <summary>회원가입</summary>
    <img width="1512" alt="image" src="https://user-images.githubusercontent.com/70712293/216830817-f25a91fa-c6e5-425f-98b2-25c3d8fd09eb.png">

<!-- - 아이디는 3자 이상 영문 ,숫자, _ 만 사용 가능하고 패스워드는 아이디가 포함되지 않는 4자 이상 사용할 수 있어요.  -->
- 닉네임은 공백을 제외한 2자~10자 사용할 수 있어요.
- 아이디, 닉네임 중복확인 여부를 서버에 요청을 보내면 기존 사용자의 아이디, 닉네임과 중복되는지 체크합니다.
- 모든 조건을 충족한다면 가입정보와 패스워드(bcrypt 모듈을 활용하여 salt 해시 알고리즘으로 암호화된 값)를 DB에 저장합니다.
- 회원가입이 성공적이라면 메인 페이지로 이동합니다.
<!-- - 만약 로그인한 사용자가 강제로 회원가입 페이지에 접속한다면 메인 페이지로 돌려보냅니다. -->
</details>


<details>
    <summary>질문게시판</summary>
    <img width="1503" alt="image" src="https://user-images.githubusercontent.com/70712293/216830335-3dcc11dd-7209-4313-8a8e-57729238b470.png">
    <img width="1500" alt="image" src="https://user-images.githubusercontent.com/70712293/216830354-5da656c6-5515-43e4-9254-48b4854e27b9.png">
    
- 로그인한 사용자만 글 작성이 가능합니다.
- 제목과 내용을 작성하여 글쓰기 버튼을 누르면 게시글을 등록할 수 있습니다.
- 누구든지 글의 제목, 작성자, 작성일, 댓글을 확인할 수 있습니다.
<!-- - 댓글 작성은 로그인한 사용자에게만 보이며 댓글을 작성하여 등록할 수 있습니다. -->
- 댓글은 최신순으로 보이며 자신이 작성한 댓글만 수정 및 삭제를 할 수 있습니다.
- 해당 글의 작성자만 수정 및 삭제 버튼이 보이며 해당 기능을 이용할 수 있습니다.
<!-- - 게시글 삭제 시 댓글들이 모두 지워집니다. -->
</details>

<details>
    <summary>후기게시판</summary>
    <img width="1504" alt="image" src="https://user-images.githubusercontent.com/70712293/216830419-288d323f-7cca-4917-a285-fb8cbb3c093c.png">
    <img width="1501" alt="image" src="https://user-images.githubusercontent.com/70712293/216830425-9783dd14-d892-4b60-854b-bf9dd1035039.png">
    
- 로그인한 사용자만 글 작성이 가능합니다.
- 제목과 내용을 작성하여 글쓰기 버튼을 누르면 게시글을 등록할 수 있습니다.
- 누구든지 글의 제목, 작성자, 작성일을 확인할 수 있습니다.
- 해당 글의 작성자만 수정 및 삭제 버튼이 보이며 해당 기능을 이용할 수 있습니다.
</details>


<details>
    <summary>스펙게시판</summary>
    <img width="1511" alt="image" src="https://user-images.githubusercontent.com/70712293/216830531-cffc686a-626d-427d-a71a-3d98c249ace2.png">
    <img width="1512" alt="image" src="https://user-images.githubusercontent.com/70712293/216830548-98c69397-3a50-4a15-8b75-6560308d12f8.png">
    
- 로그인한 사용자만 글 작성이 가능합니다.
- 제목과 내용을 작성하여 글쓰기 버튼을 누르면 게시글을 등록할 수 있습니다.
- 누구든지 글의 제목, 작성자, 작성일을 확인할 수 있습니다.
- 해당 글의 작성자만 수정 및 삭제 버튼이 보이며 해당 기능을 이용할 수 있습니다.
</details>

<!-- <details>
    <summary>검색</summary>
   
- 검색 키워드와 DB에 저장된 게시글 제목과 비교해 검색 결과를 보여줍니다.
- 모든 사용자가 검색 요청을 할 수 있습니다.
</details> -->

<!-- <details>
    <summary>북마크</summary>
   
- 로그인한 사용자만 북마크 등록이 가능합니다.
- 북마크 등록 버튼을 클릭하면 북마크가 등록됩니다.
- 로그인한 사용자는 마이페이지에서 북마크 목록이 확인이 가능합니다.
- 로그인한 사용자만 북마크 해제가 가능합니다.
</details> -->

<details>
    <summary>공통기능</summary>
- 로그인이 필요한 기능은 모두 토큰을 확인하여 정상적인 사용자인지 체크합니다. (미들웨어)
<!-- - 외부로 보이는 모든 정보는 XSS 공격을 대비해 sanitize-html 모듈을 활용하여 데이터를 저장하고 보여줍니다.제목과 내용을 작성하여 글쓰기 버튼을 누르면 게시글을 등록할 수 있습니다. -->
</details>

## API 목록 (추후 추가 및 수정 예정)
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
