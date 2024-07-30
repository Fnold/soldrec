function latest() {
    const card_title = "Zabawa";
    const site_title = card_title;
    const card_cost = "4M 4P";
    const card_cost_info = "4 Many i 4 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Wszystkie sojusznicze akcje, które coś wybierają, dokonują tego losowo. Wszystkie sojusznicze akcje mają koszt zagrywania many i sławy mniejszy o 2.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/62.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Zabawa";
    const site_title = card_title+" (alpha)";
    const card_cost = "4M 4P";
    const card_cost_info = "4 Many i 4 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Wszystkie sojusznicze akcje które coś wybierają, dokonują tego losowo. Wszystkie sojusznicze akcje mają koszt zagrywania many i sławy mniejszy o 2.
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/62.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);