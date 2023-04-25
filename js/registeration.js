function success() {
    let regInfo2 = document.getElementById("regInfo2");
    let regInfo = document.getElementById("regInfo");
    regInfo.innerHTML = "";
    regInfo2.innerHTML = "";
    window.alert("Registered successfully!");
}

function readForm() {
    let name = document.getElementById("ad");
    let surname = document.getElementById("soyad");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    let person = {name:name.value, surname:surname.value, email:email.value, number:number.value}
}

function failed() {
    let regInfo = document.getElementById("regInfo");
    regInfo.innerHTML = "Registeration Failed!";
    regInfo.style.color = 'red';
}

function registerationButton() {
    let regInfo2 = document.getElementById("regInfo2");
    let name = document.getElementById("ad");
    let surname = document.getElementById("soyad");
    let email = document.getElementById("email");
    let number = document.getElementById("number");
    
    if (name.value == "" || surname.value == "" || email.value == "" || number.value == "") {
        failed();
        if (name.value == "") {
            regInfo2.innerHTML = "Please provide a name.";
        }
        else if (surname.value == "") {
            regInfo2.innerHTML = "Please provide a surname.";
        }
        else if (email.value == "") {
            regInfo2.innerHTML = "Please provide an e-mail.";
        }
        else {
            regInfo2.innerHTML = "Please provide a phone number.";
        }
    }
    else {
        success();
        readForm();
    }
}