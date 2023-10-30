

$(function() {
    const Produt = [
   
        {
            "produtKod" : "63911",
            "productName": "Avansas 905 Fosforlu Kalem Karışık Renkli 5'li Paket",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/63911/avansas-905-fosforlu-kalem-karisik-renkli-5-li-paket-zoom-1.jpg",
            "productInfo1" : "1 - 4.5 mm dayanıklı uç kalınlığı",
            "productIndo2" : "Yazım Kapasitesi: 500 m",
            "price" : "72.00",
            "degerlendirme" :"47"
    
        },
        {
            "produtKod" : "67444",
            "productName": "Avansas Power Plus Hotmelt Koli Bandı 45 mm x 100 m Şeffaf 6’lı Paket",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/67444/avansas-power-plus-hotmelt-koli-bandi-45-mm-x-100-m-seffaf-6-li-paket-zoom-1.jpg",
            "productInfo1" : "Hotmelt bant",
            "productIndo2" : "Karton koli, çuval ve naylon yüzeyler için ideal",
            "price" : "194.10",
            "degerlendirme" :"26"
        },
        {
            "produtKod" : "63393",
            "productName": " Avansas Eco Plastik Klasör Geniş A4 Mavi",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/63393/avansas-eco-plastik-klasor-genis-a4-mavi-zoom-1.jpg",
            "productInfo1" : "480 sayfa kapasite",
            "productIndo2" : "Avrupa mekanizma",
            "price" : "46,50",
            "degerlendirme" :"108"
        },
        {
            "produtKod" : "62246",
            "productName": " Avansas Eco A4 Delikli Şeffaf Poşet Dosya 100'lü Paket",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/62946/avansas-a4-eco-delikli-seffaf-poset-dosya-100-lu-paket-zoom-1.jpg",
            "productInfo1" : "33 mikron",
            "productIndo2" : "A4 boyutlu 21.6 cm x 30 cm",
            "price" : "50,32",
            "degerlendirme" :"170"
        },
        {
            "produtKod" : "124145",
            "productName": " Projecta Standart A4 80 gr Fotokopi Kağıdı 1 Koli 5 Paket (2.500 Sayfa)",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/124145/projecta-standard-a4-fot-kagidi-1-koli-zoom-1.jpg",
            "productInfo1" : "1 kol 5 paket 2.500 sayfa",
            "productIndo2" : "Çift taraflı baskıya uygun",
            "price" : "409,90",
            "degerlendirme" :""
    
        },
        {
            "produtKod" : "61853",
            "productName": " Avansas Diplomat Zarf 1.Hamur Penceresiz 110 gr 10.5 cm x 24 cm 100'lü Paket",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/61853/avansas-diplomat-zarf-1-hamur-penceresiz-110-gr-10-5-cm-x-24-cm-100-lu-paket-zoom-1.jpg",
            "productInfo1" : "Kusursuz fiyat / performans dengesi",
            "productIndo2" : "Metrekare ağırlığı 110 gram",
            "price" : "87,73",
            "degerlendirme" :"20"
    
        },
        {
            "produtKod" : "90911",
            "productName": " Avansas Daily A4 Fotokopi Kağıdı 80 gr 1 Koli 5 Paket (1.250 Sayfa)",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/90911/avansas-daily-a4-80-gr-fot-kag-250x5-zoom-1.jpg",
            "productInfo1" : "1 m² ağırlığı 80 gram’dır",
            "productIndo2" : "1 kolide 5 paket A4 (1250 yaprak)",
            "price" : "299,89",
            "degerlendirme" :"160"
    
        },
        {
            "produtKod" : "77905",
            "productName": " Avansas Yazarkasa / Pos Rulosu 56 mm x 16 m 44 gr/m²  10'lu Paket",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/77905/avansas-44-gr-termal-rulo-56x16-10lu-zoom-1.jpg",
            "productInfo1" : "44 gr/m² termal kağıt",
            "productIndo2" : "Yazarkasa ve poslara uygun",
            "price" : "52,85",
            "degerlendirme" :"33"
    
        },
        {
            "produtKod" : "70391",
            "productName": " HP 953XL Yüksek Kapasiteli Sarı (Yellow) Kartuş F6U18AE",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/70391/hp-953xl-yuksek-kapasiteli-sari-yellow-kartus-f6u18ae-zoom-1.jpg",
            "productInfo1" : "1.600 sayfa baskı kapasi",
            "productIndo2" : "Üstün baskı kapasitesi ile yüksek kalitede baskılar",
            "price" : "1.185,98",
            "degerlendirme" :"4"
    
        },
        {
            "produtKod" : "64403",
            "productName": "Canon PG-46 Siyah (Black) Kartuş",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/64403/canon-pg-46-kartus-siyah-black-zoom-1.jpg",
            "productInfo1" : "400 sayfa baskı kapasitesi.",
            "productIndo2" : "Siyah renk",
            "price" : "438,55",
            "degerlendirme" :"21"
    
        },
        {
            "produtKod" : "81291",
            "productName": "  HP 415A Siyah Toner W2030A",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/81291/hp-w2030a-415a-siyah-toner-2-400-sayfa-zoom-1.jpg",
            "productInfo1" : "2400 sayfa baskı kapasiteli",
            "productIndo2" : "Yüksek kalitede belgeler elde edin",
            "price" : "2.935.25",
            "degerlendirme" :""
    
        },
        {
            "produtKod" : "79568",
            "productName": "  Avansas Econoprint HP CE278A  & CRG728 Siyah Muadil Toner 278A / 78A",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/79568/econoprint-hp-ce278a-78a-siyah-cipli-zoom-1.jpg",
            "productInfo1" : "2100 sayfa baskı kapasitesi",
            "productIndo2" : "Yüksek kaliteli baskı",
            "price" : "188,27",
            "degerlendirme" :"3"
    
        },
        {
            "produtKod" : "52668",
            "productName": "  Avansas Soft Tuvalet Kağıdı 24 Rulo",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/52668/avasoft-tuvalet-kagidi-24-lu-paket-zoom-1.jpg",
            "productInfo1" : "2 Katlı 24'lü Rulo",
            "productIndo2" : "150 Yaprak",
            "price" : "153,20",
            "degerlendirme" :"297"
    
        },
        {
            "produtKod" : "64158",
            "productName": " Avansas Çöp Torbası Büyük Boy 65 cm x 80 cm Siyah Tek Rulo ",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/64158/avansas-cop-torbasi-buyuk-boy-65-cm-x-80-cm-siyah-tek-rulo-zoom-1.jpg",
            "productInfo1" : "Tek ruloda 10 yaprak",
            "productIndo2" : "20 Mikron",
            "price" : "9,28",
            "degerlendirme" :"48"
    
        },
        {
            "produtKod" : "79529",
            "productName": "  Domestos Çamaşır Suyu Çam Ferahlığı 3.24 LT",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/79529/domestos-cam-suyu-cam-ferahligi-3240-ml-zoom-1.jpg",
            "productInfo1" : "Ultra Yoğun Ve Uzun Süreli Koruma",
            "productIndo2" : "Mükemmel Hijyen Ve Çam Ferahlığı",
            "price" : "101,39",
            "degerlendirme" :"148"
    
        },
        {
            "produtKod" : "63433",
            "productName": "Avansas Mikrofiber Temizlik Bezi 5'li Paket",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/63433/avansas-mikrofiber-temizlik-bezi-5-li-paket-zoom-1.jpg",
            "productInfo1" : "Yüksek emicilik",
            "productIndo2" : "Tüy bırakmaz",
            "price" : "99,95",
            "degerlendirme" :"34"
    
        },
        {
            "produtKod" : "57848",
            "productName": " Sandisk Cruzer Blade 16 GB USB 2.0 USB Bellek SDCZ50-016G-B35",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/57848/sandisk-cruzer-blade-16-gb-usb-2-0-usb-bellek-sdcz50-016g-b35-zoom-1.jpg",
            "productInfo1" : "16 GB bellek",
            "productIndo2" : "Kişisel dosyalarda parala koyulması ve şifreleme",
            "price" : "114,04 TL",
            "degerlendirme" :"13"

        },
        {
            "produtKod" : "99632",
            "productName": " Sunny Prime TV Stick 4K Ultra HD",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/99632/sunny-prime-tv-stick-sn01dngl300-zoom-1.jpg",
            "productInfo1" : "4K Ultra HD",
            "productIndo2" : "16 GB Hafıza",
            "price" : "1.541,18 TL",
            "degerlendirme" :""

        },
        {
            "produtKod" : "76831",
            "productName": " Panasonic Alkalin Power AA Kalem Pil 10'lu Paket",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/76831/panasonic-lr6apb-10bw-aa-10-lu-pil-zoom-1.jpg",
            "productInfo1" : "Paket içi miktar: 10 adet",
            "productIndo2" : "Pil boyu: AA",
            "price" : "112,82 TL",
            "degerlendirme" :"38"

        },
        {
            "produtKod" : "122604",
            "productName": " Rowell RW-12600 16  Ayaklı Vantilatör",
            "imgUrl": "https://cdnsta.avansas.com/mnresize/300/-/urun/122604/rowell-rw-12600-16--vantilator-zoom-1.jpg",
            "productInfo1" : "3 Kademe hız ayarı + 45Watt motor gücü",
            "productIndo2" : "3 Kanatlı pervane",
            "price" : "549,00 TL",
            "degerlendirme" :"15"

        },
        
    ]

    
    const produtListFragment = $(document.createDocumentFragment());
    // Her ürün için HTML yapısnını oluşturma
    $.each(Produt, function(index, product) {
            if(index <= 24){
                var productTamplate = $(".product-tamplate").clone().removeClass("product-tamplate");
                productTamplate.find("#product-a").css('display' , 'inline-block');
                productTamplate.find(".product-img img").attr("src" , product.imgUrl);
                productTamplate.find(".kod").text(product.produtKod);
                productTamplate.find(".product-name h2").text(product.productName);
                productTamplate.find(".price span").text(product.price + " "+"TL");
                productTamplate.find(".product-info ul li:eq(0) span ").text(product.productInfo1);
                productTamplate.find(".product-info ul li:eq(1) span ").text(product.productIndo2);
                productTamplate.find(".evaluation-count h5").text(product.degerlendirme + "Değerlendirme");

                produtListFragment.append(productTamplate);
            }
            
        
        
    });

    $(".owl-carousel").append(produtListFragment);
    
    $(".owl-carousel").children().first().remove(); // var olan ilk boş elementi siliyorum 
    

    var $carousel = $("#owl-demo");

    $carousel.owlCarousel({
        autoplay: false,
        loop:true,
        nav: false,
        items: 6,
        pagination: false,
        slideBy: 6,
        margin: 15,
    });


    $('.left-arrow').click(function() {
        $carousel.trigger('prev.owl.carousel');
    });

    $('.right-arrow').click(function() {
        $carousel.trigger('next.owl.carousel');
    });


    $('.increment').click(function() {

        let input = $(this).next('input');
        input.val(parseInt(input.val()) + 1);
    });

    $('.decrement').click(function() {

        let input = $(this).prev('input');
        if (parseInt(input.val()) > 0) {
            input.val(parseInt(input.val()) - 1);
        }
    });

});





    


