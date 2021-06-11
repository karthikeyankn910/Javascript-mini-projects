const increment = document.querySelector ('.increment');
const decrement = document.querySelector ('.decrement');
const count = document.querySelector ('.count');

var countVal = 0;
count.innerText = countVal;
increment.addEventListener ('click', () => {
    countVal++;
    count.innerText = countVal; 
    checkCount ();
});

decrement.addEventListener ('click', () => {
    countVal--;
    count.innerText = countVal; 
    checkCount ();
});

function checkCount () {
    if (countVal == 0) {
        count.classList.add ('zero');
        count.classList.remove ('positive', 'negative');
    }
    else if (countVal > 0) {
        count.classList.add ('positive');
        count.classList.remove ('zero', 'negative');
    }
    else if (countVal < 0) {
        count.classList.add ('negative');
        count.classList.remove ('zero', 'positive');
    }
}
 