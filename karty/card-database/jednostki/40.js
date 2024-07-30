function latest() {
    const card_title = "Prowadząca";
    const site_title = card_title;
    const card_cost = "9M 4P";
    const card_cost_info = "9 Many i 4 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek
        </p>`;
    const card_description = `
        <p>Wybierz inną jednostkę niż ta i nasyć ją: "Ta jednostka ma NIEWRAŻLIWOŚĆ."</p>
        <br>
        <p>Wszystkie sojusznicze akcje mają tempo NATYCH. Gdy ta jednostka zginie lub zmieni stronę to możesz wziąć z twojego cmentarza 1 akcję do twojej ręki. Twoi wrogowie mogą dobierać maksymalnie 1 kartę na turę.</p>`;
    const card_stats = `
        <p>
        3/7/7/2
        </p>`;
    const card_flavor = `
        <p>
        Nagroda w wielkim finale to: BON o wartości 20000 SoldiCoin!
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
    document.getElementById("card_flavor").innerHTML = card_flavor;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/40.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);