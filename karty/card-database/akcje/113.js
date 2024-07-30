function latest() {
    const card_title = "Baner";
    const site_title = card_title;
    const card_cost = "3M";
    const card_cost_info = "3 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz typ jednostki.
        </p>
        <p>
        Za każdym razem, gdy zagrywasz jednostkę z tym typem, ta i wszystkie sojusznicze jednostki z tym typem zyskują +1/&NoBreak;+0/&NoBreak;+0/&NoBreak;+0 i 1 pkt pancerza.
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/113.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Baner";
    const site_title = card_title+" (alpha)";
    const card_cost = "3M";
    const card_cost_info = "3 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz typ jednostki.
        </p>
        <p>
        Za każdym razem, gdy zagrywasz jednostkę o wybranym typie, ta i wszystkie sojusznicze jednostki z tym typem zyskują 1 pkt pancerza i +1/&NoBreak;+0/&NoBreak;+0/&NoBreak;+0.
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/113.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);