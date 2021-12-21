// Scroll to top with smooth animation!
// Tham khảo tại: https://gist.github.com/ricardozea/abb9f98a19f6d04a0269
window.onscroll = function(){
    if(document.body.onscroll > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("top_back").style.opacity = 1;
    }else{
        document.getElementById("top_back").style.opacity = 0;
    }
}
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

// add to cart button
window.onload = function(){
    document.onmousemove = function(e){
        var e = e || window.event, el = e.target || el.srcElement;
        if(el.id == 'xuyenviet__card--order__btn'){
            el.innerHTML = "<i class=\"far fa-heart\"></i> Thêm vào yêu thích";
        }
    }
    document.onmouseout = function(e){
        var e = e || window.event, el = e.target || el.srcElement;
        if(el.id == 'xuyenviet__card--order__btn'){
            el.innerHTML = "Đặt ngay";
        }
    }
    updateCartCount();
}
function addCart(id){
    products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));

    }
    let card = document.getElementsByClassName("xuyenviet__card")[id-1];
    products.push({'id': id, 'name': card.attributes['data-name'].value, 'image' : card.attributes['data-img'].value});
    localStorage.setItem('products', JSON.stringify(products));
    updateCartCount();
}
function updateCartCount(){
    products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
    }
    let c = products.length;
    if(c > 0){
        document.getElementById("cart-count").style.display = "inline-block";
        document.getElementById("cart-count").innerHTML = c;
    }else{
        document.getElementById("cart-count").style.display = "none";
    }
    
}