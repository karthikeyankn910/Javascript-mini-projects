const body = document.querySelector ('body');
const hexcode = document.querySelector ('.hexcode');
const button = document.querySelector ('button');
const codes = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

function changeColor() {
    var code = '#';
    for (let i = 0; i < 6; i++) {
        let rand = Math.floor (Math.random() * codes.length);
        code = code + codes[rand];
    }
    hexcode.innerText = code;
    body.style.backgroundColor = code;
}
