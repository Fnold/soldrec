function latest() {
    const card_title = "Działo";
    const site_title = card_title;
    const card_cost = "7M 15P";
    const card_cost_info = "7 Many i 15 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybrany wróg traci 4 zdrowia.
        </p>
        <p>
        Oddanie(C): Wybrany wróg traci 6 zdrowia.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/96.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Działo";
    const site_title = card_title+" (alpha)";
    const card_cost = "7M 15P";
    const card_cost_info = "7 Many i 15 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Twój wróg traci 4 zdrowia.
        </p>
        <p>
        Oddanie(C): Twój wróg traci 6 zdrowia.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/96.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);