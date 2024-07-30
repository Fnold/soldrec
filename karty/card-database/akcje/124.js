function latest() {
    const card_title = "Raptowńskie Posunięcie";
    const site_title = card_title;
    const card_cost = "3M 15P";
    const card_cost_info = "3 Many i 15 Popularności";
    const card_type = "Akcja - NATYCH.";
    const card_description = `
        <p>
        Zaparcie
        </p>
        <p>
        Każdy gracz może wystawić po swojej stronie z ręki wybraną jednostkę.
        </p>`;
    const card_flavor = `
        <i>
        Wiadomość o "nowym, anonimowym właścicielu" morza, które zostało mu sprzedane, wzbudziła niepohamowane przyrosty nowych spółek gangsterskich i niszczycieli. Należało pokazać nowemu kto tu rządzi.
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/124.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);