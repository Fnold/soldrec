document.addEventListener('scroll', function() {
    if ((document.documentElement.scrollTop > 300) && (innerWidth >= 1000)) {
    document.getElementById('back_to_top').classList.add('show');
    }
    else {
    document.getElementById('back_to_top').classList.remove('show');
    }});