const data = {
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
        
    },
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
    
    
}


$(function() {
    const footerContent = $("#footerContent");
    

    let iletisimData = null;

    $.each(data, function(category, items) {
        if (category !== "İletişim") {
            populateGeneralCategory(category, items);
        } else {
            iletisimData = items;
        }
    });


    if (iletisimData) {
        populateIletisimCategory("İletişim", iletisimData);
    }

    function populateGeneralCategory(category, items) {
        const listFooterTemplate = $(".list-footer-tamplate")
            .clone()
            .removeClass("list-footer-tamplate")
            .show();

        listFooterTemplate.find("h4").text(category);
        const listItemTemplate = listFooterTemplate.find("li").first().clone();

        $.each(items, function(index, value) {
            const newListItem = listItemTemplate.clone().find("a").text(value).end();
            listFooterTemplate.append(newListItem);
        });

        footerContent.append(listFooterTemplate);
    }

    function populateIletisimCategory(category, items) {
        const iletisimListTemplate = $(".communication-list-footer-tamplate")
            .clone()
            .removeClass("iletisim-list-footer-tamplate")
            .show();

        const iletisimItems = iletisimListTemplate.find("li").clone();
        iletisimListTemplate.empty();


        $.each(items, function(index, value) {
            const newListItem = iletisimItems.eq(0).clone()
                .find("h5").text(index).end()
                .find("span").text(value).end();
            iletisimListTemplate.append(newListItem);
        });

        iletisimListTemplate.append(iletisimItems.eq(1), iletisimItems.eq(2));
        footerContent.append(iletisimListTemplate);
    }
});



