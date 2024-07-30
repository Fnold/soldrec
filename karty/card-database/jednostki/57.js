function latest() {
    const card_title = "Hondum";
    const site_title = card_title;
    const card_cost = "6M 15P";
    const card_cost_info = "6 Many i 15 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Przyroda, Bestia, Niszczyciel
        </p>`;
    const card_description = `
        <p>Ta jednostka trafia na wrogi cmentarz.</p>
        <br>
        <p>Gdy ta jednostka znajduje się na wrogim cmentarzu to na początku każdej tury wroga na którym cmentarzu jest ta jednostka usuń z gry do 2 losowych kart innych niż ta z tego cmentarza i postaw liczbę liczników na tej karcie równą liczbie usuniętych kart tym sposobem. Gdy na początku tury tamtego wroga ta jednostka jest jedyną kartą we wrogim cmentarzu to zostaje ona wskrzeszona po twojej stronie i zyskuje +X/&NoBreak;+X/&NoBreak;+X/&NoBreak;+X gdzie X jest liczbą liczników na tej karcie, następnie usuń wszystkie liczniki z tej karty. Gdy ta jednostka jest na cmentarzu to nie można jej obrać za cel.</p>`;
    const card_stats = `
        <p>
        2/1/1/2
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/57.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Hondum";
    const site_title = card_title+" (alpha)";
    const card_cost = "6M 15P";
    const card_cost_info = "6 Many i 15 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Ta jednostka trafia na wrogi cmentarz.</p>
        <br>
        <p>Gdy ta jednostka znajduje się na wrogim cmentarzu to na początku każdej wrogiej tury usuń z gry losową kartę inną niż ta z wrogiego cmentarza i połóż licznik na tej karcie. Gdy na początku tury wroga ta jednostka jest jedyną kartą w cmentarzu wroga to ta jednostka trafia na twoją stronę oraz zyskuje +X/&NoBreak;+X/&NoBreak;+X/&NoBreak;+X gdzie X jest liczbą liczników na tej karcie, następnie usuń wszystkie liczniki z tej karty. Gdy ta jednostka jest na cmentarzu to nie można jej obrać za cel.</p>`;
    const card_stats = `
        <p>
        2/1/1/2
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/57.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);