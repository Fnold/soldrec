function latest() {
    const card_title = "Masakra";
    const site_title = card_title;
    const card_cost = "20M 20P";
    const card_cost_info = "20 Many i 20 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Tyle ile twoi wrogowie tracą zdrowia, tyle ty zyskujesz zdrowia.
        </p>`;
    const card_flavor = `
        <i>
        Każda strata jest bezprecedensowa.
        <i>`;
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/30.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `<u>v1.1.0</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function v1_1_0() {
    const card_title = "Masakra";
    const site_title = card_title+" (v1.1.0)";
    const card_cost = "13M 13P";
    const card_cost_info = "13 Many i 13 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Tyle ile twoi wrogowie tracą zdrowia, tyle ty zyskujesz.
        </p>`;
    const card_flavor = `
        <i>
        Każda strata jest bezprecedensowa.
        <i>`;
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
    document.getElementById("card_image").src = "../../assets/cards/1.1.0/akcje/30.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `&gt;<u>v1.1.0</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function v1_0_0() {
    const card_title = "Masakra";
    const site_title = card_title+" (v1.0.0)";
    const card_cost = "13M";
    const card_cost_info = "13 Many";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Tyle ile twoi wrogowie tracą zdrowia, tyle ty się leczysz.
        </p>`;
    const card_flavor = `
        <i>
        Każda strata jest bezprecedensowa.
        <i>`;
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
    document.getElementById("card_image").src = "../../assets/cards/1.0.0/akcje/30.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `<u>v1.1.0</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `&gt;<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Masakra";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M";
    const card_cost_info = "6 Many";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Tyle ile twój wróg otrzymuje obrażeń, tyle Ty się leczysz.
        </p>`;
    const card_flavor = `
        <i>
        Każda strata jest bezprecedensowa.
        <i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/30.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `<u>v1.1.0</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);