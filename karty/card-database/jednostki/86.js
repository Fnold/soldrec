function latest() {
    const card_title = "Rycerz 1";
    const site_title = card_title;
    const card_cost = "20M 20P";
    const card_cost_info = "20 Many i 20 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Niszczyciel
        </p>`;
    const card_description = `
        <p>Wybierz wrogą jednostkę. Ta jednostka traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-3. Jeżeli ma status to zamiast tego zabij ją.</p>
        <br>
        <p>Za każdym razem gdy ginie wroga jednostka to każdy twój wróg traci 1 zdrowia a ty leczysz się o X gdzie X jest liczbą straconego zdrowia w ten sposób.</p>`;
    const card_stats = `
        <p>
        10/5/8/7
        </p>`;
    const card_flavor = `
        <i>
        "Liczy się tylko EXP..."
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/86.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);