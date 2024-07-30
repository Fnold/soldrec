function latest() {
    const card_title = "Hoplita";
    const site_title = card_title;
    const card_cost = "8M 8P";
    const card_cost_info = "8 Many i 8 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef
        </p>`;
    const card_description = `
        <p>Pokaż 10 górnych kart z twojej talii, dobierz wszystkie jednostki z wybraną kombinacją kolorów, resztę kart daj na spód talii.</p>
        <br>
        <p>Za każdym razem gdy zagrywasz akcję to możesz dać wszystkie karty z twojej ręki na spód twojej talii i dobrać X kart gdzie X jest liczbą kart danych na spód talii w ten sposób.</p>`;
    const card_stats = `
        <p>
        3/2/3/3
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
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/52.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);