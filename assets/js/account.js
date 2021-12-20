// Validation form 
let form = document.forms['login'];
let email = form.email;
let name = form.name;
let pass = form.password;
let pass_repeat = form.password_repeat;

email.addEventListener("blur", checkMail);
name.addEventListener("blur", checkName);
pass.addEventListener("blur", checkPass);
pass_repeat.addEventListener("blur", checkPassRepeat);
form.addEventListener("submit", checkSubmit);

function checkMail(){
    let mail_value = email.value;
    let mail_error = document.getElementById("email_error");
    mail_error.style.display = "block";
    if(mail_value === ""){
        mail_error.style.color = "rgb(228, 37, 148)";
        mail_error.innerHTML = "Email không được để trống!";
        return false;
    }
    let valid = mail_value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(!valid){
        mail_error.style.color = "rgb(228, 37, 148)";
        mail_error.innerHTML = "Email không hợp lệ!";
        return false;
    }
    mail_error.style.color = "green";
    mail_error.innerHTML = "Email hợp lệ!";
    return true;
}
function checkName(){
    let name_value = name.value;
    let name_error = document.getElementById("name_error");
    name_error.style.display = "block";
    if(name_value === ""){
        name_error.style.color = "rgb(228, 37, 148)";
        name_error.innerHTML = "Tên không được để trống!";
        return false;
    }
    name_error.style.color = "green";
    name_error.innerHTML = "Tên hợp lệ!";
    return true;
}
function checkPass(){
    let pass_value = pass.value;
    let pass_error = document.getElementById("pass_error");
    pass_error.style.display = "block";
    if(pass_value === ""){
        pass_error.style.color = "rgb(228, 37, 148)";
        pass_error.innerHTML = "Mật khẩu không được để trống!";
        return false;
    }
    if(pass_value.length < 8){
        pass_error.style.color = "rgb(228, 37, 148)";
        pass_error.innerHTML = "Mật khẩu phải lớn hơn 8 ký tự!";
        return false;
    }
    pass_error.style.display= "none";
    return true;
}
function checkPassRepeat(){
    let pass_value = pass.value;
    let pass_repeat_value = pass_repeat.value;
    let pass_repeat_error = document.getElementById("pass_repeat_error");
    pass_repeat_error.style.display= "block";
    if(pass_value !== pass_repeat_value || pass_repeat_value === ""){
        pass_repeat_error.style.color = "rgb(228, 37, 148)";
        pass_repeat_error.innerHTML = "Mật khẩu không trùng khớp!";
        return false;
    }
    pass_repeat_error.style.color = "green";
    pass_repeat_error.innerHTML = "Mật khẩu trùng khớp!";
    return true;
}
function checkSubmit(){
    let ok = checkMail() && checkName() && checkPass() && checkPassRepeat();
    if(ok){
        alert("Bạn đã đăng ký thành công!");
        window.location = '/';
    }else{
        alert("Bạn cần nhập thông tin hợp lệ!");
    }
}