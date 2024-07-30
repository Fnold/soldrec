function latest() {
    const card_title = "Konował";
    const site_title = card_title;
    const card_cost = "10M";
    const card_cost_info = "10 Many";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek
        </p>`;
    const card_description = `
        <p>Wybierz wrogą jednostkę. Ta jednostka zostaje zatruta i nadany zostaje jej efekt unicestwienia. Konował zyskuje żywotność 1.</p>
        <br>
        <p>Oczyść wszystkie jednostki lub oczyść wszystkie sojusznicze jednostki.</p>
        <br>
        <p>Za każdy jeden status który oczyścisz zyskujesz 1 monetę.</p>`;
    const card_stats = `
        <p>
        4/3/4/4
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2023
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/59.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);