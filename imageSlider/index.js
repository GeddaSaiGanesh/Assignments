let slideIndex = 1;
let isPaused = false;
showSlides(slideIndex);

function plusSlides(n) {
  isPaused = true;
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  isPaused = true;
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function automaticSlides(isPaused) {
  let i;
  let slides = document.getElementsByClassName("slider-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(automaticSlides,3000);
}

if (!isPaused) {
  automaticSlides(isPaused);
} else {
  clearTimeout(automaticSlides);
}
