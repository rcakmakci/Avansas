//NAVBAR MAKE TOP FİXED WHEN SCROLL

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-container');

    if (window.scrollY > 200) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.zIndex="999";
        navbar.style.height="70px";
    } else {
        navbar.style.position = 'static';
        navbar.style.height="90px"; 
    }
});



// Bell Animation
let isBlue = true;

setInterval(() => {
    const bell = document.querySelector('.bell-btn i');
    const bellBox = document.querySelector('.animation');

    // Animasyonu sıfırla
    bell.classList.add('no-animation');
    bellBox.classList.add('no-animation');

    setTimeout(() => {
        bell.classList.remove('no-animation');
        bellBox.classList.remove('no-animation');
    }, 10);

    // Renk değiştir
    if (isBlue) {
        bell.classList.remove('blue-bell');
        bell.classList.add('orange-bell');
    } else {
        bell.classList.remove('orange-bell');
        bell.classList.add('blue-bell');
    }

    isBlue = !isBlue;
}, 5000);




// Shopping Cart Open 

const shoppingCart = document.querySelector(".shopping-cart-box");
const shoppingCartBtn = document.querySelector(".shopping-cart");
shoppingCartBtn.addEventListener("mouseover" ,() => {
    shoppingCartBtn.style.background = "#F4F4F4";

    shoppingCart.style.opacity = "100%";
    shoppingCart.style.pointerEvents = "visible";
});
function handleMouseLeave() {
    shoppingCartBtn.style.background = "";

    shoppingCart.style.opacity = "0%";
    shoppingCart.style.pointerEvents = "none";
}

shoppingCart.addEventListener("mouseleave", handleMouseLeave);
shoppingCartBtn.addEventListener("mouseleave", handleMouseLeave);