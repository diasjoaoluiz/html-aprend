const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if(event.type == 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');  
    nav.classList.toggle('active');
    const active = mav.classList.contais('active');
    event.currentTarget.setAttribute('aria-expanded', true);
    if(active) {
        event.currentTarget.setAttribute('aira-label', 'Fechar Menu');
    }else {
        event.currentTarget.setAttribute('aira-label', 'Abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);