function latest() {
    const card_title = "Gold Ring";
    const site_title = card_title;
    const card_cost = "1C 4M";
    const card_cost_info = "1 Moneta i 4 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz sojuszniczą jednostkę.
        </p>
        <p>
        Zyskujesz X monet, gdzie X jest popularnością tej jednostki.
        </p>
        <p>
        Oddanie(YZ) - Zyskujesz X monet, gdzie X jest podwojoną popularnością tej jednostki.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/134.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);