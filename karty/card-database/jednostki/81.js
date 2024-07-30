function latest() {
    const card_title = "Wolfe";
    const site_title = card_title;
    const card_cost = "13M 10P";
    const card_cost_info = "13 Many i 10 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Twój wróg odrzuca 1 kartę.</p>
        <br>
        <p>Zagrywanie wrogich kart ma koszt many i sławy większy o X gdzie X jest liczbą zagranych kart w obecnej turze.</p>`;
    const card_stats = `
        <p>
        8/8/0/2
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2022
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/81.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Wolfe";
    const site_title = card_title+" (alpha)";
    const card_cost = "12M 10P";
    const card_cost_info = "12 Many i 10 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Twój wróg odrzuca 1 kartę.</p>
        <br>
        <p>Zagrywanie wrogich kart ma koszt many i sławy większy o X gdzie X jest liczbą zagranych kart w obecnej turze.</p>`;
    const card_stats = `
        <p>
        8/8/0/2
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2022
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/81.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);