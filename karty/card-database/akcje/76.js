function latest() {
    const card_title = "Oblężenie Zamku";
    const site_title = card_title;
    const card_cost = "6M";
    const card_cost_info = "6 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz wrogą jednostkę.
        </p>
        <p>
        Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-4. Jeżeli masz wystawione 4 lub więcej jednostek to zamiast tego traci ona -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-6.
        </p>`;
    const card_flavor = `
        <i>
        "To jest Zamek. Musimy go zdobyć. Tam jest MARYŚKA."
        <i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/76.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Oblężenie Zamku";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M";
    const card_cost_info = "6 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz wrogą jednostkę.
        </p>
        <p>
        Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-4, jeżeli masz wystawione 4 lub więcej jednostek to zamiast tego traci ona -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-6.
        </p>`;
    const card_flavor = `
        <i>
        "To jest Zamek. Musimy go zdobyć. Tam jest MARYŚKA."
        <i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/76.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);