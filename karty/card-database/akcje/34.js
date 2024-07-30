function latest() {
    const card_title = "Anektacja";
    const site_title = card_title;
    const card_cost = "6M";
    const card_cost_info = "6 Many";
    const card_type = "Akcja - ROZKAZ 0 ŁAD.";
    const card_description = `
        <p>
        Poświęć jednostkę i dodaj jej statystyki do innej wybranej sojuszniczej jednostki. Za każdym razem, gdy zagrywasz wielokolorową jednostkę, dodaj 1 ładunek do tej akcji.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/34.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Anektacja";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M";
    const card_cost_info = "6 Many";
    const card_type = "Akcja - ROZKAZ 1 ŁAD.";
    const card_description = `
        <p>
        Poświęć wystawioną sojuszniczą jednostkę i dodaj jej statystyki do innej wybranej wystawionej sojuszniczej jednostki. Za każdym razem gdy zagrywasz wielokolorową jednostkę dodaj ładunek do tej akcji.
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
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/34.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);