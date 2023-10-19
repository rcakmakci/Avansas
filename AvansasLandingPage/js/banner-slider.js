// Banner Slider 
$(function(){

    let autoSlideInterval = startAutoSlide();
    let indexValue = 1;

    //Event handler da Click Eventini kullanım şeklleri 

    //javaScript ile 
    document.querySelector(".left-arrow").addEventListener("click",function() {
        side_slide(-1);
    });
    //jQury modern version ile 
    $('.right-arrow').on("click",function() {
        side_slide(1);
    });

    //jQury popüler fakat eski version ile
    $('.sliders-btns button').each(function(i) {
        $(this).click(function() {
            btm_slide(i + 1);
        });
    });


    showImg(indexValue);

    function btm_slide(e) {
        showImg(indexValue = e);
    }

    function side_slide(e) {
        clearInterval(autoSlideInterval);
        showImg(indexValue += e);
        autoSlideInterval = startAutoSlide();
    }

    function showImg(e) {
        const imgs = document.querySelectorAll('.img');
        const sliders = document.querySelectorAll('.sliders-btns button');
        const sliderContainer = document.querySelector('.images');

        if (e > imgs.length) { indexValue = 1; }
        if (e < 1) { indexValue = imgs.length; }

        updateSliderStyles(sliders);
        updateSliderPosition(sliderContainer, imgs);
    }

    function updateSliderStyles(sliders) {
        sliders.forEach(slider => {
            slider.style.background = "";
            slider.style.borderBottom = "";
        });

        const activeSlider = sliders[indexValue - 1];
        activeSlider.style.background = "#EAEAEA";
        activeSlider.style.borderBottom = "6px solid #3498DB";
    }

    function updateSliderPosition(sliderContainer, imgs) {
        const translateValue = -((indexValue - 1) * 100 / imgs.length) + "%";
        sliderContainer.style.transform = `translateX(${translateValue})`;
    }

    function startAutoSlide() {
        return setInterval(() => {
            indexValue++;
            showImg(indexValue);
        }, 4000);
    }


});