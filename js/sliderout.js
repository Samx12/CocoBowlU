// Agrega el siguiente código al final del archivo HTML, antes de cerrar la etiqueta </body>
function slider(){

    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    
    function showSlide(slideIndex) {
      slides.forEach((slide) => {
        slide.classList.remove('active');
      });
      slides[slideIndex].classList.add('active');
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    setInterval(nextSlide, 2000); // Cambia de slide cada 3 segundos
  }