function latest() {
    const card_title = "Zmiana Przeznaczenia";
    const site_title = card_title;
    const card_cost = "4M 10P";
    const card_cost_info = "4 Many i 10 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Zaparcie
        </p>
        <p>
        Wybierz akcję.
        </p>
        <p>
        Zamień tę akcję z wybraną akcją z twojej ręki.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/136.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);