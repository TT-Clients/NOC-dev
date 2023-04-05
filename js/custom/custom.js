

function showImages(el) {
    var windowHeight = jQuery( window ).height();
    jQuery(el).each(function(){
        var thisPos = jQuery(this).offset().top;

        var topOfWindow = jQuery(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            jQuery(this).addClass("fadeInPic");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
jQuery(document).ready(function(){
    showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
jQuery(window).scroll(function() {
    showImages('.star');
});


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

function showMenu() {
    var navLinks = document.getElementById("nav-links");
    console.log(navLinks.style.display)
    if (navLinks.style.display === "none" || navLinks.style.display === "") {
        navLinks.style.display = "flex";
    } else {
        navLinks.style.display = "none";
    }
  }

function checkScroll() {
    var scrollPos = window.innerHeight + window.scrollY;
    var elementPos = document.querySelector('.fade-in').offsetTop + document.querySelector('.fade-in').offsetHeight;
    if (scrollPos >= elementPos) {
      document.querySelector('.fade-in').classList.add('is-visible');
      window.removeEventListener('scroll', checkScroll);
    }
  }
  
  window.addEventListener('scroll', checkScroll);