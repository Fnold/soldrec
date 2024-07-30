function latest() {
    const card_title = "Wyżerka";
    const site_title = card_title;
    const card_cost = "6M 6P";
    const card_cost_info = "6 Many i 6 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Usuń z gry wszystkie jednostki z cmentarza wybranego wroga. Zyskujesz 2*X zdrowia, gdzie X jest liczbą usuniętych z gry jednostek tym sposobem.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/68.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Wyżerka";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M 6P";
    const card_cost_info = "6 Many i 6 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Usuń z gry wszystkie jednostki z wrogiego cmentarza, ulecz się o 2*X gdzie X jest liczbą usuniętych z gry jednostek tym sposobem.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/68.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);