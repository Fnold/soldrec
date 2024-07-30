function latest() {
    const card_title = "Dr. Prof. Hab. Doktor Doktoriusz";
    const site_title = card_title;
    const card_cost = "14M";
    const card_cost_info = "14 Many";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek
        </p>`;
    const card_description = `
        <p>Twój wróg pokazuje Ci swoją rękę.</p>
        <br>
        <p>Za każde twoje 5 uleczonego zdrowia możesz dobrać 1 kartę. Za każdą jedną twoją dobraną kartę tracisz 8 zdrowia.</p>`;
    const card_stats = `
        <p>
        1/7/5/7
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/71.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);