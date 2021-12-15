var slideIndex = 1;
show(slideIndex);

function plus(n){
    show(slideIndex += n);
}
function switchTo(n){
    show(slideIndex = n);
}
function show(n) {
    var i;
    var slides = document.getElementsByClassName("slider__container--content");
    var dots = document.getElementsByClassName("slider__pagination--dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}