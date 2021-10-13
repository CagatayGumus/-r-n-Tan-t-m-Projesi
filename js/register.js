$(document).ready(function() {

    // Register Form Submit
    $('#registerForm').submit(function(e) {
        
        e.preventDefault();

        const name = $("#userName").val()
        const surname = $("#userSurname").val()
        const phone = $("#userPhone").val()
        const email = $("#email").val()
        const password = $("#password").val()

        if (name == "") {           
            alert("Bu alanı doldurun.")
        }
        else if (surname == "") {           
            alert("Bu alanı doldurun.")
        }
        else if (phone == "") {          
            alert("Bu alanı doldurun.")
        }
        else if (email == "") {          
            alert("Bu alanı doldurun.")
        }
        else if (password == "") {          
            alert("Bu alanı doldurun.")
        }

        


        const pushObj = {
            ref: "4e0cbdb3095a9a699d1d2b4a2a508d8d",
            userName: name,
            userSurname: surname,
            userPhone: phone,
            userMail: email,
            userPass: password
        }

        const url = "https://www.jsonbulut.com/json/userRegister.php"


        $.ajax({
            type: "get",
            url: url,
            data: pushObj,
            dataType: "json",
            success: function(res) {
                const status = res.user[0].durum
                const message = res.user[0].mesaj
                if (status == true) {
                    // redirect
                    alert(message)
                    window.location.href = "index.html";

                } else {
                    alert(message);
                }

            }

        });









    });


});