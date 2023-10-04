const mobMenuBtn = document.getElementsByClassName('mob-menu__btn')[0];
const mobMenuItems = Array.from(document.getElementsByClassName('mob-menu__li'));

const mobMenuAct = () => {
    const body = document.getElementsByClassName('body')[0];
    const html = document.getElementsByTagName('html')[0];
    const wrapper = document.getElementsByClassName('wrapper')[0];
    const mobMenuBody = document.getElementsByClassName('mob-menu__body')[0];
    const modifMobMenuBtn = 'mob-menu__btn_active';
    const modifMobMenuBody = 'mob-menu__body_active';
    const modifScrollLock = 'scroll-lock';

    mobMenuBtn.classList.toggle(modifMobMenuBtn);
    mobMenuBody.classList.toggle(modifMobMenuBody);
    body.classList.toggle(modifScrollLock);
    html.classList.toggle(modifScrollLock);
    wrapper.classList.toggle(modifScrollLock);

    // let scrollValue = scrollY;
    // const header = document.getElementsByClassName('header')[0];
    // if (!body.classList.contains(modifScrollLock)) {
    //     header.style.top = `0px`;
    // } else {
    //     header.style.top = `${scrollValue}px`;
    // }
}

mobMenuBtn.addEventListener('click', mobMenuAct);
mobMenuItems.forEach((li) => li.addEventListener('click', mobMenuAct))