$(document).ready(function () {
    const haberUrl = "https://www.jsonbulut.com/json/news.php"
    const haberObj = {
    ref:'4e0cbdb3095a9a699d1d2b4a2a508d8d',
    start:"0"
    
    }
    $.ajax({
    type: "get",
    url: haberUrl ,
    data: haberObj,
    dataType: "json",
    success: function (res) {
        console.log(`res`, res)
      newsHaber(res)
      
     }
    });

    function newsHaber(res) {  
        let html=``
        for (let i = 0; i < res.News.length; i++) {
          const item = res.News[i];
          for (let j = 1; j < 10; j++) {
            const itemkart = item.Haber_Bilgileri[j];
            
          
          console.log(`item`, item)
          html +=`
          
          <div class="card urunKart" style="width: 18rem;">
            <img src="`+itemkart.picture+`" class="card-img-top" alt="img/2021.jpg">
            <div class="card-body">
              <h5 class="card-title">`+itemkart.title+`</h5>
              <p class="card-text">`+itemkart.s_description+`</p>             
            </div>
          </div>
          </div>
          `
          }
        }
        $('#rowHaberCards').html(html);
      }
    
});