function latest() {
    const card_title = "Szlak Handlowy";
    const site_title = card_title;
    const card_cost = "5M 11P";
    const card_cost_info = "5 Many i 11 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Za każdym razem, gdy ulepszasz jednostkę, zyskujesz 1 zdrowia.
        </p>
        <p>
        Oddanie(Z): Za każdym razem, gdy ulepszana jest jednostka, zyskujesz 1 zdrowia.
        </p>`;
    const card_flavor = `
        <i>
        Cała esencja Sold Sea.
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/126.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);