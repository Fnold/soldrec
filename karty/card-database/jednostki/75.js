function latest() {
    const card_title = "Scolder";
    const site_title = card_title;
    const card_cost = "5E 15P";
    const card_cost_info = "5 Endturii i 15 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Dno, Niszczyciel, Mag
        </p>`;
    const card_description = `
        <p>Zawłaszcz 4.</p>
        <br>
        <p>Wybierz dwie wystawione jednostki.<br> Jedna z nich zyskuje +0/&NoBreak;+0/&NoBreak;+0/&NoBreak;+1 a druga traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-1.</p>
        <br>
        <p>Wszystkie sojusznicze efekty ZAWŁASZCZENIA są o X większe gdzie X jest liczbą liczników. Połóż licznik na tej karcie po każdym sojuszniczym ZAWŁASZCZENIU.</p>`;
    const card_stats = `
        <p>
        8/1/4/1
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/75.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);