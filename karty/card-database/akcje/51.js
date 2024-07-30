function latest() {
    const card_title = "Podążenie za Śladami";
    const site_title = card_title;
    const card_cost = "3M";
    const card_cost_info = "3 Many";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Wybierz wroga.
        </p>
        <p>
        Ten wróg traci X zdrowia, gdzie X jest liczbą liczników na tej karcie. Za każdym razem, gdy twój wróg dobierze kartę, połóż 1 licznik na tej akcji.
        </p>`;
    const card_flavor = `
        <i>
        Serutus NIGDY nie odpuścił.
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/51.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Podążenie za Śladami";
    const site_title = card_title+" (alpha)";
    const card_cost = "3M";
    const card_cost_info = "3 Many";
    const card_type = "Akcja - ROZKAZ";
    const card_description = `
        <p>
        Twój wróg otrzymuje X obrażeń gdzie X jest liczbą liczników na tej akcji. Następnie usuń wszystkie liczniki z tej akcji. Połóż licznik na tej akcji za każdym razem gdy twój wróg dobierze kartę.
        </p>`;
    const card_flavor = `
        <i>
        Serutus NIGDY nie odpuścił.
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Fnold 2023
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/51.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);