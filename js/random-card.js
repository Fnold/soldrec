window.onresize = window.onload = function() {
    if (innerWidth > 1065) {
        document.querySelector('.random').style.display = "block";
    } else {
        document.querySelector('.random').style.display = "none";
    }
}

function random_card() {
    if ((Math.round(Math.random())) == 1) {
        window.location.href = "/soldrec/karty/akcje/"+(Math.floor(Math.random() * (214 - 1 + 1)) + 1); // 214 = number of cards of type AKCJE;
    } else {
        window.location.href = "/soldrec/karty/jednostki/"+(Math.floor(Math.random() * (186 - 1 + 1)) + 1); // 186 = number of cards of type JEDNOSTKI;
    }
}