function latest() {
    const card_title = "Wielki Knur";
    const site_title = card_title;
    const card_cost = "16M 10P";
    const card_cost_info = "16 Many i 10 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Bestia, Bogacz, Niszczyciel
        </p>`;
    const card_description = `
        <p>Twój wróg zrzuca X gdzie X jest liczbą wystawionych sojuszniczych akcji.</p>
        <br>
        <p>Za każdym razem gdy sojusznicza akcja zadaje obrażenia wrogowi to twój wróg zrzuca tyle kart ile akcja zadała obrażeń.</p>`;
    const card_stats = `
        <p>
        9/8/3/2
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/66.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);