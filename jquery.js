$(document).ready(function(){
    $("#button_1").click(function(){
       alert("This form is about to be submitted");
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var confirm_password = $("#confirm_password").val();
        var terms = $("#terms").val();
        if (name == '' || email == '' || password == '' || confirm_password == '' || terms == '') {
            alert("Please fill all fields");
        } else if ((password.length) < 8) {
            alert("Password should at least 8 character in length");
            $("form")[0].reset();
        } else if (!(password).match(confirm_password)) {
           alert("Your passwords don't match. Try again?");
           $("form")[0].reset();
        } else {
            $.post("https://0d9k41n67b.execute-api.us-east-2.amazonaws.com/my-first-function", {
                name1: name,
                email1: email,
                password1: password,
                confirm_password1: confirm_password,
                terms1: terms
            }, function(data) {
                if (data == 'This form is about to be submitted') {
                    $("form")[0].reset();
                }
                alert(data);
            });
        }
    });
});