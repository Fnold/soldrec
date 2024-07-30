function latest() {
    const card_title = "Diabeł";
    const site_title = card_title;
    const card_cost = "13M 13P";
    const card_cost_info = "13 Many i 13 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Demon, Kler, Niszczyciel
        </p>`;
    const card_description = `
        <p>Poświęć jednostkę. Dobierz 1 kartę i ulecz się o 5.</p>
        <br>
        <p>Za każdym razem gdy zagrywasz twoją pierwszą kartę w turze to twoi wrogowie tracą X zdrowia gdzie X jest kosztem zagrywania many zagrywanej karty.</p>`;
    const card_stats = `
        <p>
        5/0/5/4
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/87.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Diabeł";
    const site_title = card_title+" (alpha)";
    const card_cost = "13M 13P";
    const card_cost_info = "13 Many i 13 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Demon, Kler, Niszczyciel
        </p>`;
    const card_description = `
        <p>Poświęć jednostkę. Dobierz 1 kartę i ulecz się o 5.</p>
        <br>
        <p>Za każdym razem gdy zagrywasz twoją pierwszą kartę w turze to twoi wrogowie tracą X zdrowia gdzie X jest kosztem zagrywania many zagrywanej karty.</p>`;
    const card_stats = `
        <p>
        6/0/6/5
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/87.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);