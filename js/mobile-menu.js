function animateElement(element, keyframes, options) {
    return new Promise((resolve) => {
        element.animate(keyframes, options).onfinish = resolve;
    });
}

async function mobile_menu_open() {
    document.querySelector('.menu-button').classList.add('hidden');
    document.getElementById('header-mobile').classList.add('visible');
    await animateElement(document.getElementById('header-mobile'), [
        {
            transform: 'translateX(100%)',
            opacity: '0'
        },
        {
            transform: 'translateX(0)',
            opacity: '1'
        }
    ], {
        duration: 150,
        easing: 'ease-out',
        fill: 'forwards'
    });
}

async function mobile_menu_close() {
    await animateElement(document.getElementById('header-mobile'), [
        {
            transform: 'translateX(0)',
            opacity: '1'
        },
        {
            transform: 'translateX(100%)',
            opacity: '0'
        }
    ], {
        duration: 95,
        easing: 'ease-in',
        fill: 'forwards'
    });

    setTimeout(() => {
        document.querySelector('.menu-button').classList.remove('hidden');
        document.getElementById('header-mobile').classList.remove('visible');
    }, 0);
}