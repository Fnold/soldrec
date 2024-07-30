function latest() {
    const card_title = "Serwer Testowy";
    const site_title = card_title;
    const card_cost = "1M 1P";
    const card_cost_info = "1 Many i 1 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Jeżeli na początku twojej tury jest wystawione 15 lub więcej sojuszniczych serwerów to wygrywasz grę.
        </p>`;
    const card_flavor = `
        <i>
        1... 3... 5... 7... 9...
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Magnus 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/135.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);