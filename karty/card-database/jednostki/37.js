function latest() {
    const card_title = "SoldStudio";
    const site_title = card_title;
    const card_cost = "16M 10P";
    const card_cost_info = "16 Many i 10 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Przyroda
        </p>`;
    const card_description = `
        <p>Ulepsz każdą wystawioną sojuszniczą jednostkę.</p>
        <br>
        <p>Ta jednostka zyskuje +1/+1/+1/+1 za każdym razem gdy zagrasz nową sojuszniczą jednostkę. Każda nowa zagrana sojusznicza jednostka od razu zostaje ulepszona.</p>`;
    const card_stats = `
        <p>
        4/6/6/7
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/37.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function v1_0_0() {
    const card_title = "SoldStudio";
    const site_title = card_title+" (v1.0.0)";
    const card_cost = "15M 10P";
    const card_cost_info = "15 Many i 10 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Ulepsz każdą wystawioną sojuszniczą jednostkę.</p>
        <br>
        <p>Ta jednostka zyskuje +1/+1/+1/+1 za każdym razem gdy zagrasz nową sojuszniczą jednostkę. Każda nowa zagrana sojusznicza jednostka od razu zostaje ulepszona.</p>`;
    const card_stats = `
        <p>
        4/6/6/7
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
    document.getElementById("card_image").src = "../../assets/cards/1.0.0/jednostki/37.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `&gt;<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "SoldStudio";
    const site_title = card_title+" (alpha)";
    const card_cost = "10M 10P";
    const card_cost_info = "10 Many i 10 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Ulepsz każdą wystawioną sojuszniczą jednostkę.</p>
        <br>
        <p>Ta jednostka zyskuje +1/+1/+1/+1 za każdym razem gdy zagrasz nową sojuszniczą jednostkę. Każda nowa zagrana sojusznicza jednostka od razu zostaje ulepszona.</p>`;
    const card_stats = `
        <p>
        4/6/6/7
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/37.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);