const imageJSON = {
    "images": [
      "https://cdnsta.avansas.com/mnresize/113/-/icerik/b2c/content/img/home/new/faber-logo.png",
      "https://cdnsta.avansas.com/mnresize/70/-/icerik/b2c/content/img/home/new/finish-logo.png",
      "https://cdnsta.avansas.com/mnresize/92/-/icerik/b2c/content/img/home/new/navigator-logo.png",
      "https://cdnsta.avansas.com/mnresize/93/-/icerik/b2c/content/img/home/new/nescafe-logo.png",
      "https://cdnsta.avansas.com/mnresize/92/-/icerik/b2c/content/img/home/new/samsung-logo.png",
      "https://cdnsta.avansas.com/mnresize/90/-/icerik/b2c/content/img/home/new/canon-logo.png",
      "https://cdnsta.avansas.com/mnresize/113/-/icerik/b2c/content/img/home/new/bic-marka-ansyf.jpg"
    ]
  }
  
  $(function() {

    $.each(imageJSON.images, function (index, value) { 
      if(index > 7){
        return false
      }
        var brandTamplate = $(".brand-tamplate").clone().removeClass("brand-tamplate");
        brandTamplate.css("display", "block");
        brandTamplate.find("img").attr("src", value);

        $(".brands").append(brandTamplate);
    });

});
