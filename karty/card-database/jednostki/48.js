function latest() {
    const card_title = "Tarking";
    const site_title = card_title;
    const card_cost = "10M 10P";
    const card_cost_info = "10 Many i 10 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Niszczyciel
        </p>`;
    const card_description = `
        <p>Poświęć sojuszniczą jednostkę inną niż ta. Dobierz kartę ze swojej talii.</p>
        <br>
        <p>Przy każdym poświęceniu ulepsz tę jednostkę i połóż na niej licznik. Zagrywanie sojuszniczych akcji kosztuje X mniej many i X więcej sławy gdzie X jest liczbą liczników na tej karcie.</p>`;
    const card_stats = `
        <p>
        4/4/4/2
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/48.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Tarking";
    const site_title = card_title+" (alpha)";
    const card_cost = "8M 10P";
    const card_cost_info = "8 Many i 10 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Poświęć sojuszniczą jednostkę inną niż ta. Dobierz kartę ze swojej talii.</p>
        <br>
        <p>Przy każdym poświęceniu ulepsz tę jednostkę i połóż na niej licznik. Zagrywanie sojuszniczych akcji kosztuje X mniej many gdzie X jest liczbą liczników na tej karcie. Wszystkie sojusznicze akcje mają koszt zagrywania sławy większy o 2.</p>`;
    const card_stats = `
        <p>
        4/4/4/2
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/48.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);