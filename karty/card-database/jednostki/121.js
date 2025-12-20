function latest() {
    const card_title = "Król Lipinu";
    const site_title = card_title;
    const card_cost = "4M 15P";
    const card_cost_info = "4 Many i 15 Popularności";
    const card_type = "Jednostka";
    const card_subtype = `
        <p>
        Człowiek, Bogacz
        </p>`;
    const card_stats = `
        <p>
        5/5/4/1
        </p>`;
    const card_author = `
        <i>
        Ilustracja: Soldin 2024
        </i>`;
    document.getElementById("card_title").innerHTML = card_title;
    document.getElementById("site_title").innerHTML = site_title;
    document.getElementById("card_cost").innerHTML = card_cost;
    document.getElementById("card_cost_info").title = card_cost_info;
    document.getElementById("card_type").innerHTML = card_type;
    document.getElementById("card_subtype").innerHTML = card_subtype;
    document.getElementById("card_stats").innerHTML = card_stats;
    document.getElementById("card_author").innerHTML = card_author;
    document.getElementById("card_image").src = "../../assets/cards/latest/jednostki/121.webp";
    document.getElementById("card_image").alt = card_title;
    document.getElementById("latest_selector").innerHTML = `&gt;<u>Najnowsza</u>`;
}
document.addEventListener("DOMContentLoaded", latest);

    const card_id = (document.currentScript?.getAttribute('src') || '').match(/\/(\d+)(?=\.js(?:$|\?|#))/)?.[1];
    const current_popularity = eval(`v1_3_0JednostkaCard${card_id}Popularity`);
    const current_delta = eval(`v1_3_0JednostkaCard${card_id}Delta`);
    const ctxP = document.getElementById('chart_popularity');
    const ctxD = document.getElementById('chart_delta');
    if (current_popularity == null) {
        current_popularity = 0;
    }
    if (current_delta == null) {
        current_delta = 0;
    }
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
        if (value <= -10) {
            Dcolor = interpolateColor(red, orange, (value - (-40)) / (30));
        } else if (value <= 10) {
            Dcolor = interpolateColor(orange, yellow, (value - (-10)) / (20));
        } else if (value <= 40) {
            Dcolor = interpolateColor(yellow, green, (value - 10) / (30));
        } else {
            Dcolor = green;
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
        labels: ['1.3.0','1.4.0'],
        datasets: [{
            label: 'Frekwencja',
            data: [(eval(`v1_3_0JednostkaCard${card_id}Popularity`))],
            borderWidth: 1,
            borderColor: '#FFC000',
            backgroundColor: '#FFC000'
        }]
        },
        options: {
        clip: false,
        pointRadius: 5,
        pointStyle: 'rectRot',
        maintainAspectRatio: false,
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
            ticks: {
                stepSize: 10
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
    new Chart(ctxD, {
        type: 'line',
        data: {
        labels: ['1.3.0','1.4.0'],
        datasets: [{
            label: 'Delta',
            data: [(eval(`v1_3_0JednostkaCard${card_id}Delta`))],
            borderWidth: 1,
            borderColor: '#0094FF',
            backgroundColor: '#0094FF'
        }]
        },
        options: {
        clip: false,
        pointRadius: 5,
        pointStyle: 'rectRot',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            y: {
            max: 50,
            min: -50,
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