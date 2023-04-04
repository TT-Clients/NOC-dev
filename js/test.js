
    let slideIndex = 0;
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("hero-carousel-slide");
    let captions = document.getElementsByClassName("hero-carousel-caption");
    
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      captions[i].classList.remove("active");
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    slides[slideIndex - 1].classList.add("active");
    captions[slideIndex - 1].classList.add("active");
    
    setTimeout(showSlides, 5000);
}


// Start the carousel when the page loads
window.addEventListener("load", () => {

    showSlides();
});
