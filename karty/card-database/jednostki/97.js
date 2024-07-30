function latest() {
    const card_title = "Raptowński Spamer";
    const site_title = card_title;
    const card_cost = "6M";
    const card_cost_info = "6 Many";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Morski, Niszczyciel
        </p>`;
    const card_description = `
        <p>Każdy twój wróg odrzuca 1 kartę.</p>
        <br>
        <p>Za każdym razem, gdy ta jednostka zmienia stronę lub umiera, jej oryginalny włodarz ulepsza sojuszniczą jednostkę.</p>`;
    const card_stats = `
        <p>
        9/0/10/1
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/97.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);