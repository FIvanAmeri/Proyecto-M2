document.addEventListener('DOMContentLoaded', function() {

    const carousel = document.getElementById('carousel-id');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const prevButton = carousel.querySelector('.carousel-control-prev');
    const nextButton = carousel.querySelector('.carousel-control-next');
    const carouselItems = carouselInner.querySelectorAll('.carousel-item');
    let currentIndex = 0;


    prevButton.addEventListener('click', function() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
    });


    nextButton.addEventListener('click', function() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
    });
  });