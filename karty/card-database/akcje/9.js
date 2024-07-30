function latest() {
    const card_title = "Ultrabójstwo";
    const site_title = card_title;
    const card_cost = "5M 5P";
    const card_cost_info = "5 Many i 5 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Na początku każdej twojej tury rzuć monetą:
        </p>
        <p>
        ORZEŁ - Ulepsz sojuszniczą jednostkę.
        </p>
        <p>
        RESZKA - Zdegraduj sojuszniczą jednostkę.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/9.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Ultrabójstwo";
    const site_title = card_title+" (alpha)";
    const card_cost = "5M";
    const card_cost_info = "5 Many";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Na początku twojej tury rzuć monetą:
        </p>
        <p>
        ORZEŁ - Ulepszasz sojuszniczą jednostkę.
        </p>
        <p>
        RESZKA - Zmniejsz wybraną statystykę u wybranej sojuszniczej jednostki o 1.
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/9.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);