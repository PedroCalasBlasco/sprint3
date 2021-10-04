// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var nombre = document.querySelector('.nombre');

var email = document.querySelector('.email');
var address = document.querySelector('.address');
var lastname = document.querySelector('.lastname');


// Get the error elements

var errorNameVacio = document.getElementById('errorNameVacio');

var errorEmailVacio = document.getElementById('errorEmailVacio');

var errorAddressVacio = document.getElementById('errorAddressVacio');

var errorLastVacio = document.getElementById('errorLastVacio');

var errorPasswordVacio = document.getElementById("errorPasswordVacio");

var errorPhoneVacio = document.getElementById('errorPhoneVacio');  

// Exercise 9
function validate() {

    errorNameVacio.style.display = "none";
    errorEmailVacio.style.display = "none";
    errorAddressVacio.style.display = "none";
    errorLastVacio.style.display = "none";
    errorPasswordVacio.style.display = "none";
    errorPhoneVacio.style.display = "none";

    const pattern = new RegExp('^[a-zA-Z]+$', 'i');
    const pattern2 = new RegExp('^[0-9]+$', 'i');



    // Validate fields entered by the user: name, phone, password, and email
    if (nombre.value == "" || nombre.value.length < 3 ){
        errorNameVacio.style.display = "block";
        nombre.focus();
        return false;
    }


    if (!pattern.test(nombre.value)){
        errorNameVacio.style.display = "block";
        nombre.focus();
        return false;
    }

    if (email.value == "" || email.value.length < 3){
        errorEmailVacio.style.display = "block";
        email.focus();
        return false;
    }

    var sum = 0;
    var sum2 = 0;

    for(var i = 0; i < email.value.length; i++){
        if (email.value[i] == "@"){ 
            sum++;
        }
        else if (email.value[i]== ".") {
            sum2++;
        } 
    }

    if (sum != 1 || sum2 != 1){
        errorEmailVacio.style.display = "block";
        email.focus();
        return false;
    }


    if (address.value == "" || address.value.length < 3){
        errorAddressVacio.style.display = "block";
        address.focus();
        return false;
    }


    if (lastname.value == "" || lastname.value.length < 3){
        errorLastVacio.style.display = "block";
        lastname.focus();
        return false;
    }

    if (!pattern.test(lastname.value)){
        errorLastVacio.style.display = "block";
        lastname.focus();
        return false;
    }


    if (password.value == "" || password.value.length < 3){
        errorPasswordVacio.style.display = "block";
        password.focus();
        return false;
    }

    var contpass = 0;
    var contpass2 = 0;

    for(var j = 0; j < password.value.length; j++){
        if (pattern.test(password.value[j])){
            contpass++;
        }else if (pattern2.test(password.value[j])){
            contpass2++;
        }
    }
    
    if (contpass == 0 || contpass2 == 0){
        errorPasswordVacio.style.display = "block";
        password.focus();
        return false;
    }



    if (phone.value == "" || phone.value.length < 3){
        errorPhoneVacio.style.display = "block";
        phone.focus();
        return false;
    }

    if (!pattern2.test(phone.value)){
        errorPhoneVacio.style.display = "block";
        phone.focus();
        return false;
    }

    console.log("HOLA");


}
