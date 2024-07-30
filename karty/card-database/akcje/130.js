function latest() {
    const card_title = "Serutus Kontra Evader";
    const site_title = card_title;
    const card_cost = "4M";
    const card_cost_info = "4 Many";
    const card_type = "Akcja - SCENARIUSZ";
    const card_description = `
        <p>
        Adwansuj pod koniec każdej sojuszniczej tury.
        </p>
        <p>
        1 - Przeprowadź starcie między sojuszniczym operatorem a wrogim operatorem. Przegrany traci 4 zdrowia.
        </p>
        <p>
        2 - Twój operator zyskuje 2 pkt pancerza.
        </p>`;
    const card_flavor = `
        <i>
        "Głupcy. Nie wiedzieli na co się natknęli."
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
    document.getElementById("card_image").src = "../../assets/cards/latest/akcje/130.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);