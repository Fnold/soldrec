function latest() {
    const card_title = "Serutus";
    const site_title = card_title;
    const card_cost = "4J 15M";
    const card_cost_info = "≥4 Wystawione Jednostki i 15 Many";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Morski, Niszczyciel
        </p>`;
    const card_description = `
        <p>Ulepsz sojuszniczą jednostkę. Tracisz 5 zdrowia.</p>
        <br>
        <p>Za każdym razem, gdy sojusznicza karta powoduje utratę zdrowia, zamiast stracić swoje zdrowie stwórz Kukłę X/0/0/X, gdzie X jest liczbą zdrowia, które byłoby stracone.</p>`;
    const card_stats = `
        <p>
        8/3/7/8
        </p>`;
    const card_flavor = `
        <i>
        "Jeden wielki niszczyciel nie wystarczył, zebrałem ich wszystkich."
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/95.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);