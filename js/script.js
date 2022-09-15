window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

$(function () {
  $(".smart-basket__wrapper").smbasket({
    productElement: "product__item",
    buttonAddToBasket: "product__btn",
    productPrice: "product__price-number",
    productSize: "product__size-element",

    productQuantityWrapper: "product__quantity",
    smartBasketMinArea: "bascket",
    countryCode: "+998",
    smartBasketCurrency: "$",
    smartBasketMinIconPath: "../smartbasket/img/shopping-basket-wight.svg",

    agreement: {
      isRequired: true,
      isChecked: true,
      isLink: "https://artstranger.ru/privacy.html",
    },
    nameIsRequired: false,
  });
});

