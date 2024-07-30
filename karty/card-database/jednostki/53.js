function latest() {
    const card_title = "Krol";
    const site_title = card_title;
    const card_cost = "12M 8P";
    const card_cost_info = "12 Many i 8 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Wybierz wystawioną wrogą jednostkę. Ta jednostka do początku twojej następnej tury generuje 0 many.</p>
        <br>
        <p>Zagrywanie sojuszniczych akcji ma koszt many mniejszy o 2. Zagrywanie wrogich akcji ma koszt many większy o 2. Zagrywanie wrogich akcji celujących w jednostki czerwono-niebieskie ma koszt many większy o 1.</p>`;
    const card_stats = `
        <p>
        5/5/2/4
        </p>`;
    const card_flavor = `
        <i>
        "Lepszy" brat.
        </i>`;
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/53.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);