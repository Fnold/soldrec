function latest() {
    const card_title = "Rozżarzona Kula";
    const site_title = card_title;
    const card_cost = "10P";
    const card_cost_info = "10 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Zaparcie
        </p>
        <p>
        Na początku każdej twojej tury wybierz jednostkę.
        </p>
        <p>
        Wybrana jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-2. Zmień stronę tej akcji.
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/42.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Akcja 42";
    const site_title = card_title+" (alpha)";
    const card_cost = "4M 10P";
    const card_cost_info = "4 Many i 10 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Za każdym razem gdy trafisz ORŁA w rzucie monetą połóż licznik na tej karcie. Gdy zaczyna się twoja tura i masz 10 lub więcej liczników na tej akcji to wygrywasz grę.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: -
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/42.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);