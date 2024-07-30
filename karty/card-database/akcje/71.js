function latest() {
    const card_title = "Wysoka Stawka";
    const site_title = card_title;
    const card_cost = "4C 10P";
    const card_cost_info = "4 Monety i 10 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Nasyć wszystkie wystawione jednostki ze statusem NAGRODY: "Gdy ta jednostka zginie to jej włodarz odrzuca 1 kartę."
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/71.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Log";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M 10P";
    const card_cost_info = "6 Many i 10 Popularności";
    const card_type = "Akcja";
    const card_description = `
        <p>
        Pod koniec każdej sojuszniczej tury wroga jednostka z najmniejszym życiem traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-1.
        </p>
        <p>
        Oddanie(C): Pod koniec każdej sojuszniczej tury wroga jednostka z najmniejszym życiem traci -0/&NoBreak;-0/&NoBreak;-0/&NoBreak;-2.
        <br>Jeżeli ta jednostka zginęła tym sposobem to usuń ją z gry.
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
    document.getElementById("card_description").innerHTML = card_description;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/akcje/71.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);