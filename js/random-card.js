window.onresize = window.onload = function() {
    if (innerWidth >= 1000) {
        document.querySelector('.random').style.display = "block";
    } else {
        document.querySelector('.random').style.display = "none";
    }
}

function random_card() {
    const akcja_or_jednostka = Math.round(Math.random());
    if (akcja_or_jednostka == 1) {
        const random_page = "/soldrec/karty/akcje/"+(Math.floor(Math.random() * (144 - 1 +1)) + 1); // 144 = number of cards of type AKCJE
        window.location.href = random_page;
    } else {
        const random_page = "/soldrec/karty/jednostki/"+(Math.floor(Math.random() * (106 - 1 + 1)) + 1); // 106 = number of cards of type JEDNOSTKI
        window.location.href = random_page;
    }
}