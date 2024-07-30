function latest() {
    const card_title = "Mućka";
    const site_title = card_title;
    const card_cost = "4E 3C 2M 1P";
    const card_cost_info = "4 Endturii, 3 Monety, 2 Many i 1 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Bestia
        </p>`;
    const card_description = `
        <p>Zapłać 2*X many: Zyskujesz X monet.</p>
        <br>
        <p>Zapłać 2*Y: Zyskujesz Y Endturii.</p>
        <br>
        <p>Za każdą jedną twoją wydaną Endturię ulepsz tę jednostkę.</p>`;
    const card_stats = `
        <p>
        3/9/9/9
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/74.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);