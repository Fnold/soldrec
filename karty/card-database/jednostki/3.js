function latest() {
    const card_title = "XKDN";
    const site_title = card_title;
    const card_cost = "4M 6P";
    const card_cost_info = "4 Many i 6 Popularności";
    const card_type = "Jednostka";
    const card_subtype = `
        <p>
        Niszczyciel
        </p>`;
    const card_stats = `
        <p>
        1/3/3/7
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2020
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/3.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);