const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const noChecked = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const numChecked = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbolChecked = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let passEl1 = document.getElementById("box1")
let passEl2 = document.getElementById("box2")
let symbolsEl = document.getElementById("symbols")
let numbersEl = document.getElementById("numbers")

function getRandNumber(start,end){
    return start + Math.floor( Math.random() * end ) 
}

function copy(text) {
    
    var textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    document.execCommand('copy');
    console.log("Copied: " + text)
    alert("Password copied: "+text)
    document.body.removeChild(textArea);
}

let generateRandPass = function() {
    let pass1=""
    let pass2=""
    let start=0,end=characters.length
    let randIndex = 0
    if(symbolsEl.checked && numbersEl.checked){
        for(let i=0;i<15;i++){
            randIndex = getRandNumber(start,end)
            pass1 += characters[randIndex]
            randIndex = getRandNumber(start,end)
            pass2 += characters[randIndex]
        }
    }
    else if(symbolsEl.checked){
        for(let i=0;i<15;i++){
            end = symbolChecked.length
            randIndex = getRandNumber(start,end)
            pass1 += symbolChecked[randIndex]
            randIndex = getRandNumber(start,end)
            pass2 += symbolChecked[randIndex]
        }
    }
    else if(numbersEl.checked){
        for(let i=0;i<15;i++){
            end = numChecked.length
            randIndex = getRandNumber(start,end)
            pass1 += numChecked[randIndex]
            randIndex = getRandNumber(start,end)
            pass2 += numChecked[randIndex]
        }
    }
    else {
        for(let i=0;i<15;i++){
            end = noChecked.length
            randIndex = getRandNumber(start,end)
            pass1 += noChecked[randIndex]
            randIndex = getRandNumber(start,end)
            pass2 += noChecked[randIndex]
        }
    }
    
    passEl1.textContent = pass1
    passEl2.textContent = pass2
}

passEl1.onclick = function() {
    copy(passEl1.textContent)
}
passEl2.onclick = function() {
    copy(passEl2.textContent)
}

document.getElementById("generateP-el").onclick = generateRandPass;

