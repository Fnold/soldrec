function latest() {
    const card_title = "Evader";
    const site_title = card_title;
    const card_cost = "16M 10P";
    const card_cost_info = "16 Many i 10 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Bogacz, Niszczyciel
        </p>`;
    const card_description = `
        <p>Poświęć wybraną sojuszniczą jednostkę i zyskaj X monet gdzie X jest sumą statystyk poświęconej jednostki.</p>
        <br>
        <p>Zapłać Y: Twój wróg traci 2*Y zdrowia lub ulecz się o 2*Y.</p>
        <br>
        <p>Ta jednostka zyskuje +1/&NoBreak;+0/&NoBreak;+0/&NoBreak;+0 za każdą jedną wydaną monetę.</p>`;
    const card_stats = `
        <p>
        9/0/0/9
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
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/67.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);