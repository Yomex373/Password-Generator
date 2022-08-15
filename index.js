const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const btn = document.getElementById("btn");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

btn.addEventListener("click", function(){
    let firstPassword = ""
    let secondPassword = ""
    for (let i = 0; i < 16; i++) {
       firstPassword += characters[getRandomNumber()]
       secondPassword += characters[getRandomNumber()]
    }
    
    password1.textContent = firstPassword
    password2.textContent = secondPassword
})

function getRandomNumber() {
    return Math.floor(Math.random() * characters.length)
       
}
