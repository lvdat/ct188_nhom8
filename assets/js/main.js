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

// Love Tour _ ý tưởng từ giỏ hàng
window.onload = function(){
    // hover vào đổi thành "Thêm vào yêu thích"
    document.onmousemove = function(e){
        var e = e || window.event, el = e.target || el.srcElement;
        if(el.id == 'xuyenviet__card--order__btn'){
            el.innerHTML = "<i class=\"far fa-heart\"></i> Thêm vào yêu thích";
        }
    }
    //bỏ chuột ra trở về như cũ
    document.onmouseout = function(e){
        var e = e || window.event, el = e.target || el.srcElement;
        if(el.id == 'xuyenviet__card--order__btn'){
            el.innerHTML = "Đặt ngay";
        }
    }
    updateCartCount(); // update lại số tour yêu thích
}
function addCart(id){
    // thêm vào ds yêu thích
    products = [];
    if(localStorage.getItem('products')){
        products = JSON.parse(localStorage.getItem('products'));
        if(checkDuplicateLove(id, products)){
            // nếu đã thêm rồi thì báo lỗi
            alert("Bạn đã thích tour này rồi!");
            return false;
        }
    }
    let card = document.getElementsByClassName("xuyenviet__card")[id-1];
    products.push({'id': id, 'name': card.attributes['data-name'].value, 'image' : card.attributes['data-img'].value, 'start' : card.attributes['data-time-start'].value});
    localStorage.setItem('products', JSON.stringify(products));
    updateCartCount();
}
function updateCartCount(){
    // làm mới số tour yêu thích trên thanh Nav
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
function checkDuplicateLove(id, arr){
    // check xem tour id đã tồn tại trong localStorage hay chưa
    for(let i = 0; i < arr.length; i++){
        if(arr[i].id === id){
            return true;
        }
    }
    return false;
}

