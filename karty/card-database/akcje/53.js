function latest() {
    const card_title = "Staranozal";
    const site_title = card_title;
    const card_cost = "5M";
    const card_cost_info = "5 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz sojuszniczą jednostkę.
        </p>
        <p>
        Poświęć tę jednostkę, zyskujesz X zdrowia, gdzie X jest sumą statystyk tej jednostki.
        </p>
        <p>
        Oddanie(Z): Poświęć tę jednostkę, zyskujesz X zdrowia, gdzie X jest podwojoną sumą statystyk tej jednostki.
        </p>`;
    const card_flavor = `
        <i>
        "Mamy dla ciebie STARANOZAL DZIEŃ, wszystkie twoje problemy znikną! Ma on zawartość antybakteryjną!"
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/53.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Staranozal";
    const site_title = card_title+" (alpha)";
    const card_cost = "5M";
    const card_cost_info = "5 Many";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Wybierz sojuszniczą jednostkę.
        </p>
        <p>
        Ta jednostka zostaje poświęcona. Leczysz się o sumę jej statystyk.
        </p>
        <p>
        Oddanie(Z): Ta jednostka zostaje poświęcona. Leczysz się o podwojoną sumę jej statystyk.
        </p>`;
    const card_flavor = `
        <i>
        "Mamy dla ciebie STARANOZAL DZIEŃ, wszystkie twoje problemy znikną! Ma on zawartość antybakteryjną!"
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/53.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);