function latest() {
    const card_title = "Piroman Cham";
    const site_title = card_title;
    const card_cost = "12M 5P";
    const card_cost_info = "12 Many i 5 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Zadrobian, Niszczyciel
        </p>`;
    const card_description = `
        <p>Przeprowadź starcie między Piromanem Chamem a wrogą jednostką.</p>
        <br>
        <p>Za każdym razem, gdy ta jednostka zada nadwyżkę obrażeń po zablokowaniu, pomnóż nadwyżkę obrażeń czterokrotnie.</p>`;
    const card_stats = `
        <p>
        6/1/5/6
        </p>`;
    const card_flavor = `
        <i>
        "Zapytali mnie jak po tym wszystkim śpię w nocy. Odpowiedziałem, że na boku albo na plecach."
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/92.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);