function latest() {
    const card_title = "Klub ze Szklanki";
    const site_title = card_title;
    const card_cost = "5M 2P";
    const card_cost_info = "5 Many i 2 Popularności";
    const card_type = "Jednostka";
    const card_subtype = `
        <p>
        Budowla
        </p>`;
    const card_stats = `
        <p>
        4/2/4/1
        </p>`;
    const card_flavor = `
        <i>
        Pierwszy encounter.
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2021
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/49.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);