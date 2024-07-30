function latest() {
    const card_title = "Mapa Skarbów";
    const site_title = card_title;
    const card_cost = "7M 20P";
    const card_cost_info = "7 Many i 20 Popularności";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Pośpiech
        </p>
        <p>
        Zyskujesz X monet, gdzie X jest liczbą wystawionych jednostek.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2021
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/101.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Mapa Skarbów";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M 20P";
    const card_cost_info = "6 Many i 20 Popularności";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Pośpiech.
        </p>
        <p>
        Zyskaj X monet gdzie X jest liczbą wystawionych jednostek.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2021
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/101.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);