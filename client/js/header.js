//NAVBAR MAKE TOP FİXED WHEN SCROLL

window.addEventListener('scroll', function() {
    var navbar = $('#navbar');


    if (window.scrollY < 200) {
        navbar.addClass("navbar-container");
        navbar.removeClass("navbar-container-active");
        
        
    } else {
        navbar.addClass("navbar-container-active");
        navbar.removeClass("navbar-container");
    }
});



// Bell Animation
let isBlue = true;

function toggleAnimationAndColor() {
    const bellIcon = $('.animation i');

    // Renk değiştir
    if (isBlue) {
        bellIcon.removeClass('blue-bell').addClass('orange-bell');
    } else {
        bellIcon.removeClass('orange-bell').addClass('blue-bell');
    }
    isBlue = !isBlue;


    $('.animation').addClass('animation-active');
}

// Animasyon bittiğinde yeniden tetikliyor
$('.animation').on('animationend', function() {
    $(this).removeClass('animation-active');
    setTimeout(toggleAnimationAndColor, 4000);  
});


toggleAnimationAndColor();



    

// Active Search div 
$(".search-div input").on("focus", function() {
    $(this).closest('.search-div').addClass('search-div-active');
});

$(".search-div input").on("blur", function() {
    $(this).closest('.search-div').removeClass('search-div-active');
});