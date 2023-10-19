

$(function() {
    // Increment Product Form Cart

    $(document).on('click', ".sh-increment", function(){
        let input = $(this).next('input');
        input.val(parseInt(input.val()) + 1).change();
        let productCode = $(this).closest('.cart-product').attr('product-code');
        cartProudctIncrement(productCode)
        .then(showCart)
        .catch((error)=>{
            console.log(error);
        })
    });
    
    // Decrement Product Form Cart
    $(document).on('click', ".sh-decrement", function(){
        let input = $(this).prev('input');
        if (parseInt(input.val()) > 0) {
            input.val(parseInt(input.val()) - 1).change();
        }
        let productCode = $(this).closest('.cart-product').attr('product-code');
        cartProuductDecrement(productCode)
        .then(showCart)
        .catch((error)=>{
            console.log(error);
        })

    });
    
    // İf change Product Count İnput value
    $(document).on('change' ,'input.card-product-count',function(){
        let countProduct = $(this).val();
        let productCode = $(this).closest('.cart-product').attr('product-code');
        console.log(productCode);
        cartProuductCountUpdate(productCode,countProduct)
        .then(showCart)
        .catch((error) => {
            console.log(error.message);
        })
        

    });
    
    // ADD PRODUCT FROM CARD
    $('.product-add .add-btn button').on('click', function(event) {
        event.preventDefault();
        addProductCart(this)
            .then(showCart)
            .catch(function(error) {
                console.error("Sepete Ekleme Sırasında Bir Hata Oluştu:", error);
            });
    });

    // DELETE PRODUCT FROM CARD
    $(document).on('click', '.cart-delete-product img', function(event) {
        let productId = $(this).closest('.cart-product').attr('product-code');
        deleteProductCart(productId)
            .then(showCart)
            .catch(function(error) {
                console.error("Bir hata oluştu:", error);
                if (error.status === 404) {
                    console.error("Server'a Ulaşılamıyor");
                }
            });
    });

    showCart();
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

function addProductCart(element) {
    return new Promise(function(resolve, reject) {
        let urunDiv = $(element).closest('.product');
        let fiyatText = urunDiv.find('.product-price .price span').text();
        let fiyat = parseFloat(fiyatText.replace(' TL', '').replace(',', '.'));
        
        let urunData = {
            "ürünKodu": parseInt(urunDiv.find('.product-kod .kod').text()),
            "Adet": parseInt(urunDiv.find('.count input').val())
        };

        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/sepet-ekle',
            data: JSON.stringify(urunData),
            contentType: 'application/json',
            success: resolve,
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
            success: resolve,
            error: reject
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
                renderSepet(products);
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


function renderSepet(products) {
    $(".shopping-cart-product").empty();

    // Caldulate Product Price
    let cartTotalPrice  = 0;
    $.each(products, function(i , product){

        let productCount = product.Adet;

        let productTotalPrice = productCount * product.ürün.Fiyat;

        cartTotalPrice += productTotalPrice;
    });
    cartTotalPrice = parseFloat(cartTotalPrice.toFixed(2));
    changeCardInfo(cartTotalPrice, products.length);



    if (!products.length) {
        $(".shopping-cart-product")
            .removeClass("shopping-cart-product")
            .addClass('shopping-cart-product-empty')
            .text("Sepetenizde Ürün Bulunmamaktadır");
        return;
    }



    $.each(products, function(index, product) {

        let cartProductTemplate = $(".cart-product-tamplate").clone().removeClass("cart-product-tamplate");

        cartProductTemplate.css("display", "flex");
        cartProductTemplate.attr("product-id", product.ürün.id);
        cartProductTemplate.attr("product-code", product.ürün.productKod);
        cartProductTemplate.find(".image-box img").attr("src", product.ürün.imgUrl);
        cartProductTemplate.find(".cart-product-title").text(product.ürün.productName);
        cartProductTemplate.find(".card-product-count").attr("product-id", product.ürün.id);
        cartProductTemplate.find(".cart-product-price").text(product.ürün.Fiyat + " KDV Dahil");
        cartProductTemplate.find(".cart-edit-product-count input").val(product.Adet);

        $(".shopping-cart-product").append(cartProductTemplate);
    });
}

function changeCardInfo(total, count) {
    if(total == 0){
        total = "00.00"
    }
    $("#count-info").text(`${count} Ürün`);
    $("#para").text(total + "TL");
    $(".shopping-cart-price span").text(`${total} TL`);
}



