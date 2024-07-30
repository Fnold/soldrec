function latest() {
    const card_title = "Kaskada";
    const site_title = card_title;
    const card_cost = "2M";
    const card_cost_info = "2 Many";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Pośpiech
        </p>
        <p>
        Wybierz sojuszniczą jednostkę.
        </p>
        <p>
        Ta jednostka zostaje ulepszona X razy gdzie X jest liczbą zagranych sojuszniczych kart w tej turze.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/21.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Kaskada";
    const site_title = card_title+" (alpha)";
    const card_cost = "2M";
    const card_cost_info = "2 Many";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Wybierz sojuszniczą jednostkę.
        </p>
        <p>
        Ta jednostka zostaje ulepszona X razy gdzie X jest liczbą wystawionych przez ciebie kart w tej turze (wliczając tę akcję).
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/21.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);