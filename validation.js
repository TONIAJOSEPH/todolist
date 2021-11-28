let uname = document.getElementById("uname");
let pwd = document.getElementById("pwd");
function clearerror(){
    uname.style.border="2px solid green"; 
    pwd.style.border="2px solid green"; 
}  
function validate(clearerror){
    
    if(uname.value=="" && pwd.value==""){
        uname.style.border="2px solid red";
        pwd.style.border="2px solid red";
        return false;
    }
    else if(pwd.value==""){
        pwd.style.border="2px solid red";
        return false;
    }
    else if(uname.value!="admin"){
         return false;
    }
    else if(pwd.value!="12345"){
         return false;
    }
    else{
        clearerror();
        return true;
    }
}