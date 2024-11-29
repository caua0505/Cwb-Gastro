let currentSlide = 0; 
const slides = document.querySelectorAll('.carousel img');

function showSlides(index){
    slides.forEach(slides => slides.classList.remove('active'));

    slides[index].classList.add('active');
}

function prevSlide(){
   currentSlide = (currentSlide - 1 + slides.length) %  slides.length;
   showSlides(currentSlide);
}

function nextSlide(){
  currentSlide = (currentSlide + 1) % slides.length;
  showSlides (currentSlide);
}

showSlides(currentSlide);

setInterval (nextSlide , 3000);