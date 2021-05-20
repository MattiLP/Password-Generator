const passwordDisplay = document.getElementById('password-display');
const useUpercaseCheckbox = document.getElementById('use-upercase-checkbox');
const useSpecialCharactersCheckbox = document.getElementById('use-special-characters-checkbox');
const useDigitsCheckbox = document.getElementById('use-digits-checkbox');
const passwordLength = document.getElementById('password-length');

document.getElementById('genrate-button').addEventListener('click', () => generate());
useUpercaseCheckbox.addEventListener('click', () => generate());
useSpecialCharactersCheckbox.addEventListener('click', () => generate());
useDigitsCheckbox.addEventListener('click', () => generate());

passwordLength.value = 10;
useUpercaseCheckbox.checked = true;
useDigitsCheckbox.checked = true;

generate();

function generate() {
    var password = '';
    var currentChars = [];

    if(passwordLength.value > 30) {
        passwordLength.value = 30;
    } else if(passwordLength.value < 3) {
        passwordLength.value = 3;
    }

    for(var i = 0; i < Math.round(passwordLength.value); i++) {
        currentChars.push(lettersLowercase[Math.round(Math.random() * (lettersLowercase.length - 1))]);

        if(useDigitsCheckbox.checked) {
            currentChars.push(digits[Math.round(Math.random() * (digits.length - 1))]);
        }

        if(useUpercaseCheckbox.checked) {
            currentChars.push(lettersUpercase[Math.round(Math.random() * (lettersUpercase.length - 1))]);
        }

        if(useSpecialCharactersCheckbox.checked) {
            currentChars.push(specialCharacters[Math.round(Math.random() * (specialCharacters.length - 1))]);
        }

        password += currentChars[Math.round(Math.random() * (currentChars.length - 1))];  
        currentChars = [];
    }

    passwordDisplay.innerHTML = password;
}
