$(function(){
    const offerInfo = [
        {
            "imgUrl":"https://cdnsta.avansas.com/mnresize/488/-/icerik/b2c/content/img/category/avansas-kagit-kampanyasi-desktop-alt-banner-18ekim.jpg",
            "title": "Fotokopi Kağıtlarında 200 TL İndirim!",
            "desceription" :"2.000 TL ve üzeri alışverişlerde geçerlidir."
        },
        {
            "imgUrl":"https://cdnsta.avansas.com/mnresize/488/-/icerik/b2c/content/img/category/avansas-kahve-mak-desktop-alt-banner-17ekim.jpg",
            "title": "Kahve Makinelerinde Avantajlı Fiyatlar!",
            "desceription" :"Aradığınız ürünler, beklediğiniz fiyatlar!"
        },
        {
            "imgUrl":"https://cdnsta.avansas.com/mnresize/488/-/icerik/b2c/content/img/category/avansas-nescafe-rev-desktop-alt-banner-29eylul.jpg",
            "title": "Nescafe Ürünlerinde Özel İndirimler!",
            "desceription" :"Kaçırılmayacak fırsatlarla Avansas'ta sizi bekliyor!"
        },
        {
            "imgUrl":"https://cdnsta.avansas.com/mnresize/488/-/icerik/b2c/content/img/category/avansas-tkampanya-150tl-desktop-alt-banner-17ekim.jpg",
            "title": "Kağıt Havlu ve Tuvalet Kağıtlarında 150 TL İndirim!",
            "desceription" :"1.000 TL ve üzeri alışverişlerde geçerlidir!"
        },
        {
            "imgUrl":"https://cdnsta.avansas.com/mnresize/488/-/icerik/b2c/content/img/category/avansas-ekim-avantajli-urunleri-desktop-alt-banner-7ekim.jpg",
            "title": "Ekim'in Avantajlı Ürünleri!",
            "desceription" :"Aradığınız ürünler, beklediğiniz fiyatlar!"
        },
        {
            "imgUrl":"https://cdnsta.avansas.com/mnresize/732/-/icerik/b2c/content/img/category/bayrak-alt-banner-25ekim.jpg",
            "title": "Bayrak ve Flama Ürünleri Avansas'ta",
            "desceription" :"En uygun fiyat seçenekleriyle sizleri bekliyor!"
        },
       
    ]
        
    
    
    
    
    $.each(offerInfo, function(index, offer) {
        
        var offerTemplate = $(".offer-tamplate").clone().removeClass("offer-tamplate");
        offerTemplate.css('display', 'inline-block');
        
        // Use correct selectors to find and modify the child elements
        offerTemplate.find(".offer-img-div img").attr("src", offer.imgUrl);
        offerTemplate.find(".offer-div-info h4").text(offer.title);
        offerTemplate.find(".offer-div-info p").text(offer.desceription);
    
        $(".offer-container").append(offerTemplate);
        
        console.log(offer.imgUrl);    
    });
    
    

})

//$(".owl-carousel").children().first().remove(); // var olan ilk boş elementi siliyorum 

