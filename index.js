let passwordBox = document.querySelector(".password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
const allChar = upperCase+lowerCase+number+symbol;

const generatePassword= ()=>{
    document.querySelector(".copyPassword").innerHTML = "" 
    let password = "";
    password += upperCase [Math.floor(Math.random() * upperCase.length)];
    password += lowerCase [Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(password.length<12){ // length of 12 char
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    passwordBox.value = password;
}

const copyPassword = ()=>{
    if(passwordBox.value == ""){
        document.querySelector(".copyPassword").innerHTML = "Generate New Password"
        document.querySelector(".copyPassword").style.color = "red"
    }else{
        passwordBox.select ();
        document.execCommand("copy")
        document.querySelector(".copyPassword").innerHTML = "password copied!"
        document.querySelector(".copyPassword").style.color = "rgb(34, 139, 34)"
    }
}

