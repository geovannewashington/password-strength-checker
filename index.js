'use strict'

//TODO: implement common-passwords.json using async  

const passInput = document.getElementById('password-input');
const msg = document.getElementById('message');
const strField = document.getElementById('strength');
const eyeIcon = document.querySelector('#icon-eye');
let isHolding = false;

async function fetchJsonFile() {
        const response = await fetch('./common-passwords.json');
        if (!response.ok) throw new Error('Error while fetching JSON file');
        return await response.json(); 
}

function containsWeakPasswords() {
        return fetchJsonFile()
                .then((senhas) => {
                        let contains = false;
                        senhas.forEach(element => {
                                if (element === passInput.value) {
                                        contains = true;
                                }  
                        });
                        return contains;
                })
                .catch(err => console.error(err));
}

// TODO: Detect Repeated Patterns
function calculateStrength() {
        let strength = 0; // -> the variable strength needs to be declare inside the function
        
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

        // 3. If it's a commonly used password
        let isWeak = containsWeakPasswords().then();
        if (isWeak) {
                strength -= 10; 
        }

        // 4. If it contains repeated patterns

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

function holdAction() {
        if (isHolding) {
                passInput.type = 'text';
                eyeIcon.style.color = '#fff';
                eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
                requestAnimationFrame(holdAction);
        }
}

function resetHoldAction() {
        isHolding = false;
        eyeIcon.style.color = '#656269';
        passInput.type = 'password';
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
} 

function togglePassView() {
        eyeIcon.addEventListener('mousedown', () => {
                isHolding = true;
                requestAnimationFrame(holdAction);
        });

        eyeIcon.addEventListener('mouseup', () => {
                resetHoldAction();
        });
        
        eyeIcon.addEventListener('mouseleave', () => {
                resetHoldAction();
        });
}

function formatDocument(borderColor, textColor) {
        passInput.style.borderColor  = borderColor;
        msg.style.color = textColor;
}

function showPass() {
        if (passInput.value.length) {                
                msg.style.display = 'block';
        } else {
                msg.style.display = 'none';
        }
}

passInput.addEventListener('input', () => {
        // this constant needs to be create inside here so it value gets recalculated everytime
        // the is a change on input
        const strength = calculateStrength();
        // console.log(`total strength: ${strength}`);
        //checkPassStr();
        // containsWeakPasswords().then(result => console.log(result));
});

showPass();
togglePassView();
