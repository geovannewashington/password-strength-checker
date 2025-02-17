'use strict'

//TODO: Improve password checking logic

const passInput = document.getElementById('password-input');
const msg = document.getElementById('message');
const strField = document.getElementById('strength');

function calculateStrength() {
        let strength = 0;
        
        // 1. Length Test:
        if (passInput.value.length >= 12) {
                strength += 2;
        } else if (passInput.value.length >= 8) {
                strength += 1;
        }
        
        // 2. Character Diversity 
        if (/[A-Z]/g.test(passInput.value)) {
                strength += 1;
        }
        if (/[a-z]/g.test(passInput.value)) {
                strength += 1;
        }
        if (/[0-9]/g.test(passInput.value)) {
                strength += 1;
        }
        if (/[^A-Za-z0-9]/.test(passInput.value)) {
                strength += 2;
        }

        return strength;
} 

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
        const strength = calculateStrength();
        console.log(`total strength: ${strength}`);
        showPass();
        checkPassStr();
});