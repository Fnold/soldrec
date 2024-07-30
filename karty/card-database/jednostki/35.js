function latest() {
    const card_title = "Mag 73";
    const site_title = card_title;
    const card_cost = "11M 8P";
    const card_cost_info = "11 Many i 8 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Mag
        </p>`;
    const card_description = `
        <p>Dobierz 1 kartę ze swojej talii.</p>
        <br>
        <p>Zagrywanie sojuszniczych akcji kosztuje 1 mniej bezkolorowej many. Za każdym razem gdy uda ci się zablokować atak i jednostka blokująca przeżyje to dobierz kartę ze swojej talii. Wrogie akcje celujące w te jednostkę mają koszt zagrywania większy o 1.</p>`;
    const card_stats = `
        <p>
        5/7/5/3
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/35.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Mag 73";
    const site_title = card_title+" (alpha)";
    const card_cost = "9M 8P";
    const card_cost_info = "9 Many i 8 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Dobierz 1 kartę ze swojej talii.</p>
        <br>
        <p>Zagrywanie sojuszniczych akcji kosztuje 1 mniej bezkolorowej many. Za każdym razem gdy uda ci się zablokować atak i jednostka blokująca przeżyje to dobierz kartę ze swojej talii. Wrogie akcje celujące w te jednostkę mają koszt zagrywania większy o 1.</p>`;
    const card_stats = `
        <p>
        5/7/5/3
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/35.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);