// JavaScript Code
document.getElementById("btn").addEventListener("click", btnclicked);

function btnclicked() {
    let user = document.getElementById("user");
    let pass = document.getElementById("pass");
    if (user === "admin" && pass === "1234") {
       alert("Login Successful");
    }
}


function btnclicked() {
     let user = document.getElementById("user");
     let pass = document.getElementById("pass");
     if (user != "admin" && pass != "1234") {
        alert("Login Unsuccessful");
     }
}
