const passwordDisplay = document.getElementById('password-display');
const useUpercaseCheckbox = document.getElementById('use-upercase-checkbox');
const useSpecialCharactersCheckbox = document.getElementById('use-special-characters-checkbox');
const useDigitsCheckbox = document.getElementById('use-digits-checkbox');

document.getElementById('genrate-button').addEventListener('click', () => generate());
useUpercaseCheckbox.addEventListener('click', () => generate());
useSpecialCharactersCheckbox.addEventListener('click', () => generate());
useDigitsCheckbox.addEventListener('click', () => generate());

generate();

function generate() {
    var password = '';
    var currentCharacters = [];

    for(var i = 0; i < 10; i++)
    {
        currentCharacters.push(lettersLowercase[Math.floor(Math.random() * lettersLowercase.length)]);

        if(useDigitsCheckbox.checked)
        {
            currentCharacters.push(digits[Math.floor(Math.random() * digits.length)]);
        }

        if(useUpercaseCheckbox.checked)
        {
            currentCharacters.push(lettersUpercase[Math.floor(Math.random() * lettersUpercase.length)]);
        }

        if(useSpecialCharactersCheckbox.checked)
        {
            currentCharacters.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        }

        password += currentCharacters[Math.floor(Math.random() * currentCharacters.length)];
    }

    passwordDisplay.innerHTML = password;
}