function checkForm() {
    var checkFlag = true;
    var username = document.getElementById("username");
    var pwd = document.getElementById("password");
    if (username.value==""){
        alert("用户名空");
        document.getElementById("username_msg").value = "请输入用户名！";
        checkFlag = false;
    }
    if (pwd.value == "") {
        alert("密码空");
        document.getElementById("password_msg").value = "请输入密码!";
        checkFlag = false;
    }
    return checkFlag;
}