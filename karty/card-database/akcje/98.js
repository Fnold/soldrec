function latest() {
    const card_title = "Wojna";
    const site_title = card_title;
    const card_cost = "7M 10P";
    const card_cost_info = "7 Many i 10 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wyznacz NAGRODĘ za każdą wrogą jednostkę.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/98.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function v1_0_0() {
    const card_title = "Wojna";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M 10P";
    const card_cost_info = "6 Many i 10 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wyznacz NAGRODĘ za każdą wystawioną wrogą jednostkę.
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
    document.getElementById("card_image").src = "../../assets/cards/1.0.0/akcje/98.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `&gt;<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Wojna";
    const site_title = card_title+" (alpha)";
    const card_cost = "4M 10P";
    const card_cost_info = "4 Many i 10 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wyznacz NAGRODĘ za każdą wystawioną wrogą jednostkę.
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/98.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);