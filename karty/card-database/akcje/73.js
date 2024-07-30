function latest() {
    const card_title = "Trupia Loteria";
    const site_title = card_title;
    const card_cost = "8M 12P";
    const card_cost_info = "8 Many i 12 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz wrogą jednostkę.
        </p>
        <p>
        Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-4. Losowe jednostki tej samej strony tracą kolejno -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-3, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-2, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-1.
        </p>
        <p>
        Oddanie(C): Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-5. Losowe jednostki tej samej strony tracą kolejno -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-4, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-3, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-2, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-1.
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
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/73.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Trupia Loteria";
    const site_title = card_title+" (alpha)";
    const card_cost = "8M 12P";
    const card_cost_info = "8 Many i 12 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz wrogą jednostkę.
        </p>
        <p>
        Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-4. Losowe wrogie jednostki tracą kolejno -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-3, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-2, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-1.
        </p>
        <p>
        Oddanie(C): Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-5. Losowe wrogie jednostki tracą kolejno -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-4, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-3, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-2, -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-1.
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
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/73.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);