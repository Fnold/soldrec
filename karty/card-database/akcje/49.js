function latest() {
    const card_title = "Akcja 49";
    const site_title = card_title;
    const card_cost = "6M";
    const card_cost_info = "6 Many";
    const card_type = "Akcja - ROZKAZ 2 ŁAD.";
    const card_description = `
        <p>
        Rzuć monetą:
        </p>
        <p>
        ORZEŁ - Wybrana wroga jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-3.
        </p>
        <p>
        RESZKA - Trzy różne wybrane wrogie jednostki tracą -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-1.
        </p>
        <p>
        Za każdym razem, gdy zginie wroga jednostka, ta akcja zyskuje 1 ładunek.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: -
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/49.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Akcja 49";
    const site_title = card_title+" (alpha)";
    const card_cost = "5M";
    const card_cost_info = "5 Many";
    const card_type = "Akcja - ROZKAZ 2 ŁAD.";
    const card_description = `
        <p>
        Rzuć monetą:
        </p>
        <p>
        ORZEŁ - Jedna wybrana wroga jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-3.
        </p>
        <p>
        RESZKA - Trzy różne wybrane wrogie jednostki tracą -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-1.
        </p>
        <p>
        Ta akcja dostaje 1 ładunek za każdym razem gdy zginie wroga jednostka.
        </p>`;
    const card_author = `
        <i>
        Ilustracja: -
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/49.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);