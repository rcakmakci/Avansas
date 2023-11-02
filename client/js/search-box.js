const searchResultBox = $(".search-results-box");
$("#search-input").on("input", function () {
  let query = $(this).val();
  if (query.length > 1) {
    $.ajax({
      type: "GET",
      url: `https://avs-dev.wawlabs.com/search?q=${query}&facet=Categories_txt_tr->Categories_txt_tr[category_link->category_link],Brand_txt_tr->Brand_txt_tr[brand_link->brand_link]`,
      contentType: "application/json",
      success: function (response) {
        ShowSuggestionBox(response);
        console.log(response);
      },
      error: function () {
        $(this).val("").css("placeholder", "Böyle Bir Ürün Bulunamadı");
      },
    });
  } else {
    searchResultBox.removeClass("search-results-active");
  }
});

function ShowSuggestionBox(data) {
  const searchResultBox = $(".search-results-box");
  const categoryBox = $(".results-categoryies-box > ul");
  const brandsBox = $(".results-brands-box > ul");
  const productList = $(".result-products-list");

  categoryBox.empty();
  brandsBox.empty();
  productList.empty();

  var brandTitlesFragment = RenderSuggestionBoxBrandTitle(
    data.facet_fields.Brand_txt_tr
  );
  var categoryTitlesFragment = RenderSuggestionBoxCategoryTitle(
    data.facet_fields.Categories_txt_tr
  );
  var productsFragment = RenderSuggestionBoxProduct(data.res);

  $(".results-categoryies-box > ul").append(categoryTitlesFragment);
  $(".results-brands-box > ul").append(brandTitlesFragment);
  $(".result-products-list").append(productsFragment);

  searchResultBox.addClass("search-results-active");
}

function RenderSuggestionBoxCategoryTitle(data) {
  var categoryTitlesfragment = document.createDocumentFragment();

  if (data.length > 20) {
    data = data.slice(0, 20);
  }

  $.each(data, function (index, value) {
    var listItem = $(".temp-searcResult-box-catgTitle")
      .clone()
      .removeClass("temp-searcResult-box-catgTitle");
    listItem.find("a").attr("href", value.category_link);
    listItem.find("a").text(value.name);

    categoryTitlesfragment.append(listItem.get(0));
  });

  return categoryTitlesfragment;
}

function RenderSuggestionBoxBrandTitle(data) {
  var brandTitlesFragment = document.createDocumentFragment();

  if (data.length > 20) {
    data = data.slice(0, 20);
  }

  $.each(data, function (index, value) {
    var listItem = $(".temp-searcResult-box-brandTitle")
      .clone()
      .removeClass("temp-searcResult-box-brandTitle");
      
    listItem.find("a").attr("href", value.brand_link);
    listItem.find("a").text(value.name);

    brandTitlesFragment.append(listItem.get(0));
  });

  return brandTitlesFragment;
}

function RenderSuggestionBoxProduct(data) {
  var productsFragment = document.createDocumentFragment();

  if (data.length > 20) {
    data = data.slice(0, 40);
  }

  $.each(data, function (index, product) {
    var productElement = $(".template-result-product")
      .clone()
      .removeClass("template-result-product");

    productElement.find("a").attr("href", product.Link_txt_tr);
    productElement
      .find("img")
      .attr("src", product.Image_txt_tr)
      .attr("alt", product.Title_txt_tr);
    productElement.find(".result-product-title").text(product.Brand_txt_tr);
    productElement.find(".result-product-info p").text(product.Title_txt_tr);
    productElement
      .find(".result-product-price")
      .text(formatPrice(product.Sale_Price_txt_tr) + " TL");

    productsFragment.append(productElement.get(0));
  });

  return productsFragment;
}

function formatPrice(price) {
  // Ondalık ayıracını değiştirmek için önce virgülü noktaya çeviriyoruz
  let number = parseFloat(price.replace(",", "."));

  // Türkiye yerel ayarlarını kullanarak sayıyı formatlıyoruz
  let formatter = new Intl.NumberFormat("tr-TR", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Formatlanmış sayıyı alıyoruz
  return formatter.format(number);
}

$(document).on("click", function (event) {
  const searchResultBox = $(".search-results-box");
  if (!$(event.target).closest(".search-div").length) {
    searchResultBox.removeClass("search-results-active");
  }
});
