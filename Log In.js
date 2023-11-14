var inputTouched = {
    email: false,
    password: false
}

var inputEmail = document.getElementById("inputEmail")
var inputPassword = document.getElementById("inputPassword")
var inputWrapperEmail = document.getElementById("input-wrapper-email")
var inputWrapperPassword = document.getElementById("input-wrapper-password")
var warningEmail = document.getElementById("warningEmail")
var warningPassword = document.getElementById("warningPassword")

var inputOnBlur = (ev) =>{
    if(inputTouched.email){
        if(!validateEmail(inputEmail.value) && !validatePhone(inputEmail.value)){
            warningEmail.style.display="block"
            inputEmail.style.borderBottom='2px solid #e87c03'
        }
        else{
            warningEmail.style.display="none"
            inputEmail.style.borderBottom="none"
        }
    }
    if(inputTouched.password){
        if(!(inputPassword.value.length >= 4 && inputPassword.value.length <= 60)){
            warningPassword.style.display="block"
            inputPassword.style.borderBottom='2px solid #e87c03'
        }
        else{
            warningPassword.style.display="none"
            inputPassword.style.borderBottom="none"
        }
    }
}

var inputOnFocus = (ev) =>{
    inputTouched[ev.name] = true;
}

var validateEmail = email => {
    var
 re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

var validatePhone = email => {
    var
 re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return re.test(String(email).toLowerCase());
}