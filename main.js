// JavaScript Code
document.getElementById("btn").addEventListener("click", btnclicked);
document.getElementById("user");
document.getElementById("pass");

function btnclicked() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    if (user === "admin" && pass === "1234") {
       alert("Login Successful");
    } else {
        alert("Login Unsuccessful");
    }
}


