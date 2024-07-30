function latest() {
    const card_title = "Herbert";
    const site_title = card_title;
    const card_cost = "12M 10P";
    const card_cost_info = "12 Many i 10 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Bestia, Bogacz
        </p>`;
    const card_description = `
        <p>Wyznacz X NAGRÓD za wrogie jednostki gdzie X jest liczbą wystawionych jednostek z wyznaczoną NAGRODĄ.</p>
        <br>
        <p>Za każdym razem gdy sojusznicza jednostka z siłą większą niż jej bazowa atakuje to wyznacz NAGRODĘ za wybraną wrogą jednostkę. Za każdym razem gdy jednostka z wyznaczoną NAGRODĄ zginie w fazie walki to gracz który wyznaczył tę NAGRODĘ dobiera kartę.</p>`;
    const card_stats = `
        <p>
        5/4/5/5
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/85.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);