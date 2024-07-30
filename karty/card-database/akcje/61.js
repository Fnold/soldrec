function latest() {
    const card_title = "Fair Play";
    const site_title = card_title;
    const card_cost = "3M 10P";
    const card_cost_info = "3 Many i 10 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Przewiduj 1.
        </p>
        <p>
        Spójrz na górną kartę z twojej i wybranej wrogiej talii. Wybierz którą z tych kart dobierzesz ty a którą ten wróg.
        </p>`;
    const card_flavor = `
        <i>
        Lepsze niż kalkulator.
        </i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/61.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Fair Play";
    const site_title = card_title+" (alpha)";
    const card_cost = "3M 10P";
    const card_cost_info = "3 Many i 10 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Przewiduj 1.
        </p>
        <p>
        Spójrz na górną kartę z twojej i wrogiej talii. Wybierz którą z tych kart dobierzesz ty a którą dobierze twój wróg.
        </p>`;
    const card_flavor = `
        <i>
        Lepsze niż kalkulator.
        </i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/61.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);