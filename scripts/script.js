const $ = (selector) => document.querySelector(selector)
const $$ = (selectors) => document.querySelectorAll(selectors)

let length = $('.radio-length').value 
let letters = $('#onlyLetters')
let numeric = $('#alphaNumeric')
let allChar = $('#allChar')
let upperCase = $('#upperCase')
let lowerCase = $('#lowerCase')
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let symbol = ".?,;-_¡!¿*%&$/"

const generatePassword = (alphabet, length) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * alphabet.length);
        password += alphabet.charAt(random);
    }
    return password
}

const generate = () => {
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