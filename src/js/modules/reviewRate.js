const reviewsArr = Array.from(document.getElementsByClassName('review'));

reviewsArr.forEach((review) => {
    let rate = Number(review.getAttribute('rate'));
    if (rate <= 5) {
        let stars = Array.from(review.children[0].children);
        for (let i = 0; i < rate; i++) {
        stars[i].style.display = 'inline';
        }
    }
})
