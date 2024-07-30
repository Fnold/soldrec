function latest() {
    const card_title = "Stwórcyzm";
    const site_title = card_title;
    const card_cost = "3J 6C";
    const card_cost_info = "≥3 Wystawione Jednostki i 6 Monet";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Budowla, Kler, Bogacz
        </p>`;
    const card_description = `
        <p>Wybierz sojuszniczą jednostkę. Ta jednostka zostaje oczyszczona.</p>
        <br>
        <p>Pod koniec każdej wrogiej tury możesz wskrzesić jednostkę tego wroga z największą sumą kosztów zagrywania, nadaj jej wtedy status UNICESTWIENIA i zyskaj X monet, gdzie X jest kosztem zagrywania many wskrzeszonej jednostki. Za każdym razem, gdy zagrywasz jednostkę kleru, dobierz 1 kartę.</p>`;
    const card_stats = `
        <p>
        0/5/5/5
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2024
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/91.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `<u>v1.1.0</u>`;
}
function v1_1_0() {
    const card_title = "Stwórcyzm";
    const site_title = card_title+" (v1.1.0)";
    const card_cost = "3J 6C";
    const card_cost_info = "≥3 Wystawione Jednostki i 6 Monet";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Budowla, Kler, Bogacz
        </p>`;
    const card_description = `
        <p>Wybierz sojuszniczą jednostkę. Ta jednostka zostaje oczyszczona.</p>
        <br>
        <p>Pod koniec każdej tury wroga wskrześ jednostkę tego wroga z największą sumą kosztów, nadaj jej status UNICESTWIENIA i zyskaj X monet gdzie X jest kosztem zagrywania many wskrzeszonej jednostki. Za każdym razem, gdy zagrywasz jednostkę kleru, dobierz 1 kartę.</p>`;
    const card_stats = `
        <p>
        0/5/5/5
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2024
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
    document.getElementById("card_image").src = "../../assets/cards/1.1.0/jednostki/91.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("v1_1_0_selector").innerHTML = `&gt;<u>v1.1.0</u>`;
}
document.addEventListener("DOMContentLoaded", latest);