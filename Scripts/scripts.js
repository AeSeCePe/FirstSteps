jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon');
    menu=$('.nav a');
    menuBtn.click(function(){

        if(menu.hasClass('show')){
            menu.removeClass('show');
        }
        else{
        menu.addClass('show');
        }
    });
});const track = document.querySelector('.carousel-track');
const slides = Array.from(document.querySelectorAll('.carousel-slide'));
const slideWidth = slides[0].offsetWidth;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 3, slides.length - 3);
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 3, 0);
    updateCarousel();
});