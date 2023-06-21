let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = changeC()
});

function changeC() {
    let x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);

    return `rgb(${x},${y},${z} )`;
};
// task1
const counterElem = document.querySelector("#counter");
const but = document.getElementById('btn2');
let count = 0;
but.onclick = function incrementCounter(event) {
    count = count + 1;
    counterElem.innerHTML = count;
};
// task2
const changeImage = () => {
    const image = document.getElementById('image');

    image.src = 'https://i.imgur.com/lQO8B47.png';
}

//   task3
