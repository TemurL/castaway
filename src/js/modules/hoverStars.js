const stars = Array.from(document.querySelectorAll('.review__stars'));
const reviews = Array.from(document.querySelectorAll('.review'));

reviews.forEach((review) => {
    review.addEventListener('mouseover', () => {
        review.children[0].classList.add('review__stars_hover');
    });
    review.addEventListener('mouseout', () => {
        review.children[0].classList.remove('review__stars_hover');
    })
})

