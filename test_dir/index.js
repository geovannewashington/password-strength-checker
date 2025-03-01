'use strict'

const box = document.getElementById('box');
const textField = document.querySelector('.text');
let isHolding = false;

function holdAction() {
    if (isHolding) {
        box.style.backgroundColor = 'blue';
        console.log('Button is being held down!');
        textField.innerText = 'Password is currently visible';
        requestAnimationFrame(holdAction);
    }
}

function reset() {
    isHolding = false;
    textField.innerText = 'A senha está invisível';
    box.style.backgroundColor = 'red';
}

box.addEventListener('mouseover', () => {
    box.style.cursor = 'pointer';
});

box.addEventListener('mousedown', () => {
    isHolding = true;
    requestAnimationFrame(holdAction);
});

box.addEventListener('mouseup', () => {
    reset();
});

box.addEventListener('mouseleave', () => {
    reset();
});