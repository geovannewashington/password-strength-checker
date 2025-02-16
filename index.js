'use strict'

//TODO: Improve password checking logic

const passInput = document.getElementById('password-input');
const msg = document.getElementById('message');
const strField = document.getElementById('strength');

function checkPassStr() {
        if (passInput.value.length >= 8) {
                strField.innerText = 'strong 💪';
                formatDocument('#26d730', '#26d730');
                
        } else if (passInput.value.length >= 4) {
                strField.innerText  = 'medium 😐';
                formatDocument('yellow', 'yellow');
                
        } else if (passInput.value.length === 0) {
                formatDocument('#323f3f', null);
        } else {
                strField.innerText = 'weak 🤒';
                formatDocument('#ff5925', '#ff5925');
        }
}

function formatDocument(borderColor, textColor) {
        passInput.style.borderColor  = borderColor;
        msg.style.color = textColor;
}

function showPass() {
        if (passInput.value.length > 0) {                
                msg.style.display = 'block';
        } else {
                msg.style.display = 'none';
        }
}

passInput.addEventListener('input', () => {
        showPass();
        checkPassStr();
});