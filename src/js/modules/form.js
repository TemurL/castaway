const btn = document.querySelector('.sub-form__button');
const subFormAddContent = document.querySelector('.sub-form__add-content');
const spanUserName = document.querySelector('.user-name');
const spanUserEmail = document.querySelector('.user-email');


const form = () => {
    spanUserName.textContent = document.querySelector('.sub-form__input[type="text"]').value;
    spanUserEmail.textContent = document.querySelector('.sub-form__input[type="email"]').value;
    subFormAddContent.classList.add('sub-form__add-content_active')
}

btn.addEventListener('click', form);