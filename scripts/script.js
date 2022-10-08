const $ = (selector) => document.querySelector(selector)
const $$ = (selectors) => document.querySelectorAll(selectors)

let length = document.getElementById('lengthChar');
let letters = $('#onlyLetters')
let numeric = $('#alphaNumeric')
let allChar = $('#allChar')
let upperCase = $('#upperCase')
let lowerCase = $('#lowerCase')

let alphabet = "abcdefghijklmnopqrstuvwxyz"
const arrayAlphabet = Array.from(alphabet)

let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const arrayAlphabetUpper = Array.from(upperLetters)

let numbers = "0123456789"
const arrayNumbers = Array.from(numbers)

let symbol = ".?,;-_¡!¿*%&$/"
const arraySymbol = Array.from(symbol)

const generatePassword = (alphabet, length) => {
    let password = "";
    if(length > 5 && length <13) {
        for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * alphabet.length);
        password += alphabet.charAt(random);
    }
//falta agregar msg de error
    }
    return password
}

const generate = () => {
    let length = lengthChar.value    
    
    if (letters.checked) alphabet;
    if (numeric.checked) alphabet += numbers;
    if (allChar.checked) alphabet += numbers += symbol;
    if (upperCase.checked) alphabet += upperLetters;
    if (lowerCase.checked) alphabet;

    const passGenerated = $('#passGenerated')
    passGenerated.innerText = generatePassword(alphabet, length)

}
    
// EVENT
const button = $('#generatePassword')
button.addEventListener("click", () => {
     generate();
});

// COPY CLIPBOARD
const textToCopy = $("#passGenerated")
const btnCopy = $("#btnCopy")

btnCopy.addEventListener("click", () => {
    let passwordCopy = textToCopy.innerText
    navigator.clipboard.writeText(passwordCopy)
})