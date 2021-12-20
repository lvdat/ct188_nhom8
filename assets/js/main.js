// Scroll to top with smooth animation!
// Tham khảo tại: https://gist.github.com/ricardozea/abb9f98a19f6d04a0269
function scrollToTop() {
    var position =
        document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
        window.scrollBy(0, -Math.max(1, Math.floor(position / 10)));
        scrollAnimation = setTimeout("scrollToTop()", 30);
    } else clearTimeout(scrollAnimation);
}

// Responsive Navbar

function nav_toogle(){
    let nav = document.getElementById("header__content");
    if(nav.className == "header__content"){
        nav.className += " responsive";
    }else{
        nav.className = "header__content";
    }
}

// Slideshow
var slideIndex = 1;
show(slideIndex);

function plus(n){
    show(slideIndex += n);
}
function switchTo(n){
    show(slideIndex = n);
}
function autoSlide(){
    plus(1);
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

setInterval(autoSlide, 5000);
