const body = document.querySelector ('body');
const ip = document.querySelector ('.ip');

// ip.addEventListener ('change', (e)=> {
//     e.preventDefault();
//     body.style.backgroundColor = e.target.value;
//     ip.value = ''
// })

function changecolor  ( ) {
    var color = ip.value;
    body.style.backgroundColor = color;
    ip.value=''
}

