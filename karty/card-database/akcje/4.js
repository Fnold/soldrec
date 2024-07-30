function latest() {
    const card_title = "Testament";
    const site_title = card_title;
    const card_cost = "2M 5P";
    const card_cost_info = "2 Many i 5 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz jednostkę.
        </p>
        <p>
        Gdy ta jednostka zginie, dobierz 2 karty.
        </p>
        <p>
        Oddanie(CN): Gdy ta jednostka zginie, dobierz 3 karty.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/4.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `<u>v1.1.0</u>`
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function v1_1_0() {
    const card_title = "Testament";
    const site_title = card_title+" (v1.1.0)";
    const card_cost = "2M 5P";
    const card_cost_info = "2 Many i 5 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz jednostkę.
        </p>
        <p>
        Gdy ta jednostka zginie, dobierz 2 karty.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/1.1.0/akcje/4.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `&gt;<u>v1.1.0</u>`
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Testament";
    const site_title = card_title+" (alpha)";
    const card_cost = "2M 5P";
    const card_cost_info = "2 Many i 5 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz wystawioną jednostkę.
        </p>
        <p>
        Gdy ta jednostka zginie to dobierz 2 karty.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/4.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `<u>v1.1.0</u>`
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);