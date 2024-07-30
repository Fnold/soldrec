function latest() {
    const card_title = "Jedenastka";
    const site_title = card_title;
    const card_cost = "5M";
    const card_cost_info = "5 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        NIEWRAŻLIWOŚĆ
        </p>
        <p>
        Połóż 100 liczników na tej karcie.<br>Na początku każdej twojej tury dobierasz dodatkowo 2 karty. Pod koniec każdej twojej tury możesz zapłacić X many i/lub monet i usunąć X liczników z tej karty.<br>Dopóki na tej karcie są liczniki to nie możesz wygrać gry.
        </p>`;
    const card_flavor = `
        <i>
        "Plebsu nie zaproszono."
        </i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/114.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Jedenastka";
    const site_title = card_title+" (alpha)";
    const card_cost = "5M";
    const card_cost_info = "5 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        NIEWRAŻLIWOŚĆ.
        </p>
        <p>
        Połóż 100 liczników na tej karcie. Na początku każdej twojej tury dobierasz dodatkowo dwie karty. Pod koniec każdej twojej tury możesz zapłacić dowolną ilość many i/lub monet i usunąć tyle samo liczników z tej karty. Dopóki na tej karcie są liczniki to nie możesz wygrać gry.
        </p>`;
    const card_flavor = `
        <i>
        "Plebsu nie zaproszono."
        </i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/114.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);