let myToggle = document.querySelector('.toggle');
let myIndicator = document.querySelector('.indicator');
let projestBody = document.querySelector('body');
myIndicator.addEventListener('click', function () {
    myToggle.classList.toggle("whiteToggle");
    myIndicator.classList.toggle("whiteIndicator")
    projestBody.classList.toggle("whiteBody")
})
