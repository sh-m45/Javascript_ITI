var userName , passW ;
var userPrompt = window.prompt("please enter userName");
var UserPass = window.prompt("please enter password");
function inputForm(){
    userName = document.getElementById("lname").value ;
    passW = document.getElementById("passwInput").value ;
    if(userPrompt == userName && UserPass == passW)
    {
        document.getElementById("pAlert").innerHTML = "Hello" +" "+ userName;
    }
    else{
        window.alert("please check from Username and password");
    }
}