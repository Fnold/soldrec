function latest() {
    const card_title = "4a";
    const site_title = card_title;
    const card_cost = "4M";
    const card_cost_info = "4 Many";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Wybierz sojuszniczą jednostkę.
        </p>
        <p>
        Ta jednostka zmienia stronę na czas 3 tur. Jeżeli po tym czasie jednostka nadal jest wystawiona to zmienia ona stronę na twoją i wybrana akcja tego samego wroga zmienia stronę na twoją.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2021
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/44.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "4a";
    const site_title = card_title+" (alpha)";
    const card_cost = "4M";
    const card_cost_info = "4 Many";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Wybierz sojuszniczą jednostkę.
        </p>
        <p>
        Ta jednostka zmienia stronę na czas 3 wrogich tur. Jeżeli po tym czasie jednostka nadal żyje to wybierz jedną wystawioną akcję wroga i weź ją do swojej ręki i natychmiastowo zagraj bez kosztów zagrania. Zmień stronę tej jednostki.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2020
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/44.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);