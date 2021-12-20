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
