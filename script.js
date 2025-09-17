const slides = document.getElementById('slides');
const images = slides.getElementsByTagName('img');
let index = 0;

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % images.length;
  updateSlide();
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
});

function updateSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

// Carrusel automático cada 4 segundos
setInterval(() => {
  index = (index + 1) % images.length;
  updateSlide();
}, 4000);

// Autoplay de música
window.addEventListener('click', () => {
  const music = document.getElementById("bg-music");
  if (music.paused) music.play();
});
