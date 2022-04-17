var userValid = document.getElementById("msgP");
var passValid = document.getElementById("pAlert");
var userName = document.getElementById("lname");
var passW = document.getElementById("passwInput");
var btnSubmit = document.getElementById("btnSubmit");

var nameRejex ;
var passRejex ;
btnSubmit.addEventListener("click", function () {
    nameRejex = /^[A-Z][a-z]{2,8}$/;
    if (!nameRejex.test(userName.value) && userName.value != "") {
        userValid.style.display = "flex";
        userValid.style.justifyContent = "center";
        userValid.innerHTML = "Please your userName must contain on capital in first character and last is small";
    }
    else if (userName.value == "") {
        userValid.style.display = "flex";
        userValid.style.justifyContent = "center";
        userValid.innerHTML = "please enter your user name";

    }
    else {
        userValid.style.display = "none";

    }
});

btnSubmit.addEventListener("click", function () {
    passRejex = /[A-Z][a-z]|[0-9]{3,15}$/;
    if (!passRejex.test(passW.value) && passW.value != "") {
        passValid.style.display = "flex";
        passValid.style.justifyContent = "center";
        passValid.innerHTML = "Please your password must contain on capital and small character and number";
    }
    else if (passW.value == "") {
        passValid.style.display = "flex";
        passValid.style.justifyContent = "center";
        passValid.innerHTML = "please enter your user password";

    }
    else {
        passValid.style.display = "none";

    }
});

btnSubmit.addEventListener("click", function(){
    if(passRejex.test(passW.value) && nameRejex.test(userName.value))
    {
        window.alert("hello dear in javascript") ;
    }
})