//NAVBAR MAKE TOP FİXED WHEN SCROLL

window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-container');

    if (window.scrollY > 200) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.zIndex="999";
        navbar.style.height="70px";
        navbar.style.boxShadow="0 0 25px rgba(0,0,0,.1)";

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




$(document).ready(function() {
    const $shoppingCart = $(".shopping-cart-box");
    const $shoppingCartBtn = $(".shopping-cart");

    $shoppingCartBtn.on("click", function() {
        $shoppingCartBtn.css("background", "#F4F4F4");
        $shoppingCart.css({
            "opacity": "100%",
            "pointer-events": "visible"
        });
        showCart();
    });

    function handleMouseLeave() {
        $shoppingCartBtn.css("background", "");
        $shoppingCart.css({
            "opacity": "0%",
            "pointer-events": "none"
        });
    }

    $shoppingCart.on("mouseleave", handleMouseLeave);
    $shoppingCartBtn.on("mouseleave", handleMouseLeave);
});

$("#search-input").on('input', function() {
    let query = $(this).val();
    console.log(query);
    if (query.length > 2) {
        $.ajax({
            url: '/api/search',
            type: 'GET',
            data: { q: query },
            success: function(data) {
                OpenSerachResultBox(data)
            },
            error:function () {

                OpenSerachResultBox();
            }

        });
    }
});
// Sarch div open 

function OpenSerachResultBox(data) {  
//Gelen datayla işlemler yapabilriim burada search resul box ı dinamik hale getirebilrim 
    const searchResultBox =  $(".search-results-box");
    const inputVal =  $("#search-input").val();
    
    if (inputVal == "kağıt") {
     searchResultBox.addClass("search-results-active");

    }
    else{
    searchResultBox.removeClass("search-results-active");
    }
    
}
$(document).on('click', function(event) {
    const searchResultBox =  $(".search-results-box");
    if (!$(event.target).closest('.search-div').length) {
        searchResultBox.removeClass("search-results-active");
    }
});
    

// Active Search div 
$(".search-div input").on("focus", function() {
    $(this).closest('.search-div').addClass('search-div-active');
});

$(".search-div input").on("blur", function() {
    $(this).closest('.search-div').removeClass('search-div-active');
});