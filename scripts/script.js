const $ = (selector) => document.querySelector(selector)
const $$ = (selectors) => document.querySelectorAll(selectors)

const button = $('#generatePassword')
let length = document.getElementById('lengthChar');

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








// const generatePassword = (alphabet, length) => {
//     let password = "";
//     if(length > 5 && length <13) {
//         for (let i = 0; i < length; i++) {
//         let random = Math.floor(Math.random() * alphabet.length);
//         password += alphabet.charAt(random);
//     }
// //falta agregar msg de error
//     }
//     return password
// }

// const generate = () => {
//     let length = lengthChar.value    
    
//     if (letters.checked) alphabet;
//     if (numeric.checked) alphabet += numbers;
//     if (allChar.checked) alphabet += numbers += symbol;
//     if (upperCase.checked) alphabet += upperLetters;
//     if (lowerCase.checked) alphabet;

//     const passGenerated = $('#passGenerated')
//     passGenerated.innerText = generatePassword(alphabet, length)

// }
    

// EVENT GENERATE
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