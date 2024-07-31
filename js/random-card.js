window.onresize = window.onload = function() {
    if (innerWidth > 1065) {
        document.querySelector('.random').style.display = "block";
    } else {
        document.querySelector('.random').style.display = "none";
    }
}

function random_card() {
    if ((Math.round(Math.random())) == 1) {
        window.location.href = "/soldrec/karty/akcje/"+(Math.floor(Math.random() * (144 - 1 +1)) + 1); // 144 = number of cards of type AKCJE;
    } else {
        window.location.href = "/soldrec/karty/jednostki/"+(Math.floor(Math.random() * (106 - 1 + 1)) + 1); // 106 = number of cards of type JEDNOSTKI;
    }
}