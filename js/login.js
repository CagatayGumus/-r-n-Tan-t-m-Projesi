$(document).ready(function() {
    // Login Form Submit
    $('#loginForm').submit(function(e) {
        e.preventDefault();

        const email = $("#email").val()
        const password = $("#password").val()

        if (email == "") {
            alert("Eksik alanları doldurun")           
        } else if (password == "") {
            alert("Eksik  alanı doldurun.")
           
        }
        

        const obj = {
            ref: "4e0cbdb3095a9a699d1d2b4a2a508d8d",
            userEmail: email,
            userPass: password,
            face: "no"
        }
        const url1 = "https://www.jsonbulut.com/json/userLogin.php"

        $.ajax({
            type: "get",
            url: url1,
            data: obj,
            dataType: "json",
            success: function(res) {
                const status1 = res.user[0].durum
                const message1 = res.user[0].mesaj   
                const ref = localStorage.getItem("refferer")                  
                let splitRef = ref.split("/");  
              
               
                
                

                if (status1 == true) {
                    const item = JSON.stringify(res.user[0].bilgiler.userId)
                    const allUser = JSON.stringify(res.user[0].bilgiler)
                    localStorage.setItem("userInfo", allUser)
                    sessionStorage.setItem("userInfo", allUser)
                    //const userId = item.bilgiler.userId

                    //remember me control
                    if ($("#remember").is(':checked')) {
                        localStorage.setItem("userId", item)
                        sessionStorage.setItem("userId", item)
                       
                    }else{
                        //session create
                        sessionStorage.setItem("userId",item)                     
                    }
                    
                        //redirect
                    alert(message1)
                    if (
                        splitRef[3] == "urundetay.html" ||
                        (sessionStorage.getItem("urunler") != null &&
                          splitRef[3] == "register.html")
                          
                      ){window.location.href= "urundetay.html"}
                      else
                          {window.location.href="index.html"}
                      

                } else {
                   alert("Giriş Yapılamadı")
                }

            }
        });

    });
});