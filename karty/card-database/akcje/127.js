function latest() {
    const card_title = "Jesteś w Dupie";
    const site_title = card_title;
    const card_cost = "4M 6P";
    const card_cost_info = "4 Many i 6 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz wrogą jednostkę.
        </p>
        <p>
        Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-X, gdzie X jest liczbą sojuszniczych jednostek.
        </p>
        <p>
        Domena Morskich: Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-X, gdzie X jest podwojoną liczbą sojuszniczych jednostek. Zyskujesz 5 zdrowia.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/127.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);