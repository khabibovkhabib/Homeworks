var slides = document.getElementsByClassName("mySlides");
switchSlides();
function switchSlides() {
  var slideCount = slides.length;
  var i = 0;
  slides[i].style.display = "block";
  var switchInterval = setInterval(function() {
    i++;
    if (i < slideCount) {
      slides[i].style.display = "block";
      slides[i-1].style.display = "none";
    } else {
      clearInterval(switchInterval);
      slides[0].style.display = "block";
      slides[i-1].style.display = "none";
      setTimeout(switchSlides, 100);
    }
  }, 1800);
}
