function latest() {
    const card_title = "Rękawica Serutusa";
    const site_title = card_title;
    const card_cost = "10M";
    const card_cost_info = "10 Many";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Zaparcie
        </p>
        <p>
        Wybierz jednostkę.
        </p>
        <p>
        Ta jednostka zyskuje 1 pkt pancerza. Na początku każdej sojuszniczej tury możesz zmienić stronę tej jednostki.
        </p>`;
    const card_flavor = `
        <i>
        Służy do podróży na drugą stronę. Na trzecią w sumie też.
        </i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/128.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);