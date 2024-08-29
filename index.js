
function containsRequiredCharacter(password, requiredCharacters) {
    for (let i = 0; i < password.length; i++) {
        if (requiredCharacters.includes(password[i])) {
            return true;
        }
    }
    return false;
}

function validation() {

let popup = document.querySelector(".popup");   
let userName = document.querySelector("[username]").value;
let Email = document.querySelector("[email]").value;
let password = document.querySelector("[password]").value;
let confirmPassword = document.querySelector("[cpassword]").value;
let result = document.getElementById("result");
const requiredCharacters = '!@#$%^&*{}()~';
    result.innerHTML="";

    if (userName == "") {
        result.innerHTML = "Enter Username";
        return false;
    }
    else if(Email==""){
        result.innerHTML ="Enter Email ";
        return false;
    }
    else if(password==""){
        result.innerHTML ="Enter Password ";
        return false;
    }
    else if(confirmPassword==""){
        result.innerHTML ="Enter Confirm Password ";
        return false;
    }

    
    else if (password.length < 8) {
        result.innerHTML = "Password must be at least 8 characters long";
        return false;
    } 

    else if (!/[A-Z]/.test(password)) {
        result.innerHTML = "Password must include at least one uppercase letter";
        return false;
    }

    else if (!/[a-z]/.test(password)) {
        result.innerHTML = "Password must include at least one lowercase letter";
        return false;
    }

    else if (!containsRequiredCharacter(password, requiredCharacters)) {
        result.innerHTML = "Password must include at least one character from" + requiredCharacters;
        return false;
    }
    else if (password !== confirmPassword) {
        result.innerHTML = "Passwords do not match";
        return false;
    }
    else{
        popup.classList.add("open-slide");
        return false;
    }
}
let okBtn = document.getElementById("popup");


function hidePopup() {
    popup.classList.remove('open-slide');
}
okBtn.addEventListener('click', hidePopup);