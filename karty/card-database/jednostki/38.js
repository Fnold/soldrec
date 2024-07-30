function latest() {
    const card_title = "02";
    const site_title = card_title;
    const card_cost = "6M 5P";
    const card_cost_info = "6 Many i 5 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Maszyna, Niszczyciel
        </p>`;
    const card_description = `
        <p>Ulepsz sojuszniczą jednostkę inną niż 02.</p>
        <br>
        <p>Za każdym razem gdy dobierzesz kartę to stwórz idealną kopię tej jednostki. Kopie zachowują podłączone akcje lecz tracą efekt pasywny. Jeżeli ta jednostka zginie to od razu wybierz inne 02 które dostaje efekt pasywny tej jednostki, usuń te jednostkę z gry i opodatkuj zagrywanie operatora o 2.</p>`;
    const card_stats = `
        <p>
        0/2/0/2
        </p>`;
    const card_flavor = `
        <p>
        02
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2020
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/38.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);