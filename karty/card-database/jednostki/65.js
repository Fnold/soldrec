function latest() {
    const card_title = "Barman";
    const site_title = card_title;
    const card_cost = "8M 5P";
    const card_cost_info = "8 Many i 5 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Zapłać 2*X: Zyskaj X many.</p>
        <br>
        <p>Na początku każdej twojej tury zyskujesz X monet gdzie X jest liczbą kart w twojej ręce.</p>`;
    const card_stats = `
        <p>
        0/4/4/4
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/65.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);