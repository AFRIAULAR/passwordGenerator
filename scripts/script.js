const $ = (selector) => document.querySelector(selector)
const $$ = (selectors) => document.querySelectorAll(selectors)

// VARIABLES
const button = $('#generatePassword')
const passGenerated = $('#passGenerated')
let length = document.getElementById('lengthChar')
const length12 = $("#length12")
const length9 = $("#length9")
const length6 = $("#length6")

let upperCase = $('#upperCase')
let lowerCase = $('#lowerCase')
let numeric = $('#numeric')
let symbols = $('#symbols')

let onlyLetters = $('#onlyLetters')
let alphaNumeric = $('#alphaNumeric')
let allChar = $('#allChar')

let lowerLetters = "abcdefghijklmnopqrstuvwxyz"
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers = "0123456789"
let symbol = ".?;-_¡!¿*%&$/"
let selectedOptions = []

const textToCopy = $("#passGenerated")
const btnCopy = $("#btnCopy")

// CUSTOM EVENTS
upperCase.addEventListener("click", (e) => {
    (upperCase.checked) ? selectedOptions.push(upperLetters) :
        selectedOptions.splice(selectedOptions.indexOf(upperLetters), 1);
})
lowerCase.addEventListener("click", (e) => {
    (lowerCase.checked) ? selectedOptions.push(lowerLetters) :
    selectedOptions.splice(selectedOptions.indexOf(lowerLetters), 1);

})
numeric.addEventListener("click", (e) => {
    (numeric.checked) ? selectedOptions.push(numbers) :
        selectedOptions.splice(selectedOptions.indexOf(numbers), 1)
})
symbols.addEventListener("click", (e) => {
    (symbols.checked) ? selectedOptions.push(symbol) :
        selectedOptions.splice(selectedOptions.indexOf(symbol), 1)
})

// RULES EVENTS
onlyLetters.addEventListener("click", () => {
    selectedOptions.length = 2;
    selectedOptions.splice(selectedOptions.indexOf(numbers), 1)
    symbols.checked = false; selectedOptions.splice(selectedOptions.indexOf(symbol), 1)
    upperCase.checked = true; selectedOptions.push(upperLetters)
    lowerCase.checked = true; selectedOptions.push(lowerLetters)
    numeric.checked = false;
    symbol.checked = false;
    alphaNumeric.checked = false;
    allChar.checked = false;

    if (upperCase.checked && !lowerCase.checked) {
        selectedOptions.push(upperLetters)
        selectedOptions.splice(selectedOptions.indexOf(lowerLetters), 1);
    }
    if (lowerCase.checked && !upperCase.checked) {
        selectedOptions.push(lowerLetters)
        selectedOptions.splice(selectedOptions.indexOf(upperLetters), 1);
    }
})

alphaNumeric.addEventListener("click", () => {
    selectedOptions.pop();
    selectedOptions.splice(selectedOptions.indexOf(upperLetters), 1)
    selectedOptions.splice(selectedOptions.indexOf(lowerLetters), 1)
    selectedOptions.splice(selectedOptions.indexOf(symbol), 1)
    numeric.checked = true; selectedOptions.push(numbers)
    symbols.checked = false;
    lowerCase.checked = false;
    upperCase.checked = false;
    allChar.checked = false;
    symbol.checked = false;
    onlyLetters.checked = false;
})

allChar.addEventListener("click", () => {
    selectedOptions.shift()
    selectedOptions.shift();
    numeric.checked = true; selectedOptions.push(numbers);
    lowerCase.checked = true; selectedOptions.push(lowerLetters);
    upperCase.checked = true; selectedOptions.push(upperLetters);
    symbols.checked = true; selectedOptions.push(symbol);
    alphaNumeric.checked = false;
    onlyLetters.checked = false; 
})

// GENERATE PASSWORD
button.addEventListener("click", () => {
    if (length12.checked)length = length12.value
    if (length9.checked)length = length9.value
    if (length6.checked)length = length6.value

    let password = selectedOptions.join('')
    let passwordGenerated = "";
    for (let i = 0; i < length; i++) {
        passwordGenerated += password.charAt(Math.floor(Math.random() * password.length));
    }
    passGenerated.innerHTML = passwordGenerated
})

// COPY CLIPBOARD
btnCopy.addEventListener("click", () => {
    let passwordCopy = textToCopy.innerText
    navigator.clipboard.writeText(passwordCopy)
})

