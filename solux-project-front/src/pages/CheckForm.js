function CheckForm(id, pw, name, num, dep) {
    if( id.value === "" ) {
        id.focus();
        alert("아이디를 입력해 주십시오.");
        return false;
        
    }
    if( pw.value === "" ) {
        pw.focus();
        alert("비밀번호를 입력해 주십시오.");
        return false;
        
    }
    if( name.value === "" ) {
        name.focus();
        alert("닉네임을 입력해 주십시오.");
        return false;
        
    }
    if( num.value === "" ) {
        num.focus();
        alert("학번을 입력해 주십시오.");
        return false;
        
    }
    if( dep.value === "" ) {
        dep.focus();
        alert("전공을 입력해 주십시오.");
        return false;
        
    }
    return true;
    
}

export default CheckForm;