function latest() {
    const card_title = "Zbieranie Prawdziwej Ekipy";
    const site_title = card_title;
    const card_cost = "7M 20P";
    const card_cost_info = "7 Many i 20 Popularności";
    const card_type = "Akcja - SCENARIUSZ";
    const card_description = `
        <p>
        Adwansuj za każdym razem, gdy twój wróg zagra drugą jednostkę w swojej turze.
        </p>
        <p>
        1 - Wybrany wróg traci X zdrowia, gdzie X jest liczbą wystawionych przez tego wroga jednostek.
        </p>
        <p>
        2 - Każdy twój wróg traci X zdrowia a ty zyskujesz X zdrowia, gdzie X jest liczbą wystawionych wrogich jednostek.
        </p>
        <p>
        3 - Każdy twój wróg poświęca jednostkę.
        </p>`;
    const card_flavor = `
        <i>
        Z czerwonych bram do centrum serca droga jest prosta niczym autostrada.
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
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/129.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);