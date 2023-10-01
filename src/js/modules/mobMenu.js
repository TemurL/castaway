const mobMenuBtn = document.getElementsByClassName('mob-menu__btn')[0];
const mobMenuItems = Array.from(document.getElementsByClassName('mob-menu__li'));

const mobMenuAct = () => {
    const body = document.getElementsByClassName('body')[0];
    const mobMenuBody = document.getElementsByClassName('mob-menu__body')[0];
    const modifMobMenuBtn = 'mob-menu__btn_active';
    const modifMobMenuBody = 'mob-menu__body_active';
    const modifBody = 'body_scroll-lock';

    mobMenuBtn.classList.toggle(modifMobMenuBtn);
    mobMenuBody.classList.toggle(modifMobMenuBody);
    body.classList.toggle(modifBody);
}

mobMenuBtn.addEventListener('click', mobMenuAct);
mobMenuItems.forEach((li) => li.addEventListener('click', mobMenuAct))