// JavaScript Code
document.getElementById("btn").addEventListener("click", btnclicked);
document.getElementById("user");
document.getElementById("pass");

function btnclicked() {
    let user = document.getElementById("user").value.toLowerCase();
    let pass = document.getElementById("pass").value.toLowerCase();
    if (user === "admin" && pass === "1234") {
       alert("Login Successful");
    } else {
        alert("Login Unsuccessful");
    }
}


