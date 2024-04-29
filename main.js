"use strict";
const red = document.getElementById('r');
const green = document.getElementById('g');
const blue = document.getElementById('b');
const color = document.querySelector(".color");
const colorContainer = document.querySelector(".color-container");
const colorText = document.querySelector(".color-text");
const copy = document.querySelector(".fa-copy");
const message = document.querySelector(".message");

function change(e) {
    e.target.parentNode.children[2].innerHTML = e.target.value;
    let clr = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    colorContainer.style.backgroundColor = clr;
    colorText.innerText = clr;
    color.style.border = `1px solid ${clr}`;
    color.style.boxShadow = `${clr} 0px 5px 15px;`;
    if (Number(red.value) <= 100 && Number(green.value) <= 100 && Number(blue.value) <= 100) {
        colorText.style.color = 'white';
        copy.style.color = clr;
        copy.style.backgroundColor = 'white';
    } else {
        copy.style.backgroundColor = 'black';
        copy.style.color = clr;
        colorText.style.color = 'black'
    }
    copy.style.display = 'block';
}


function copyColor(e) {
    let clr = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    navigator.clipboard.writeText(`rgb(${red.value}, ${green.value}, ${blue.value});`);
    colorText.innerText = 'Nice color!';
    colorContainer.style.background = 'none';
    copy.style.display = 'none';
    let string = `<div class="message-container fade">
        <p>Copied to clipboard</p>
    </div>`;
    message.insertAdjacentHTML('afterbegin', string);
    const messageContainer = document.querySelector(".message-container");
    setTimeout(function () {
        message.removeChild(message.lastElementChild);
    }, 3000);
    document.body.style.background = clr;
    setTimeout(function () {
        document.body.style.background = 'none';
    }, 200)
}

//Event Listeners
copy.addEventListener('click', copyColor);
red.addEventListener('input', change);
green.addEventListener('input', change);
blue.addEventListener('input', change);
