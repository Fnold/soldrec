function latest() {
    const card_title = "Bruno";
    const site_title = card_title;
    const card_cost = "9M";
    const card_cost_info = "9 Many";
    const card_type = "Jednostka";
    const card_subtype = `
        <p>
        Bestia
        </p>`;
    const card_stats = `
        <p>
        6/4/6/1
        </p>`;
    const card_flavor = `
        <i>
        Hmm? Coś się naliczyło? Ale fajne... Mmm... Soczyste...
        </i>`;
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
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/58.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);