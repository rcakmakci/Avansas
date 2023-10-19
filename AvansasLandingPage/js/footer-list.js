const data = {
    "Kategoriler": [
        "Markalar",
        "Kahve",
        "Çay",
        "Vantilatör",
        "Okul Alışverişi 2023",
        "Kalemler",
        "Yazı Tahtası",
        "Yazıcılar",
        "Lazer Yazıcılar",
        "Karton Bardak",
        "Fosforlu Kalem",
        "Ofis Mobilyaları",
        "A4 Kağıdı",
        "Çöp Poşeti",
        "Ofis Sandalyesi",
        "Filtre Kahve Makinesi",
        "Hesap Makinesi"
    ],
    "Bizi Tanıyın": [
        "İş Konseptimiz",
        "Hakkımızda",
        "Neden Avansas?",
        "Mağazalarımız",
        "Ödüllerimiz",
        "Basında Biz",
        "İnsan Kaynakları",
        "Reklam Filmlerimiz",
        "İletişim",
        "Kişisel Verilerin Korunması",
        "Yeni Avansas Kariyer",
        "İşlem Rehberi",
        "Avansas App"
    ],
    "Hesabım": [
        "Üyelik Bilgilerim",
        "Favori Ürünlerim",
        "Son Siparişimi Tekrarlayın"
    ],
    "Yardım": [
        "Yeni Üyelik",
        "Hızlı Teslimat",
        "Kolay İade / Değişim",
        "Güvenlik",
        "Ödeme Seçenekleri",
        "Kupon Kullanımı ve  Promosyonlar",
        "Formlar ve Yardımcı Dokümanlar",
        "Şikayet ve Öneri Formu",
        "Yeni Tedarikçimiz Olun"
    ],
    "İletişim": {
        "E-Mail": "destek@avansas.com",
        "Müşteri Hizmetleri Telefon": "444 20 22",
        "Genel Müdürlük Santral": "0216 365 78 00",
        "KEP Adresi": "avansas@hs01.kep.tr",
        "Adres": 
            `Firma Avansas Ofis Malzemeleri Tic. A.Ş.
            Kısıklı Mah. Ferah Cad. No/10 Kat: 4-5-6-7
            Üsküdar
            34692
            İstanbul/Türkiye `
        
    }
}


$(function() {

    const footerContent = $("#footerContent");

    $.each(data, function(category, items) {
        if (category !== "İletişim") {
            // Diğer kategoriler için olan format
            let listFooterTemplate = $(".list-footer-tamplate")
                .clone()
                .removeClass("list-footer-tamplate")
                .css("display", "inline-block"); //Burayı temize çektim 
            listFooterTemplate.find("h4").text(category);
            let listItemTemplate = listFooterTemplate.find("li").first().clone();

            
            $.each(data[category], function (index, value) { 
                let newListItem = listItemTemplate.clone().find("a").text(value).end();
                listFooterTemplate.append(newListItem);
            });
            footerContent.append(listFooterTemplate);

        } else {
            let iletisimListTemplate = $(".iletisim-list-footer-tamplate")
                .clone()
                .removeClass("iletisim-list-footer-tamplate")
                .css("display", "inline-block");
        
            // h4 elementini klonlayıp saklayın.
            let title = iletisimListTemplate.find("h4").clone().text(category);
        
            // li elemanlarını klonlayıp saklayın.
            let iletisimItems = iletisimListTemplate.find("li").clone();
            
            // Orijinal iletisimListTemplate içeriğini temizleyin.
            iletisimListTemplate.empty();
        
            // Önce title'ı, sonra dinamik içeriği ekleyin.
            iletisimListTemplate.append(title);
            
            $.each(data[category], function (index, value) {
                let newListItem = iletisimItems.eq(0).clone() // ilk li elemanını klonlayın.
                    .find("h5").text(index).end()
                    .find("span").text(value).end();
        
                iletisimListTemplate.append(newListItem);
            });
        
            // Son olarak statik li elemanları ekleyin.
            iletisimListTemplate.append(iletisimItems.eq(1), iletisimItems.eq(2));
            footerContent.append(iletisimListTemplate);
        }
        
    });

});


