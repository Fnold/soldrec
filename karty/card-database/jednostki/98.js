function latest() {
    const card_title = "Ebenezer IX";
    const site_title = card_title;
    const card_cost = "12M 25P";
    const card_cost_info = "12 Many i 25 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Zyskujesz X monet, gdzie X jest liczbą sojuszniczych akcji.</p>
        <br>
        <p>Zapłać 10*X monet: Sprowokuj X wrogich jednostek.</p>
        <br>
        <p>Za każdym razem, gdy sprowokowana jednostka umiera, Ebenezer IX zyskuje 1 pkt pancerza.</p>`;
    const card_stats = `
        <p>
        4/1/4/4
        </p>`;
    const card_flavor = `
        <i>
        "Każdego biedniejszego ode mnie nazywam BIEDAKIEM!"
        </i>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2022
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/98.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);