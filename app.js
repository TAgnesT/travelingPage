//eltarolunk minden elemet valtozoba amivel szeretnek dolgozni
var prev = document.getElementById("prev");
    next = document.getElementById("next");
    thumb = document.getElementsByClassName("thumb");

//eltarolom a beallitani kivant hatterkepek eleresi utjat ugy hogy ezek tomb elemek legyenek mert a tomb elemeket tudom leptetni - TOMB
var backgroundImage = [

    "bg1.jpg",
    "bg2.jpg",
    "bg3.png",
    "bg4.jpg",
    "bg5.png"

];

//csak 1et leptet elore nem folyamatosan csak clickre majd
var i = 0;

next.addEventListener("click", function(){

    //ha az i erteke kisebb mint 4 --> amig tudom elore leptetni a kepeket es nem erek a tombom vegere addig en szeretnem ha az eppen aktualis kep amin all az i az lenne a body hattere
    if(i < 4){

        //akkor amikor megvaltoztatom az eppen aktualis hatterkere a body hatteret, tovabb leptetem a kis kepen az active classt es ezt leveszem az elozorol
        document.body.style.backgroundImage = `url('${backgroundImage[i+1]}')`;
        //"url('"+backgroundImage[i+1]+"')";
        thumb[i+1].classList.add("active");
        thumb[i].classList.remove("active");
        document.body.style.transition = "background 0.2s ease";
        i++; //vegen leptetem az i erteket 1el h ne maradjon nullan
    }
})


prev.addEventListener("click", function(){

    //ha az i erteke nagyobb mint 0 --> a kepek vegen vagyok tehat vissz tudok lepni
    if(i > 0){

        //akkor amikor megvaltoztatom az eppen aktualis hatterkere a body hatteret, tovabb leptetem a kis kepen az active classt es ezt leveszem az elozorol
        document.body.style.backgroundImage = `url('${backgroundImage[i-1]}')`;
        //"url('"+backgroundImage[i+1]+"')";
        thumb[i-1].classList.add("active");
        thumb[i].classList.remove("active");
        document.body.style.transition = "background 0.2s ease";
        i--; //vegen leptetem az i erteket 1el h ne maradjon nullan
    }
})

