function latest() {
    const card_title = "Jednostka 29";
    const site_title = card_title;
    const card_cost = "8M 8P";
    const card_cost_info = "8 Many i 8 Popularności";
    const card_type = "Jednostka";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_stats = `
        <p>
        5/5/7/5
        </p>`;
    const card_author = `
        <i>
        Ilustracja: -
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/29.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);