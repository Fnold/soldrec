function latest() {
    const card_title = "Pudaka Soyo";
    const site_title = card_title;
    const card_cost = "7M 8P";
    const card_cost_info = "7 Many i 8 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Mag
        </p>`;
    const card_description = `
        <p>Wskrześ losową jednostkę z wrogiego cmentarza po twojej stronie.</p>
        <br>
        <p>Pod koniec każdej twojej tury twój wróg otrzymuje X obrażeń gdzie X jest wynikiem rzutu 1 kości D6, jeżeli masz wystawione 10 lub więcej jednostek to zamiast tego pod koniec tury rzucaj dwoma kośćmi D6, jeżeli masz wystawione 15 lub więcej jednostek to zamiast tego wróg dostaje 2*X obrażeń.</p>`;
    const card_stats = `
        <p>
        3/0/3/2
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/54.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);