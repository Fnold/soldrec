function latest() {
    const card_title = "Robot";
    const site_title = card_title;
    const card_cost = "4E 5M";
    const card_cost_info = "4 Endturii i 5 Many";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Maszyna, Niszczyciel
        </p>`;
    const card_description = `
        <p>Ta jednostka zyskuje 4 pkt pancerza.</p>
        <br>
        <p>Za każdym razem, gdy ta jednostka otrzyma obrażenia w walce, zamiast tego zyskuje ona KRWAWIENIE X gdzie X jest liczbą zadanych jej obrażeń.</p>`;
    const card_stats = `
        <p>
        6/0/2/9
        </p>`;
    const card_flavor = `
        <i>
        "Tak jest, mój Panie."
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2020
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/90.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);