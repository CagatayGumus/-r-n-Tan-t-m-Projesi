const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("categoryId");

let items =[];

$(document).ready(function () {
    const cardsLink = "https://www.jsonbulut.com/json/product.php";
  const cardsObjLink = {
    ref: "4e0cbdb3095a9a699d1d2b4a2a508d8d",    
    start: "0",
    categoryId: categoryId,
    order: "desc"
  } 

  $.ajax({
    type: "get",
    url: cardsLink,
    data: cardsObjLink,
    dataType: "json",
    success: function (res) {
      const item = res.Products[0].bilgiler
      items=item
      let html = `<div class="productsBaslik"> Tüm Ürünler </div>`
      for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        html += `
        <div class="card urunKart urunKartHaber" style="width:15rem;">
        <img src="${item[i].images[0].normal}" class="card-img-top" style="width:10rem;">
        <div class="card-body">
          <h5 class="card-title">${item[i].productName}</h5>         
          <p class="card-text">${item[i].price} ₺</p>
          <a onclick="fncAction(${i})" href="urundetay.html" class="btn btn-dark">İncele</a>
          
        </div>
      </div>`;
      }
      $('#rowUrunCards').append(html);
    }
  });
});
  
  function fncAction(i) {
    let itempage = JSON.stringify(items[i]);
    console.log(`itempage`, itempage)
    localStorage.removeItem("urunler");
    sessionStorage.removeItem("urunler");
    localStorage.setItem("urunler", itempage);
    sessionStorage.setItem("urunler", itempage);
    window.location.href = "urundetay.html";
  }
  

    
