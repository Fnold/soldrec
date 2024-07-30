function latest() {
    const card_title = "Debil 3";
    const site_title = card_title;
    const card_cost = "7M 3P";
    const card_cost_info = "7 Many i 3 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek
        </p>`;
    const card_description = `
        <p>Ta jednostka zyskuje: ZATRUCIE, KRWAWIENIE, POŚPIECH, ŻYWOTNOŚĆ 1, NAUKĘ 1.</p>
        <br>
        <p>Jeżeli ta jednostka miałaby zostać ulepszona w fazie ulepszania to ulepsz ją dodatkowy raz.</p>`;
    const card_stats = `
        <p>
        1/1/1/1
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/68.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Debil 3";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M 3P";
    const card_cost_info = "6 Many i 3 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Ta jednostka zyskuje: POŚPIECH, NAUKĘ 1, ŻYWOTNOŚĆ 1, ZATRUCIE, UNICESTWIENIE oraz nie może zostać obrana za cel przez wroga.</p>
        <br>
        <p>W fazie ulepszania ulepsz dodatkowo tę jednostkę.</p>`;
    const card_stats = `
        <p>
        1/1/1/1
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/68.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);