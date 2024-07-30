function latest() {
    const card_title = "Jegomość";
    const site_title = card_title;
    const card_cost = "14M 14P";
    const card_cost_info = "14 Many i 14 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Zyskaj 3 monety.</p>
        <br>
        <p>Zapłać X monet i zmień stronę wybranej niekukłowej jednostki o sumie statystyk X.</p>
        <br>
        <p>Co każde dwie twoje wydane monety ulepsz tę jednostkę.</p>`;
    const card_stats = `
        <p>
        3/3/5/5
        </p>`;
    const card_flavor = `
        <i>
        Rycerz 1 przejął strefę debili. Co za debil, przejął strefę debili, nie?
        </i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/45.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Jegomość";
    const site_title = card_title+" (alpha)";
    const card_cost = "10M 10P";
    const card_cost_info = "10 Many i 10 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Postaw 3 liczniki na tej karcie.</p>
        <br>
        <p>W dowolnym momencie w sojuszniczej fazie akcji możesz usunąć licznik z tej karty. Przy każdym usunięciu liczniku z tej karty możesz zmienić stronę wybranej zwykłej jednostki. Gdy ta jednostka straci wszystkie liczniki to zostaje ona zabita i jej zagrywanie zostaje opodatkowane o 10.</p>`;
    const card_stats = `
        <p>
        3/3/5/5
        </p>`;
    const card_flavor = `
        <i>
        Rycerz 1 przejął strefę debili. Co za debil, przejął strefę debili, nie?
        </i>`;
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/45.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);