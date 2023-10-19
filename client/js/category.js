$(function() {

    var categoryData = {
        "MatbaaVeBaskiIsleri": {
            "basliklar": [
                {
                    "ad": "Kurumsal Çözümler",
                    "icerik1": [
                        "Kartvizit",
                        "Baskılı Karton Bardak",
                        "Kaşe",
                        "Küp Bloknot",
                        "Baskılı Ajanda/Defter",
                        "Antetli Kağıt",
                        "Diplomat Zarf",
                        "Dosyalar"
                    ],
                    "icerik2": [
                        "Torba Zarf",
                        "Amerikan Servis"
                    ]
                },
                {
                    "ad": "Promosyon Ürünleri",
                    "icerik1": [
                        "Promosyon Kalem",
                        "Promosyon USB",
                        "Promosyon Powerbank"
                    ]
                }
            ]
        },

        "OfisKırtasiye": {
            "basliklar": [
                {
                    "ad": "Kalemler",
                    "icerik1": [
                        "Asetat Kalemleri",
                        "Cam ve Boya Marker Kalem",
                        "Dolma Kalemler",
                        "Fineliner Kalem",
                        "Fosforlu Kalemler",
                        "İğne Uç Kalemler",
                        "Jel Kalem"
                    ],
                    "icerik2": [
                        "İmza Kalemleri",
                        "Kalem Uçları",
                        "Keçeli Kalemler",
                        "Kurşun Kalemler",
                        "Kalem Mürekkebi",
                        "Kaligrafi Kalemleri",
                        "Kumaş Kalemi",
                        "Kalem Seti"    ,
                    ],
                    "icerik3": [
                        "Marker Kalem",
                        "Prestij Kalemler",
                        "Roller Kalemler",
                        "Tükenmez Kalemler",
                        "Tahta Kalemi",
                        "Teknik Çizim Kalemleri",
                        "Versatil Uçlu Kalemler"
                        
                    ]


                },
                {
                    "ad": "Hediyelik Ürünler",
                    "icerik1": [
                        "Yeni İş Hediyesi",
                        "Hediyelik Kutu",
                        "Hediye Çantası",
                        "Prestij Kalemler",
                        "Prestij Defter",
                        "Kalem Seti",
                        "Cüzdan ve Anahtarlık",
                    ],
                }
            ],
            
        },
        "KagitUrunleri": {
            "basliklar": [
              {
                "ad": "Yazıcı ve Fotokopi Kağıtları",
                "icerik1": [
                  "Fotokopi Kağıtları",
                  "Numaralı Kağıt",
                  "Fotoğraf Kağıtları",
                  "Gramajlı Fotokopi Kağıtları",
                  "Renkli Fotokopi Kağıtları",
                  "Sürekli Form Kağıtları"
                ]
              },
              {
                "ad": "Teknik ve Özel Kağıtlar",
                "icerik1": [
                  "Aydınger Kağıtları",
                  "Karbon Kağıdı",
                  "Plotter Kağıtları",
                  "Eskiz Blok ve Defterler"
                ]
              },
              {
                "ad": "Termal Rulolar",
                "icerik1": [
                  "Yazarkasa ve Pos Ruloları",
                  "Sıramatik Rulosu",
                  "Akaryakıt Pompa Rulosu"
                ]
              }
            ]
          },
    };

    // CATAGORİES DROPDOWN OPEN  

    

    function openDropDown() {
        const categoryTitles = $(this).find('.category-title');
        $('.overlay').css({
            'opacity': '100%',
            'pointerEvents': 'auto'
        });
        $.each(categoryTitles, () => {
            categoryTitles.removeClass("active-title");
        })
        $(this).find('.category-title').first().addClass("active-title");
    }
    
    function closeDropDown() {
        $('.overlay').css({
            'opacity': '0%',
            'pointerEvents': 'none'
        });
    }
    
    $('.category-list-element, .category-list-element-manuel').hover(openDropDown, closeDropDown);

    
    function loadContent(title, categoryContent) {
        categoryContent.empty();
        
        $.each(categoryData, function(categoryKey, categoryValue) {
            $.each(categoryValue.basliklar, function(index, baslik) {
                if (baslik.ad === title) {
                    $.each(baslik, function(key, value) {
                        if (key !== 'ad') {
                            var ul = getTemplate();
                            $.each(value, function(index, item) {
                                createLiElement(ul,item); 
                            });
                            categoryContent.append(ul);
                        }
                    });
                }
            });
        });
    }

    function createLiElement(item,value){
        item.append('<li>' + value + '</li>');
    }
    
    function getTemplate() {
        var templateContent = $('#category-template').html();
        return  $(templateContent).clone();
    }

    $('.category-list-element').hover(
        function() {

            var categoryTitle = $(this).find('.category-title:first').text();  
            var categoryContent = $(this).find('.category-content');
            
            loadContent(categoryTitle,categoryContent);
        }
        );
    
    

    
    $(".category-titles li").hover(
        function() {
            const titles = $(".category-title");
            const hoveredTitle = $(this).find('.category-title');
            const categoryContent = $(this).closest('.dropdown').find('.category-content');
            $.each(titles, () => {
                titles.removeClass("active-title")
            })
            hoveredTitle.addClass("active-title");
    
            loadContent(hoveredTitle.text(), categoryContent);
        },
       
    );
    

});



        //Manuel code 
        
        let titles = document.getElementsByClassName('category-title-lists');
        let contents = document.getElementsByClassName('category-content');
        titles[0].style.color = '#0139A6';
        titles[0].style.fontWeight = '700';
        document.getElementById('kartus').classList.add('active');
            
        
        $(function() {
            $(".category-titles-manuel li").on("mouseover", function() {
                
                $(".category-content-manuel").removeClass("active");
                
                $(".category-title-lists").css({
                    'color': '#7f7a7a',
                    'fontWeight': '500'
                });
        
                $(this).find(".category-title-lists").css({
                    'color': '#0139A6',
                    'fontWeight': '700'
                });
        
                const targetCategory = $(this).attr("data-category");
                $("#" + targetCategory).addClass("active");
            });
        });
        
        
        var selectedSearchTonerTitle = $(".title-box");

        selectedSearchTonerTitle.on("click", function () {
            var activeTitle = $(this); 
            var titleIndex = activeTitle.attr("index"); 
            var bodyBoxes = $(".body-box > div");
            
            selectedSearchTonerTitle.removeClass("selected-title-box"); 
            activeTitle.addClass("selected-title-box"); 
            
            bodyBoxes.each(function() {
                var currentBox = $(this);
                var activeBox = currentBox.attr("index"); 
                currentBox.removeClass("active");
                
                if(String(activeBox) === String(titleIndex)) {
                    currentBox.addClass("active"); 
                }
            });
        });