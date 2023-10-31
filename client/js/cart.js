

$(function () {
    // Shopping Cat Open or Close Functions
    
    const $shoppingCart = $(".shopping-cart-box");
    const $shoppingCartBtn = $(".shopping-cart");

    $shoppingCartBtn.on("click", function() {
        $shoppingCartBtn.addClass("shopping-cart-active");
        $shoppingCart.addClass("shopping-cart-box-active");
        showCart();
    });

    function handleMouseLeave() {
        $shoppingCartBtn.removeClass("shopping-cart-active");
        $shoppingCart.removeClass("shopping-cart-box-active");
    }

    $shoppingCart.on("mouseleave", handleMouseLeave);
    

    // Increment Product Form Cart

    $(document).on('click', ".sh-increment", function(){
        let input = $(this).next('input');
        input.val(parseInt(input.val()) + 1).change();
        
        cartProudctIncrement.call(this).then(() =>{
            showCart();});
        
    });
    
    // Decrement Product Form Cart
    $(document).on('click', ".sh-decrement", function(){
        let input = $(this).prev('input');
        if (parseInt(input.val()) > 1) {
            input.val(parseInt(input.val()) - 1).change();
            cartProuductDecrement.call(this).then(() =>{
                showCart() });
        }else{
            input.val(parseInt(input.val() = 1)).change();
        }
        
       
        

    });
    
    // İf change Product Count İnput value
    $(document).on('change' ,'input.card-product-count',function(){
        let countProduct = $(this).val();
        let productCode = $(this).closest('.cart-product').attr('product-code');

        cartProuductCountUpdate(productCode,countProduct).then(() => {
            showCart();
        });
    });
    
    // ADD PRODUCT FROM CARD
    $(document).on('click', '.product-add .add-btn button',function(event) {

        addProductCart(this).then(() => {
            getCartDetailInfo();
        });
           
    });

    // DELETE PRODUCT FROM CARD
    $(document).on('click', '.cart-delete-product img', function(event) {
        let productId = $(this).closest('.cart-product').attr('product-code');
        deleteProductCart(productId).then(function(){
            showCart();
        });
            
    });

    getCartDetailInfo();
});

function addProductCart(element) {
    return new Promise(function(resolve, reject) {
        let urunDiv = $(element).closest('.product');

        let urunData = {
            "ürünKodu": parseInt(urunDiv.find('.product-kod .kod').text()),
            "Adet": parseInt(urunDiv.find('.count input').val()) // try catch doğruluğunu kontrol et 
        };
       if( typeof urunData.ürünKodu === 'number' && typeof urunData.Adet === 'number' , urunData.Adet >= 1){
            $.ajax({
                type: 'POST',
                url: 'http://127.0.0.1:8000/sepet-ekle',
                data: JSON.stringify(urunData),
                contentType: 'application/json',
                success: function (reponse) {
                    resolve(reponse);
                    urunDiv.find('.count input').val(1);
                    Swal.fire({
                        title: 'Ürün Başarıyla Sepete Eklendi',
                        icon: 'success',
                        confirmButtonText: 'Tamam',
                        confirmButtonColor: '#3085d6',
                      });
                 },
                error: function(jqXHR, textStatus, errorThrown) {
                    reject({
                        status: jqXHR.status,
                        message: errorThrown
                    });
                }
            });
        }else{
            Swal.fire({
                title: 'Lütfen Adeti Doğru Giriniz',
                icon: 'warning',
                confirmButtonText: 'Tekrar Dene',
                confirmButtonColor: '#922222',
            });
            urunDiv.find('.count input').val(1);
        }
        
    });
}

function getCartDetailInfo(){
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8000/sepet-detaylari/',
            contentType: 'application/json',
            success: function(data) {
                changeCartDetail(data);
                resolve();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    });
}
function deleteProductCart(id) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'DELETE',
            url: `http://127.0.0.1:8000/sepet/ürün-kaldır/${id}`,
            success: function(reponse){
                resolve(reponse);
            },
            error: reject
        });
    });
}

function cartProuductCountUpdate(productCode,adet) { 
    return new Promise((resolve, reject) =>{
        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/sepet/ürün-adet-update/${productCode}/${adet}`,
            contentType: 'application/json',
            success: function (response) {
                resolve(reponse);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    })
 }

function cartProudctIncrement() { 
    return new Promise((resolve, reject) =>{
        let productCode = $(this).closest('.cart-product').attr('product-code');
        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/sepet/ürün-artır/${productCode}`,
            contentType: 'application/json',
            success: function (reponse) {  
                resolve(reponse)
            },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    })
 }

 function cartProuductDecrement() { 
    return new Promise((resolve, reject) =>{
        let productCode = $(this).closest('.cart-product').attr('product-code');
        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/sepet/ürün-azalt/${productCode}`,
            contentType: 'application/json',
            success: function (reponse) { 
                resolve(reponse);
             },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    })
 }

function showCart() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8000/sepet',
            contentType: 'application/json',
            success: function(products) {
                renderCart(products);
                resolve();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    });
}

function renderCart(products) {
    const $shoppingCartProduct = $(".shopping-cart-product");
    const $cartEmpty = $(".shopping-cart-product-empty");

    $shoppingCartProduct.empty();
    if (!products.length) {
        $shoppingCartProduct.hide();
        $cartEmpty.show();
        changeCartDetail(0);
        return;
    } else{
        $shoppingCartProduct.show();
        $cartEmpty.hide();

        let cartTotalPrice = calculateTotalPrice(products);

        var cartDetail = {
            "totalPrice": cartTotalPrice,
            "productLength": products.length
        }
        changeCartDetail(cartDetail);

        console.log('fordan önce');
        for (let product of products) {

            let $cartProductTemplate = createCartProductTemplate(product);
            console.log('$cartProductTemplate', $cartProductTemplate);
            $shoppingCartProduct.append($cartProductTemplate);
        }
    }
    
}
function calculateTotalPrice(products) {
    return products.reduce((total, product) => {
       
        if (product.Adet <= 0 || product.ürün.Fiyat < 0) {
            console.error('Ürün adedi veya fiyatı negatif olamaz:', product);
            return total;
        }
        return total + (product.Adet * product.ürün.Fiyat);
    }, 0);
}

function createCartProductTemplate(product) {
    const $template = $(".cart-product-tamplate").first().clone().removeClass("cart-product-tamplate");
    $template.css("display", "flex");
    $template.attr({
        "product-id": product.ürün.id,
        "product-code": product.ürün.productKod
    });
    $template.find(".image-box img").attr("src", product.ürün.imgUrl);
    $template.find(".cart-product-title").text(product.ürün.productName);
    $template.find(".card-product-count").attr("product-id", product.ürün.id);
    $template.find(".cart-product-price").text(`${product.ürün.Fiyat} KDV Dahil`);
    $template.find(".cart-edit-product-count input").val(product.Adet);

    return $template;
}

function changeCartDetail(data) {
    let total = data.totalPrice;
    let count = data.productLength;


    if (total === 0 || !data) {
        total = "0.00";
        count = 0
    } else {
        total = total.toFixed(2).toLocaleString('tr-TR');
    }


    $("#count-info").text(`${count} Ürün`);
    $("#para").text(total + " TL");
    $(".shopping-cart-price span").text(`${total} TL`);
}



/*
$(() => {
    // Shopping Cat Open or Close Functions
    
    const $shoppingCart = $(".shopping-cart-box");
    const $shoppingCartBtn = $(".shopping-cart");

    $shoppingCartBtn.on("click", function() {
        $shoppingCartBtn.css("background", "#F4F4F4");
        $shoppingCart.css({
            "opacity": "100%",
            "pointer-events": "visible"
        });
        showCart();
    });

    function handleMouseLeave() {
        $shoppingCartBtn.css("background", "");
        $shoppingCart.css({
            "opacity": "0%",
            "pointer-events": "none"
        });
    }

    $shoppingCart.on("mouseleave", handleMouseLeave);
    $shoppingCartBtn.on("mouseleave", handleMouseLeave);

    // Increment Product Form Cart

    $(document).on('click', ".sh-increment", function(){
        let input = $(this).next('input');
        input.val(parseInt(input.val()) + 1).change();
        let productCode = $(this).closest('.cart-product').attr('product-code');
        cartProudctIncrement(productCode).then(() =>{
            showCart();});
        
    });
    
    // Decrement Product Form Cart
    $(document).on('click', ".sh-decrement", function(){
        let input = $(this).prev('input');
        if (parseInt(input.val()) > 0) {
            input.val(parseInt(input.val()) - 1).change();
        }
        let productCode = $(this).closest('.cart-product').attr('product-code');
        cartProuductDecrement(productCode).then(() =>{
            showCart();});
        

    });
    
    // İf change Product Count İnput value
    $(document).on('change' ,'input.card-product-count',function(){
        let countProduct = $(this).val();
        let productCode = $(this).closest('.cart-product').attr('product-code');

        cartProuductCountUpdate(productCode,countProduct).then(() => {
            showCart();
        })
       
        

    });
    
    // ADD PRODUCT FROM CARD
    $(document).on('click', '.product-add .add-btn button',function(event) {

        addProductCart(this).then(() => {
            getCartDetailInfo();
        });
           
    });

    // DELETE PRODUCT FROM CARD
    $(document).on('click', '.cart-delete-product img', function(event) {
        let productId = $(this).closest('.cart-product').attr('product-code');
        deleteProductCart(productId).then(() =>{
            showCart();});
            
    });

    getCartDetailInfo();
});

function cartProuductCountUpdate(productCode,adet) { 
    return new Promise((resolve, reject) =>{
        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/sepet/ürün-adet-update/${productCode}/${adet}`,
            contentType: 'application/json',
            success: resolve,
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    })
 }
function cartProudctIncrement(productCode) { 
    return new Promise((resolve, reject) =>{
        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/sepet/ürün-artır/${productCode}`,
            contentType: 'application/json',
            success: resolve,
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    })
 }
 function cartProuductDecrement(productCode) { 
    return new Promise((resolve, reject) =>{
        $.ajax({
            type: 'PUT',
            url: `http://127.0.0.1:8000/sepet/ürün-azalt/${productCode}`,
            contentType: 'application/json',
            success: function ( ) { 
                resolve();
             },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    })
 }

function addProductCart(element) {
    return new Promise(function(resolve, reject) {
        let urunDiv = $(element).closest('.product');

        let urunData = {
            "ürünKodu": parseInt(urunDiv.find('.product-kod .kod').text()),
            "Adet": parseInt(urunDiv.find('.count input').val()) // try catch doğruluğunu kontrol et 
        };

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/sepet-ekle',
            data: JSON.stringify(urunData),
            contentType: 'application/json',
            success: function ( ) { 
                resolve();
             },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    });
}

function deleteProductCart(id) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'DELETE',
            url: `http://127.0.0.1:8000/sepet/ürün-kaldır/${id}`,
            success: function ( ) { 
                resolve();
             },
            error: function ( ) { 
                reject();
             },
        });
    });
}

function showCart() {
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8000/sepet',
            contentType: 'application/json',
            success: function(products) {
                renderCart(products);
                resolve();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    });
}
function getCartDetailInfo(){
    return new Promise(function(resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:8000/sepet-detaylari/',
            contentType: 'application/json',
            success: function(data) {
                changeCartInfo(data);
                resolve();
            },
            error: function(jqXHR, textStatus, errorThrown) {
                reject({
                    status: jqXHR.status,
                    message: errorThrown
                });
            }
        });
    });
};

function renderCart(products) {
    const $shoppingCartProduct = $(".shopping-cart-product");
    $shoppingCartProduct.empty();

    let cartTotalPrice = products.reduce((total, product) => {

        if (!product || !product.ürün || typeof product.Adet !== 'number' || typeof product.ürün.Fiyat !== 'number') {
            console.error('Ürün geçersiz özelliklere sahip:', product);
            return total;
        }
        if (product.Adet <= 0 || product.ürün.Fiyat < 0) {
            console.error('Ürün adedi veya fiyatı negatif olamaz:', product);
            return total;
        }
    
        return total + (product.Adet * product.ürün.Fiyat);
    }, 0);
    
    cartTotalPrice = parseFloat(cartTotalPrice.toFixed(2));
    

    // Fonksiyon adı düzeltildi: changeCardInfo -> changeCartInfo
    changeCartInfo(cartTotalPrice, products.length);

    if (!products.length) {
        $shoppingCartProduct
            .removeClass("shopping-cart-product")
            .addClass('shopping-cart-product-empty')
            .text("Sepetenizde Ürün Bulunmamaktadır");
        return;
    }

    for (let product of products) {
        let $cartProductTemplate = createCartProductTemplate(product);
        $shoppingCartProduct.append($cartProductTemplate);
    }
}

function createCartProductTemplate(product) {
    const $template = $(".cart-product-tamplate").first().clone().removeClass("cart-product-tamplate");
    $template.css("display", "flex");
    $template.attr({
        "product-id": product.ürün.id,
        "product-code": product.ürün.productKod
    });
    $template.find(".image-box img").attr("src", product.ürün.imgUrl);
    $template.find(".cart-product-title").text(product.ürün.productName);
    $template.find(".card-product-count").attr("product-id", product.ürün.id);
    $template.find(".cart-product-price").text(`${product.ürün.Fiyat} KDV Dahil`);
    $template.find(".cart-edit-product-count input").val(product.Adet);

    return $template;
}

function changeCartInfo(data) {
    let total = data.totalPrice;
    let count = data.productLength;


    if (total === 0) {
        total = "00.00";
    } else {
        total = total.toFixed(2).toLocaleString('tr-TR');
    }

    // Sepet bilgilerini güncelle
    $("#count-info").text(`${count} Ürün`);
    $("#para").text(total + " TL");
    $(".shopping-cart-price span").text(`${total} TL`);
}

*/