document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".carousel-inner img");
    let currentIndex = 0;
  
    document.querySelector(".next").addEventListener("click", () => {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    });
  
    document.querySelector(".prev").addEventListener("click", () => {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      slides[currentIndex].classList.add("active");
    });
  
  });
  