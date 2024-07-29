function animateElement(element, keyframes, options) {
    return new Promise((resolve) => {
        element.animate(keyframes, options).onfinish = resolve;
    });
}

async function mobile_menu_open() {
    document.querySelector('.menu-button').style.display = "none";
    document.getElementById('header-mobile').style.display = "block";
    await animateElement(document.getElementById('header-mobile'),[
        {
            opacity: '0',
            transform: 'translate(100%)'
        },
        {
            opacity: '1',
            transform: 'translate(0)'
        }
    ],  {
        easing: 'ease-out',
        fill: 'forwards',
        duration: 150,
    });
}

async function mobile_menu_close() {
    await animateElement(document.getElementById('header-mobile'),[
        {
            opacity: '1',
            transform: 'translate(0)'
        },
        {
            opacity: '0',
            transform: 'translate(100%)'
        }
    ],  {
        easing: 'ease-in',
        fill: 'forwards',
        duration: 95
    });
    setTimeout(() => {
        document.querySelector('.menu-button').style.display = "block";
        document.getElementById('header-mobile').style.display = "none";
    },
    0
    );
}