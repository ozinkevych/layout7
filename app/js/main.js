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
const invalidFeedback = document.querySelector('.invalid-feedback');

form.addEventListener('submit', function(event) {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        invalidFeedback.style.display = 'block';
    } else {
        invalidFeedback.style.display = 'none';
    }

    form.classList.add('was-validated');
});
// like
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.img-like').forEach(heartIcon => {
        heartIcon.addEventListener('click', () => {
            const likeCountElement = heartIcon.parentNode.querySelector('.like-count');
            const likeCount = parseInt(heartIcon.dataset.likeCount, 10) || 0;
            const isLiked = heartIcon.classList.toggle('fa-solid');
            heartIcon.dataset.likeCount = isLiked ? likeCount + 1 : likeCount - 1;
            likeCountElement.textContent = heartIcon.dataset.likeCount;
        });
    });
});

