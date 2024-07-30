function latest() {
    const card_title = "Największy Sztorm";
    const site_title = card_title;
    const card_cost = "10M 12P";
    const card_cost_info = "10 Many i 12 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Zaparcie
        </p>
        <p>
        Wybierz wroga.
        </p>
        <p>
        Pod koniec każdej tury tego wroga umiera losowa nie-morska jego jednostka.
        </p>`;
    const card_flavor = `
        <i>
        Każdy albo przechodzi przez burzę, wychodzi z burzy albo przygotowywuje się na przejście przez nią. No chyba że mówimy o sztormie w '93.
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/112.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Największy Sztorm";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M 12P";
    const card_cost_info = "6 Many i 12 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz wroga.
        </p>
        <p>
        Pod koniec każdej tury tego wroga umiera losowa nie-morska jego jednostka.
        </p>`;
    const card_flavor = `
        <i>
        Każdy albo przechodzi przez burzę, wychodzi z burzy albo przygotowywuje się na przejście przez nią. No chyba że mówimy o sztormie w '93.
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/112.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);