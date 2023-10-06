const fakeLi = Array.from(document.querySelectorAll('.footer__block-info .block__li'));

fakeLi.forEach((li) => li.addEventListener('click', () => alert('these links are not working')));