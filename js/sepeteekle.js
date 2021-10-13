$(document).ready(function () {

    $("#urunDetaySayfasi").click(function (e) { 
      e.preventDefault();        
      const userId = JSON.parse(sessionStorage.getItem("userId"));
      let item = JSON.parse(localStorage.getItem("urunler"));
      let itemId = item.productId;
  
      const data = {
        ref: "4e0cbdb3095a9a699d1d2b4a2a508d8d",
        customerId: userId,
        productId: itemId,
        html: userId,
      };
      
      const url = "https://www.jsonbulut.com/json/orderForm.php";
      if (userId != null) {
        $.ajax({
          type: "get",
          url: url,
          data: data,
          dataType: "json",
          success: function (response) {                      
            alert("Ürününüz Sepete Eklendi. ")
          },
        });
      } else {
        window.location.href = "login.html";
      }
    });
  });
  