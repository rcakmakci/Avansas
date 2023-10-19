const Aramadata = {
    "tablo1": [
        {"id": 1, "productName": "A3 Kağıt"},
        {"id": 2, "productName": "Baskılı Karton Bardak"},
        {"id": 3, "productName": "Karton Klasör"},
        {"id": 4, "productName": "Karton Bardak"},
        {"id": 5, "productName": "Telli Dosya"},
        {"id": 6, "productName": "Poşet Dosya"},
        {"id": 7, "productName": "Klasör"},
        {"id": 8, "productName": "Steril Eldiven"},
        {"id": 9, "productName": "Faber Castell Kalem"},
        {"id": 10, "productName": "Evony Maske"}
    ],
    "tablo2" :[
        {"id": 11, "productName": "Rebul Kolonya"},
        {"id": 12, "productName": "Jacobs Kahve"},
        {"id": 13, "productName": "Çaykur Çay"},
        {"id": 14, "productName": "Doğuş Çay"},
        {"id": 15, "productName": "Lipton Çay"},
        {"id": 16, "productName": "Mavi Plastik Klasör"},
        {"id": 17, "productName": "5 KG Küp Şeker"},
        {"id": 18, "productName": "Nitril Eldiven"},
        {"id": 19, "productName": "Duracell Pil"},
        {"id": 20, "productName": "Scrikss Kalem"}
    ],
    "tablo3":[
        {"id": 21, "productName": "Çöp Poşeti"},
        {"id": 22, "productName": "Edding Kalem"},
        {"id": 23, "productName": "Lamy Dolma Kalem"},
        {"id": 24, "productName": "Casio Hesap Makinesi"},
        {"id": 25, "productName": "Schneider Kalem"},
        {"id": 26, "productName": "Pınar Süt"},
        {"id": 27, "productName": "Renkli Tükenmez Kalem"},
        {"id": 28, "productName": "Doğadan Çay"},
        {"id": 29, "productName": "Sinbo Kahve Makinesi"},
        {"id": 30, "productName": "32'li Tuvalet Kağıdı"}
    ]
}



const Markadata = {
    "tablo4": [
        {"id": 1, "productName": "Navigator Fotokopi Kağıtları"},
        {"id": 2, "productName": "Selpak & Selpak Professional"},
        {"id": 3, "productName": "Lipton Demlik Poşet Çay"},
        {"id": 4, "productName": "Nestle Süt Tozu ve Kahve Kreması"},
        {"id": 5, "productName": "Mehmet Efendi Türk Kahvesi"},
        {"id": 6, "productName": "Nescafe Granül Kahve"},
        {"id": 7, "productName": "Kocatepe Türk Kahvesi"},
        {"id": 8, "productName": "Fritöz"},
        {"id": 9, "productName": "Beypazarı Soda ve Maden Suyu"},
        {"id": 10, "productName": "Decofis Ofis Sandalyeleri ve Koltukları"},
        {"id": 11, "productName": "Apple Kulak İçi Kulaklık"},
        {"id": 12, "productName": "HP Kartuş"}
    ],
    "tablo5": [
        {"id": 13, "productName": "Irmak Toz Şekerler"},
        {"id": 14, "productName": "Erikli Su"},
        {"id": 15, "productName": "Selin Kolonya"},
        {"id": 16, "productName": "Casio Hesap Makineleri"},
        {"id": 17, "productName": "Mehmet Efendi Çekirdek Kahveler"},
        {"id": 18, "productName": "Leitz Poşet Dosyalar"},
        {"id": 19, "productName": "Edding Fosforlu Kalem"},
        {"id": 20, "productName": "Epson Mürekkep Püskürtmeli Yazıcılar"},
        {"id": 21, "productName": "Tottolet Klozet Kapak Örtüsü ve Dispenseri"},
        {"id": 22, "productName": "Su Sebilleri"}
    ],
    "tablo6": [
        {"id": 23, "productName": "Tchibo Filtre Kahve"},
        {"id": 24, "productName": "Tefal Fritöz"},
        {"id": 25, "productName": "Noki Telli Dosyalar"},
        {"id": 26, "productName": "Unilever Professional Çamaşır Suları"},
        {"id": 27, "productName": "Luxell Fritöz"},
        {"id": 28, "productName": "Bic Tükenmez Kalem"},
        {"id": 29, "productName": "Ark Evrak Rafları"},
        {"id": 30, "productName": "Decofis Ofis Sandalyeleri ve Koltukları"},
        {"id": 31, "productName": "Noki Poşet Dosyalar"},
        {"id": 32, "productName": "Mehmet Efendi Filtre Kahveler"}
    ]
}

$(function() {
    function eklenenData(data, templateClass, title) {
        let template = $(templateClass).clone().removeClass("template-section");
        template.find("h2").text(title);

        $.each(data, function(key, items) {
            let tableTemplate = template.find(".table-container.template-table").first().clone().removeClass("template-table");
            let ul = tableTemplate.find("ul.template-list");
            let liTemplate = ul.find("li").first().clone();
            
            ul.empty();

            $.each(items, function(_, item) {
                let li = liTemplate.clone();
                li.find("a").attr("href", "#").text(item.productName);
                ul.append(li);
            });

            template.find(".lists").append(tableTemplate);
        });

        template.find(".table-container.template-table").remove();
        $(".popular-container").append(template.show());
    }

    eklenenData(Aramadata, ".popular-aramalar.template-section", "Popüler Aramalar");
    eklenenData(Markadata, ".populer-markalar.template-section", "Popüler Markalar");
});


