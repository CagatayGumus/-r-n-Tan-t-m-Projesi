let userIdd;
if (JSON.parse(localStorage.getItem("userId")) != null) {
  userIdd = JSON.parse(localStorage.getItem("userId"));
} else if (JSON.parse(sessionStorage.getItem("userId") != null)) {
  userIdd = JSON.parse(sessionStorage.getItem("userId"));
}
$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/orderList.php";

  const data = {
    ref: "4e0cbdb3095a9a699d1d2b4a2a508d8d",
    musterilerID: userIdd,
    
  };
  $.ajax({
    type: "get",
    cache:false,
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      let html = `<hr/>`;
      let profilHtml = ``;
      let item = response.orderList[0];
      for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        html += `<div class="cart-container" style="margin-left:4rem">
        <div class="row">      
          <div class="col-lg-2">
            <img
              src="${item[i].normal}"
              alt=""
              width="125"
              height="125"
              class="cart-img"
            />
          </div>
          <div class="col-lg-10">
            <h1 class="cart-item-title">${item[i].urun_adi}</h1>
            <span class="cart-item-price">${item[i].fiyat} TL</span>
          </div>
          
        </div>
        </div>`;
      }
      $(".cart-list").append(html);

      for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        profilHtml += `
        <div class="cartContainer">
        <img src="${item[i].thumb}" alt="${item[i].kisa_aciklama}">
        <div class="textContainer">
          <h4 class="itemTitle">
          ${item[i].urun_adi}</h4>
          <span class="itemPrice">${item[i].fiyat} ₺</span>
        </div>
      </div>`;
      }
      $("#cartMain").append(profilHtml);
      
    },
  });
});
