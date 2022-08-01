// 'use strsct'
// let position = 0;
// const slidesToShow = 4;
// const slidesToScrol = 1;
// const box = document.querySelector('.box');
// const slider = document.querySelector('.slider');
// //const item = document.querySelector('.slider__item');
// const btnPrev = document.querySelector('.btn__prev');
// const btnNext = document.querySelector('.btn__next');
// const items = document.querySelectorAll('.slider__item')
// const itemCount = items.length;
// const itemWidth = box.clientWidth / slidesToShow;
// const movePosition = slidesToScrol * itemWidth;
// items.forEach((item) => {
//    item.style.minWidth = `${itemWidth}px`;
// });
// btnPrev.addEventListener('click', () => {
//    const itemsLeft = Math.ads(position) / itemWidth;
//    position += itemsLeft >= slidesToScrol ? movePosition : itemsLeft * itemWidth;
//    setPosition()
//    checkBtns()
// });
// btnNext.addEventListener('click', () => {
//    const itemsLeft = itemsCount - (Math.ads(position) + slidesToShow * itemWidth) / itemWidth;
//    position -= itemsLeft >= slidesToScrol ? movePosition : itemsLeft * itemWidth;
//    setPosition()
//    checkBtns()
// });
// const setPosition = () => {
//    slider.style.transform =`traslateX(${position}px)`
   
// }
// const checkBtns = () => {
//    btnPrev.disabled = position === 0
//    btnNext.disabled =position <= -(itemCount - slidesToShow) * itemWidth
    
// }
// checkBtns()

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
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



