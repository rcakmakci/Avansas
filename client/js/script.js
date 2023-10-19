

$(document).ready(function() {
    const firstRightImg = $(".fixed-world-img-first");
    const seconRightdImg = $(".fixed-world-img-second");
    const firstLeftImg = $(".left-side-fixed");
    const seconLeftImg = $(".lefts-site-fixed-image");

    const rightCloseBtn = $(".fixed-world-img-second span");
    const leftCloseBtn = $(".lefts-site-fixed-image span");
    
    firstRightImg.click(function() {
        firstRightImg.hide();
        seconRightdImg.show();
    });
    
    rightCloseBtn.click(function() {
        firstRightImg.show();
        seconRightdImg.hide();
    });
    
    firstLeftImg.click(function() {
        firstLeftImg.hide();
        seconLeftImg.show();
    });
    
    leftCloseBtn.click(function() {
        firstLeftImg.show();
        seconLeftImg.hide();
    });

    
});



document.querySelector('.goButton').addEventListener('click', function() {
    let hedef = document.querySelector('.footer');
    hedef.scrollIntoView({behavior: 'smooth'});

});



$(".search-div button").on("click", function () {  

    const searchResultBox =  $(".search-results-box");
    const inputVal =  $("#search-input").val();
    
    if (inputVal == "kağıt") {
     searchResultBox.addClass("search-results-active");

    }
    else{
    searchResultBox.removeClass("search-results-active");
    }
    
})
$(document).on('click', function(event) {
    const searchResultBox =  $(".search-results-box");
    console.log(event.target);
    if (!$(event.target).closest('.search-div').length) {
        searchResultBox.removeClass("search-results-active");
    }
});
    


