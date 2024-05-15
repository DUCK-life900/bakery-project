document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('show');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Logique de soumission de formulaire (par exemple, validation ou envoi AJAX)
        alert('Formulaire soumis!');
    });
});

