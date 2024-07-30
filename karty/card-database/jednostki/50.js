function latest() {
    const card_title = "Nauczyciel";
    const site_title = card_title;
    const card_cost = "10M";
    const card_cost_info = "10 Many";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek
        </p>`;
    const card_description = `
        <p>Wybierz literę i koszt zagrywania many.</p>
        <br>
        <p>Za każdym razem gdy zagrana zostanie karta zaczynająca się na wybraną wcześniej literę to zadaj 3 obrażenia wybranej wrogiej jednostce lub wrogowi. Za każdym razem gdy zagrywana jest karta o wybranym wcześniej koszcie zagrywania many zadaj 2 obrażenia wybranej wrogiej jednostce i wrogowi.</p>`;
    const card_stats = `
        <p>
        6/0/3/2
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2022
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/50.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);