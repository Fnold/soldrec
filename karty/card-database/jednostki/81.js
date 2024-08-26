function latest() {
    const card_title = "Wolfe";
    const site_title = card_title;
    const card_cost = "13M 10P";
    const card_cost_info = "13 Many i 10 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Twój wróg odrzuca 1 kartę.</p>
        <br>
        <p>Zagrywanie wrogich kart ma koszt many i sławy większy o X gdzie X jest liczbą zagranych kart w obecnej turze.</p>`;
    const card_stats = `
        <p>
        8/8/0/2
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/81.webp";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `<u>Alpha</u>`;
}
function alpha() {
    const card_title = "Wolfe";
    const site_title = card_title+" (alpha)";
    const card_cost = "12M 10P";
    const card_cost_info = "12 Many i 10 Popularności";
    const card_type = "Jednostka - Operator bez Gwiazdki";
    const card_subtype = `
        <p>
        Człowiek, Bogacz
        </p>`;
    const card_description = `
        <p>Twój wróg odrzuca 1 kartę.</p>
        <br>
        <p>Zagrywanie wrogich kart ma koszt many i sławy większy o X gdzie X jest liczbą zagranych kart w obecnej turze.</p>`;
    const card_stats = `
        <p>
        8/8/0/2
        </p>`;
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
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/alpha/jednostki/81.webp";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `<u>Najnowsza</u>`;
    document.getElementById("alpha_selector").innerHTML = `&gt;<u>Alpha</u>`;
}
document.addEventListener("DOMContentLoaded", latest);

    const ctxP = document.getElementById('chart_popularity');
    const ctxD = document.getElementById('chart_delta');
    const current_popularity = 50;
    const current_delta = 0;
    document.getElementById("popularity").innerHTML = "&nbsp;"+current_popularity+"%&nbsp;";
    document.getElementById("delta").innerHTML = "&nbsp;"+current_delta+"&nbsp;";
    
    function interpolateColor(color1, color2, factor) {
        if (arguments.length < 3) { 
            factor = 0.5; 
        }
        const result = color1.slice();
        for (let i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    }

    function getColorPopularity(value) {
        const red = [255, 0, 0];
        const orange = [255, 127, 0];
        const yellow = [240, 240, 0];
        const green = [0, 192, 0];
        let Pcolor;
        if (value <= 30) {
            Pcolor = interpolateColor(red, orange, value / 30);
        } else if (value <= 60) {
            Pcolor = interpolateColor(orange, yellow, (value - 30) / 30);
        } else if (value <= 90) {
            Pcolor = interpolateColor(yellow, green, (value - 60) / 30);
        } else {
            Pcolor = green;
        }
        return 'rgb(' + Pcolor.join(',') + ')';
    }

    function getColorDelta(value) {
        const red = [255, 0, 0];
        const orange = [255, 127, 0];
        const yellow = [240, 240, 0];
        const green = [0, 192, 0];
        let Dcolor;
        if (value <= -4.5) {
            Dcolor = interpolateColor(red, orange, (value + 10) / 5);
        } else if (value <= 4.5) {
            Dcolor = interpolateColor(orange, yellow, (value + 5) / 10);
        } else {
            Dcolor = interpolateColor(yellow, green, (value - 5) / 5);
        }
        return 'rgb(' + Dcolor.join(',') + ')';
    }

    const Pcolor = getColorPopularity(current_popularity);
    const Dcolor = getColorDelta(current_delta);
    document.getElementById('popularity').style.backgroundColor = Pcolor;
    document.getElementById('delta').style.backgroundColor = Dcolor;

    new Chart(ctxP, {
        type: 'line',
        data: {
        labels: ['1.2.1'],
        datasets: [{
            label: 'Frekwencja',
            data: [current_popularity],
            borderWidth: 1,
            borderColor: '#FFC000',
            backgroundColor: '#FFC000'
        }]
        },
        options: {
        pointRadius: 5,
        pointStyle: 'rectRot',
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
            max: 100,
            beginAtZero: true,
            grid: {
                color: '#404040'
            },
            },
            x: {
            grid: {
                color: '#505050'
            }
            }
        }
        }
    });
    new Chart(ctxD, {
        type: 'line',
        data: {
        labels: ['1.2.1'],
        datasets: [{
            label: 'Delta',
            data: [current_delta],
            borderWidth: 1,
            borderColor: '#0094FF',
            backgroundColor: '#0094FF'
        }]
        },
        options: {
        pointRadius: 5,
        pointStyle: 'rectRot',
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
            max: 10,
            min: -10,
            grid: {
                color: '#404040'
            },
            ticks: {
                stepSize: 1
            }
            },
            x: {
            grid: {
                color: '#505050'
            }
            }
        }
        }
    });