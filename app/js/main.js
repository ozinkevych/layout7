$(document).ready(function() {
    $('.banner-slider').slick({
        dots: true,
        fade: true
    });
});
$(document).ready(function() {
    $('.share-content-slider').slick({
        dots: true,
        arrows: false,
        fade: true
    });
});
$(document).ready(function() {
    $('.features-slider').slick({
        dots: true,
        arrows: false,
        fade: true
    });
});
const navbarToggler = document.querySelector('.navbar-toggler');

const navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');

navbarToggler.addEventListener('click', function() {
    const isCollapsed = this.getAttribute('aria-expanded') === 'false';

    navbarTogglerIcon.classList.toggle('open', isCollapsed);
});