function latest() {
    const card_title = "William";
    const site_title = card_title;
    const card_cost = "4J 10P";
    const card_cost_info = "≥4 Wystawione Jednostki i 10 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Poświęć jednostkę. Połóż licznik na tej karcie.</p>
        <br>
        <p>Zagrywanie wrogich kart kosztuje X więcej many, gdzie X jest liczbą liczników na tej karcie.</p>`;
    const card_stats = `
        <p>
        6/6/5/2
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
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/106.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);