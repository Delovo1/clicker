let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

const carusel = document.getElementById("1");
const slides = document.querySelectorAll(".slide");
const slideWidth = slides[0].offsetWidth; // реальная ширина одного слайда
let index = 0;

document.querySelector(".left").onclick = () => {
  if (index >= 0) {
    index--;
    carusel.style.transform = `translateX(${-index * slideWidth}px)`;
  }
};

document.querySelector(".right").onclick = () => {
  if (index < slides.length - 2) {
    index++;
    carusel.style.transform = `translateX(${-index * slideWidth}px)`;
  }
};
