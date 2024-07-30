function latest() {
    const card_title = "Strzelnica";
    const site_title = card_title;
    const card_cost = "3M";
    const card_cost_info = "3 Many";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Domena Niszczycieli: Zagrywane sojusznicze jednostki mają siłę bazową równą 2*X, gdzie X jest liczbą sojuszniczych niszczycieli.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/141.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);