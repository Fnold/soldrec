function latest() {
    const card_title = "Floda";
    const site_title = card_title;
    const card_cost = "15M 5P";
    const card_cost_info = "15 Many i 5 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Niszczyciel
        </p>`;
    const card_description = `
        <p>Nasyć sojusznicze akcje: "Oddanie(C): Wykonaj zwykły efekt tej karty oraz każdy twój wróg traci 1 zdrowia a ty zyskujesz 1 zdrowia."</p>
        <br>
        <p>Sojusznicze karty z Oddaniem dzieją się z Oddaniem nawet jeżeli warunek nie jest spełniony. Za każdym razem gdy zagrywasz nową kartę z Oddaniem to twój wróg traci 1 zdrowia a ty ulecz się o 1.</p>`;
    const card_stats = `
        <p>
        0/8/8/5
        </p>`;
    const card_flavor = `
        <i>
        "Diable. Szykuj. Gaz."
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/69.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);