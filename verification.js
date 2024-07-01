$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "杨富安" && pwd == "yfa") {
        
        event.preventDefault();
        $('form').fadeOut(2500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "1.html";
        }, 1000);
    } else {
        alert("用户名或密码不正确！");
    }
});
