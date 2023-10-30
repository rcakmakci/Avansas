const Whydata ={
    "cards": [
      {
        "class": "icon-fiyat-avantajı ",
        "name": "Rekabetçi  Fiyatlar",
        "description": "Sürekli uygun fiyatlar"
      },
      {
        "class": "icon-guven ", // Örnek konumlar
        "name": "Güvenilir   Hizmet",
        "description": "Her aşamada  özdenetim"
      },
      {
        "class": "icon-kolay-siparis-v ", // Örnek konumlar
        "name": "Kolay Sipariş",
        "description": "Kullanıcı dostu ara  yüz ile sorunsuz  alışveriş deneyimi"
      },
      {
        "class": "icon-hizi-teslimat", // Örnek konumlar
        "name": "Hızlı Teslimat",
        "description": "1 iş gününde, güvenli  gönderim"
      },
      {
        "class": "icon-urun-cesitliligi",
        "name": "Ürün çeşitliliği",
        "description": "7500’den fazla ürün  çeşidi"
      },
      {
        "class": "icon-kolay-iade-v ",
        "name": "Kolay İade",
        "description": "Kolaylaştırılmış iade  süreçlerimizle  alışveriş yaparken  içiniz hep rahat."
      },
    ]
  }


$(function() {
    function generateCards(data) {
        const $template = $(document).find(".why-cards-template");
        const $clonedContainer = $template.clone().removeClass("why-cards-template").addClass("why-cards").insertAfter($template);
        $clonedContainer.css({
           'display' : 'flex',
           'gap' : '0'
        });

        $.each(data.cards, function(index, cardData) {
          
            const $card = $clonedContainer.children().first().clone();

            $card.find(".why-icon i").addClass(cardData.class);
            $card.find("h3").text(cardData.name);
            $card.find("p").text(cardData.description);

            $clonedContainer.append($card);
        });

        
        $clonedContainer.children().first().remove();
    }

    generateCards(Whydata);
});
  
 
 

