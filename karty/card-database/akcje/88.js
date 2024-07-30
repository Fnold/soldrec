function latest() {
    const card_title = "Zamknij Się";
    const site_title = card_title;
    const card_cost = "3M";
    const card_cost_info = "3 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Do początku twojej następnej tury twoi wrogowie nie mogą zyskać zdrowia.
        </p>`;
    const card_flavor = `
        <i>
        Dobra zamknij się, to nie ty przegrałaś te wieki temu...
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2020
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/88.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function v1_0_0() {
    const card_title = "Zamknij Się";
    const site_title = card_title+" (alpha)";
    const card_cost = "3M";
    const card_cost_info = "3 Many";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Do początku twojej następnej tury twój wróg nie może się leczyć. Na początku twojej następnej tury usuń z gry tę akcję.
        </p>`;
    const card_flavor = `
        <i>
        Dobra zamknij się, to nie ty przegrałaś te wieki temu...
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2020
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/1.0.0/akcje/88.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `&gt;<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Zamknij Się";
    const site_title = card_title+" (alpha)";
    const card_cost = "4M";
    const card_cost_info = "4 Many";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Do początku twojej następnej tury twój wróg nie może się leczyć. Na początku twojej następnej tury usuń z gry tę akcję.
        </p>`;
    const card_flavor = `
        <i>
        Dobra zamknij się, to nie ty przegrałaś te wieki temu...
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2020
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/88.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);