// Set the current slide to 0
var currentSlide = 0;

// Get all the slideshow images
var slides = document.getElementsByClassName("slideshow-image");

// Show the first slide
slides[currentSlide].classList.add("active");

// Function to change the current slide
function nextSlide() {
  // Hide the current slide
  slides[currentSlide].classList.remove("active");
  
  // Move to the next slide
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Show the next slide
  slides[currentSlide].classList.add("active");
}

// Change the slide every 5 seconds
setInterval(nextSlide, 5000);
