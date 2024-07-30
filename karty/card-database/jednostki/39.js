function latest() {
    const card_title = "Łucznik";
    const site_title = card_title;
    const card_cost = "13M 15P";
    const card_cost_info = "13 Many i 15 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Niszczyciel
        </p>`;
    const card_description = `
        <p>Ty i wybrany wróg rzucacie monetą dopóki obaj nie traficie ORŁA. Każdy kto tym sposobem wyrzucił RESZKĘ traci 2 zdrowia.</p>
        <br>
        <p>Pod koniec każdej twojej tury rzucaj monetą dopóki nie trafisz na RESZKĘ. Za każdym razem, gdy trafisz ORŁA w rzucie monetą, dobierz 1 kartę.</p>`;
    const card_stats = `
        <p>
        6/1/8/4
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/39.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Łucznik";
    const site_title = card_title+" (alpha)";
    const card_cost = "7M 10P";
    const card_cost_info = "7 Many i 10 Popularności";
    const card_type = "Jednostka - Operator";
    const card_subtype = `
        <p>
        -
        </p>`;
    const card_description = `
        <p>Ty i twój wróg obaj rzucacie naraz monetami dopóki obaj nie traficie ORŁA. Każdy kto tym sposobem wyrzuci RESZKĘ traci 2 zdrowia.</p>
        <br>
        <p>Pod koniec każdej twojej tury po ulepszeniu rzucaj monetą dopóki nie trafisz na RESZKĘ. Dobierasz kartę za każdym razem gdy ktoś wyrzuci ORŁA w rzucie monetą.</p>`;
    const card_stats = `
        <p>
        6/1/8/4
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
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/39.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);