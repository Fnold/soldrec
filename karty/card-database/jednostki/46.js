function latest() {
    const card_title = "SKKB";
    const site_title = card_title;
    const card_cost = "11M 8P";
    const card_cost_info = "11 Many i 8 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Demon, Niszczyciel
        </p>`;
    const card_description = `
        <p>Wybierz wystawioną kartę. Połóż na wybranej karcie 1 licznik. Dodaj 1 ładunek do każdej sojuszniczej akcji która akceptuje ładunki.</p>
        <br>
        <p>Pod koniec każdej sojuszniczej tury ulepsz tę jednostkę X razy, gdzie X jest liczbą niewykorzystanej many, endturii oraz monet z tej tury.</p>`;
    const card_stats = `
        <p>
        3/3/3/3
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/46.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function v1_0_0() {
    const card_title = "SKKB";
    const site_title = card_title+" (v1.0.0)";
    const card_cost = "11M 8P";
    const card_cost_info = "11 Many i 8 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Demon, Niszczyciel
        </p>`;
    const card_description = `
        <p>Wybierz wystawioną kartę. Połóż na wybranej karcie 1 licznik. Dodaj 1 ładunek do każdej sojuszniczej akcji która akceptuje ładunki.</p>
        <br>
        <p>Twoja nadwyżka many pozostaje na przyszłe tury. Pod koniec każdej sojuszniczej tury ulepsz tę jednostkę X razy gdzie X jest nadwyżką many z pojedyńczej tury.</p>`;
    const card_stats = `
        <p>
        3/3/3/3
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
    document.getElementById("card_image").src = "../../assets/cards/1.0.0/jednostki/46.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `&gt;<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "SKKB";
    const site_title = card_title+" (alpha)";
    const card_cost = "11M 6P";
    const card_cost_info = "11 Many i 6 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Wybierz wystawioną kartę. Połóż na wybranej karcie 1 licznik. Dodaj 1 ładunek do każdej sojuszniczej akcji która akceptuje ładunki.</p>
        <br>
        <p>Twoja nadwyżka many pozostaje na przyszłe tury. Pod koniec każdej sojuszniczej tury ulepsz tę jednostkę X razy gdzie X jest nadwyżką many z pojedyńczej tury.</p>`;
    const card_stats = `
        <p>
        3/3/3/3
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/46.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_0_0_selector").innerHTML = `<u>v1.0.0</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);