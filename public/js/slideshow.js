const slides = document.querySelectorAll(".background-slide");
let currentSlide = 0;

function showSlide(slideIndex) {
    // Set the new slide to active
    slides[slideIndex].classList.add("active");
  
    // Apply the zoom effect
    slides[slideIndex].style.transform = "scale(1)";
    setTimeout(() => {
      slides[slideIndex].style.transform = "scale(1.2)";
    }, 0);
  
    // Slide in the new slide from the right
    slides[slideIndex].style.left = "100%";
    setTimeout(() => {
      slides[slideIndex].style.left = "0";
    }, 0);
  
    // Set the previous slide to inactive after a delay
    setTimeout(() => {
      slides[currentSlide].classList.remove("active");
    }, 1000);
  
    // Update the current slide index
    currentSlide = slideIndex;
  
    // Calculate the index of the next slide
    let nextSlide = currentSlide + 1;
    if (nextSlide >= slides.length) {
      nextSlide = 0;
    }
  
    // Show the next slide after a delay
    setTimeout(() => {
      showSlide(nextSlide);
    }, 5000);
  }

// Show the first slide
showSlide(0);