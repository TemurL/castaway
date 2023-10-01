const html = document.getElementsByTagName('html')[0];

const scrollAnim = () => {
    let value = scrollY / 2;
    html.style.backgroundPositionY = `${value}px`;
}

window.addEventListener('scroll', scrollAnim)
