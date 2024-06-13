//banner slider
$(document).ready(function () {
    $('.banner-slider').slick({
        dots: true,
        arrows: false,
    });
});
//share instantly slider
$(document).ready(function () {
    $('.share-content-slider').slick({
        dots: true,
        arrows: false,
    });
});
//features slider
$(document).ready(function () {
    $('.features-slider').slick({
        dots: true,
        arrows: false,
    });
});
//burger menu
const navbarToggler = document.querySelector('.navbar-toggler');

const navbarTogglerIcon = navbarToggler.querySelector('.navbar-toggler-icon');

navbarToggler.addEventListener('click', function () {
    const isCollapsed = this.getAttribute('aria-expanded') === 'false';

    navbarTogglerIcon.classList.toggle('open', isCollapsed);
});
//form validation
const form = document.getElementById('subscribeForm');

form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated');
});
// like
document.addEventListener('DOMContentLoaded', function () {
    const heartIcons = document.querySelectorAll('.img-like');

    heartIcons.forEach(function (heartIcon) {
        heartIcon.addEventListener('click', function handleClick() {
            const likeCount = parseInt(this.dataset.likeCount, 10);
            const likeCountElement = this.parentNode.querySelector('.like-count');

            const newLikeCount = likeCount + 1;
            likeCountElement.textContent = newLikeCount;
            this.dataset.likeCount = newLikeCount;

            this.classList.add('fa-solid');
            this.removeEventListener('click', handleClick);
        });
    });
});

