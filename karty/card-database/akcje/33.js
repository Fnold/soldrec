function latest() {
    const card_title = "Uformowanie Trójcy Zniszczenia";
    const site_title = card_title;
    const card_cost = "3M 3P";
    const card_cost_info = "3 Many i 3 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Spójrz na 3 górne karty z twojej talii. Jedną wybraną z nich daj na swój cmentarz, jedną daj na spód twojej talii a jedną daj do swojej ręki.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/33.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Uformowanie Trójcy Zniszczenia";
    const site_title = card_title+" (alpha)";
    const card_cost = "3M 3P";
    const card_cost_info = "3 Many i 3 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Zajrzyj do 3 górnych kart ze swojej talii. Jedną z nich daj na swój cmentarz, jedną daj na spód swojej talii a jedną weź do swojej ręki.
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/33.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);