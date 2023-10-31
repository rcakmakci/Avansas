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


$("#search-input").on('input', function() {
    let query = $(this);

    if (query.val().length > 2) {
        $.ajax({
            url: '/api/search',
            type: 'GET',
            data: { q: query.val() },
            success: function(data) {
                
            },
            error:function () {
                OpenSerachResultBox(data)
                
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