function latest() {
    const card_title = "Larja";
    const site_title = card_title;
    const card_cost = "9M 5P";
    const card_cost_info = "9 Many i 5 Popularności";
    const card_type = "Jednostka - Operator z Gwiazdką";
    const card_subtype = `
        <p>
        Szef, Człowiek, Kler
        </p>`;
    const card_description = `
        <p>Wszystkie sojusznicze jednostki które trafiły na cmentarz w tej i/lub poprzedniej turze zostają wskrzeszone.</p>
        <br>
        <p>Za każdym razem gdy zagrywasz akcję z tempem NATYCH. możesz dać górną kartę z twojej talii na twój cmentarz, jeżeli taką kartą będzie akcja to ulecz się o 4. Jeżeli taką kartą będzie jednostka i jej suma statystyk będzie mniejsza niż suma statystyk tej jednostki to zagraj ją bez kosztów zagrywania.</p>`;
    const card_stats = `
        <p>
        3/3/2/3
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldik 2023
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
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/51.png";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);