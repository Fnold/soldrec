function latest() {
    const card_title = "El Pomidoro";
    const site_title = card_title;
    const card_cost = "7M";
    const card_cost_info = "7 Many";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Przyroda, Niszczyciel
        </p>`;
    const card_description = `
        <p>Wybierz wystawioną wrogą jednostkę.</p>
        <br>
        <p>Gdy tylko wcześniej wybrana jednostka trafi na cmentarz, zostanie usunięta z gry lub trafi z powrotem do rąk właściciela to twój wróg otrzymuje 5+X obrażeń lub leczysz się o 5+X gdzie X jest liczbą twojej nadwyżki many ze wszystkich twoich tur.</p>`;
    const card_stats = `
        <p>
        4/0/3/4
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2020
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/34.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "El Pomidoro";
    const site_title = card_title+" (alpha)";
    const card_cost = "5M";
    const card_cost_info = "5 Many";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Wybierz wystawioną wrogą jednostkę.</p>
        <br>
        <p>Gdy tylko wcześniej wybrana jednostka trafi na cmentarz, zostanie usunięta z gry lub trafi z powrotem do rąk właściciela to twój wróg otrzymuje 5+X obrażeń lub leczysz się o 5+X gdzie X jest liczbą twojej nadwyżki many ze wszystkich twoich tur.</p>`;
    const card_stats = `
        <p>
        4/0/3/4
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2020
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/34.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);