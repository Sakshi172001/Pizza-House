var reset = document.getElementById("send");
reset.addEventListener("click", resetDetails);

function resetDetails() {
    var nm = document.getElementById("nm").value = '';
    var eml = document.getElementById("eml").value = '';
    var msg = document.getElementById("msg").value = '';
}

var login = document.getElementById("lbtn");
login.addEventListener("click", loginDetails);

function loginDetails() {
    var em = document.getElementById("em").value = '';
    var pswd = document.getElementById("pswd").value = '';
}