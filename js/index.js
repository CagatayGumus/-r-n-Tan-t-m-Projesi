// iframe add
function fncReklam() {
  modal.style.display = "none";
}

// storage control
const local = localStorage.getItem("userId");
if (local != null) {
  sessionStorage.setItem("userId", local);
}

const names = localStorage.getItem("userInfo");
if (names != null) {
  sessionStorage.setItem("userInfo", names);
}

// session control
const user = sessionStorage.getItem("userId");
const surnames = sessionStorage.getItem("userInfo");

if (user == null) {
  const obj = JSON.parse(surnames);

  let navbar = `  
    <nav class="navbar navbar-bottom navbar-expand-lg navbar-dark bg-dark main-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
             
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Anasayfa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="haberler.html">İndirim Haberleri</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="iletisim.html">İletişim</a>
            </li>
            
          </ul>

          
          <ul class="navbar-nav me-auto mb-2 m-lg-2 ">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
               Profil 
              </a>
              <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="register.html">Kayıt Ol</a></li>
                <li><a class="dropdown-item" href="login.html">Giriş Yap</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a onclick="return logout()" class="dropdown-item dropdown-item-lastchild" href="index.html">Çıkış Yap</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>

   

`;
  $(".my-container").append(navbar);
} else {
  // session true
  const obj = JSON.parse(surnames);
  let navbar =
    `  
    <nav class="navbar navbar-bottom navbar-expand-lg navbar-dark bg-dark main-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html"></a>
        <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item ">
              
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Anasayfa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="haberler.html">İndirim Haberleri</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="iletisim.html">İletişim</a>
            </li>
            <li class="nav-item">
            <a class="nav-link userLinkChange" href="profil.html" tabindex="-1" aria-disabled="true">` +
    obj.userName +
    ` ` +
    obj.userSurname +
    `</a>
          </li>
          </ul>

          
          <ul class="navbar-nav me-auto mb-2 m-lg-2 ">
            <li class="nav-item dropdown">
              <a class="nav-link  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Profil
              </a>
              <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="register.html">Kayıt Ol</a></li>
                <li><a class="dropdown-item" href="login.html">Giriş Yap</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a onclick="return logout()" class="dropdown-item dropdown-item-lastchild" href="index.html">Çıkış Yap</a></li>
              </ul>
            </li>

          </ul>
        </div>
      </div>
    </nav>

   

`;
  $(".my-container").append(navbar);
}
//sidebar
var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");

//logout fnc
function logout() {
  //confirm answer
  const answer = confirm("Are You Sure..?");
  if (answer == true) {
    //storage logout
    localStorage.clear();

    // single item remove
    sessionStorage.removeItem("userId");

    //all session remove
    sessionStorage.clear();

    //redirect to login
    window.location.href = "index.html";
  }

  return false;
}
//Kategoriler

$(document).ready(function () {
  const productLink = "https://www.jsonbulut.com/json/companyCategory.php";
  const objproductLink = {
    ref: "4e0cbdb3095a9a699d1d2b4a2a508d8d",
  };

  $.ajax({
    type: "get",
    url: productLink,
    data: objproductLink,
    dataType: "json",
    success: function (response) {
      const stat = response.Kategoriler[0].durum;
      const message = response.Kategoriler[0].mesaj;

      let html = ``;
      if (stat) {
        const category = response.Kategoriler[0];

        html += `<ul" class="sidenavList nav flex-column text-white side-nav-list">
        <li class="nav-link navButtonParent"> 
            
        <span style="color:white;" class="mx-2"><a style="text-decoration:none; color:white;" class="allProductsHref" href="urunler.html">ÜRÜNLER</a></span></li>
        
        `;

        for (let i = 0; i < category.Categories.length; i++) {
          let item = category.Categories[i];
          if (item.TopCatogryId == 0) {
            html +=
              `   
                    
            <li href="#" class="nav-link navButtonParent">
            <button class="btn  btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            
          <span style="color:white;" class="mx-2">` +
              item.CatogryName +
              ` </span></button>
          <ul>
           `;

            for (let j = 0; j < category.Categories.length; j++) {
              let subItem = category.Categories[j];
              if (item.CatogryId == subItem.TopCatogryId) {
                html +=
                  `<ol  class="collapse catCollapse" id="home-collapse"><a style="color:white; text-decoration:none;" href="urunler.html?categoryId=${subItem.CatogryId}">` +
                  subItem.CatogryName +
                  `</a></ol>`;
              }
            }
            html += `</li></ul>`;
          }
        }
        html += `</ul>`;
        $("#sidebar").append(html);
      }
    },
  });

  //reklam
  const adLink = "https://www.jsonbulut.com/json/advertisement.php";
  const adObjLink = {
    ref: "4e0cbdb3095a9a699d1d2b4a2a508d8d",
    advertisementId: "38",
  };

  $.ajax({
    type: "get",
    url: adLink,
    data: adObjLink,
    dataType: "json",
    success: function (res) {
      newAdvertisement(res);
      console.log(`res`, res);
    },
  });

  function newAdvertisement(res) {
    let html = ``;

    for (let i = 0; i < res.reklam.length; i++) {
      const item = res.reklam[i];
      console.log(`item`, item);
      html +=
        ` <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">` +
        item.reklam.adi +
        `</h5>
        <button id="reklam" onclick="fncReklam()" type="button" class="btn-close" data-bs-dismiss="modal"
          aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <img class="img-fluid" src="` +
        item.reklam.dosya +
        `" />
      </div>`;
    }

    $("#modal").html(html);
  }

  //ürünler

  const cardsLink = "https://www.jsonbulut.com/json/product.php";
  const cardsObjLink = {
    ref: "4e0cbdb3095a9a699d1d2b4a2a508d8d",
    start: "0",
    count: "6",
    order: "desc",
  };

  $.ajax({
    type: "get",
    url: cardsLink,
    data: cardsObjLink,
    dataType: "json",
    success: function (res) {
      newCards(res);
      console.log(`res`, res);
    },
  });

  function newCards(res) {
    let html = `<div class= "indexUrunBaslik"> Popüler Ürünler </div>`;
    for (let i = 0; i < res.Products.length; i++) {
      const item = res.Products[i];
      for (let j = 0; j < 6; j++) {
        const itemkart = item.bilgiler[j];

        console.log(`item`, item);
        html +=
          `
      
      <div class="card urunKart" style="width: 18rem;">
        <img src="` +
          itemkart.images[i].normal +
          `" class="card-img-top" alt="img/2021.jpg">
        <div class="card-body">
          <h5 class="card-title">` +
          itemkart.productName +
          `</h5>
          <p class="card-text">` +
          itemkart.description.slice(0.2) +
          "..." +
          `</p>
          <a onclick="fncDetay(${j})" href="urundetay.html" class="btn btn-primary">Detay</a>
       
         
        </div>
      </div>`;
      }
    }
    $("#rowUrunKartlar").html(html);
  }
});

function fncDetay(i) {
  let itempage = JSON.stringify(items[i]);
  localStorage.removeItem("urunler");
  sessionStorage.removeItem("urunler");
  localStorage.setItem("urunler", itempage);
  sessionStorage.setItem("urunler", itempage);
  window.location.href = "urundetay.html";
}

let x = document.referrer;
console.log(x);
localStorage.setItem("refferer", x);
