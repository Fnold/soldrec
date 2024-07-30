function latest() {
    const card_title = "Mędrzec";
    const site_title = card_title;
    const card_cost = "8M 5P";
    const card_cost_info = "8 Many i 5 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek
        </p>`;
    const card_description = `
        <p>Przeszukaj swoją talię i weź z niej 1 kartę. Przetasuj swoją talię.</p>
        <br>
        <p>Za każdym razem, gdy twój wróg przeszukuje talię i wybiera kartę, zamiast tego ty ją przeszukaj i wybierz kartę. Gdy masz wystawione 10 lub więcej jednostek to na początku wrogiej tury wróg dobiera karty z twojej talii zamiast z własnej.</p>`;
    const card_stats = `
        <p>
        6/1/8/4
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/44.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Mędrzec";
    const site_title = card_title+" (alpha)";
    const card_cost = "7M 5P";
    const card_cost_info = "7 Many i 5 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Przeszukaj swoją talię i weź z niej 1 kartę. Następnie przetasuj swoją talię.</p>
        <br>
        <p>Za każdym razem gdy twój wróg miałby przeszukać talię i wybrać kartę to zamiast tego Ty ją przeszukujesz i wybierasz kartę. Gdy masz 7 lub więcej wystawionych jednostek to twój wróg na początku swojej tury dobiera kartę z twojej talii zamiast z własnej.</p>`;
    const card_stats = `
        <p>
        6/1/8/4
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/44.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);