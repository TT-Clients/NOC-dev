

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