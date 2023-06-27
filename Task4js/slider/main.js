let imageArr = [
  "image/1.jpg",
  "image/2.jpg",
  "image/3.jpg",
  "image/4.jpg",
  "image/5.jpg"
]
let index = 0;
let imageCount = imageArr.length;
let settings = {
  duration: '1200',
  random: true
}

init(settings);
document.querySelector('.fa-chevron-left').addEventListener('click', function () {
  index--;
  showSlide(index);
});
document.querySelector('.fa-chevron-right').addEventListener('click', function () {
  index++;
  showSlide(index);
})

function init(settings) {
  setInterval(function () {
    if (settings.random) {
      index= index+1
    }
    showSlide(index);
  }, settings.duration)
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = imageCount - 1;
  } else if (i >= imageCount) {
    index = 0;
  }
  document.querySelector('.mainImage').setAttribute('src', imageArr[index]);
}