import { showPopupMsg } from './popup-message.js';

const form = `
        <form class="form-container">
            <img class="popup-form-cross" src="img/cross.svg" alt="" />
            <input class="inpt inpt-email" type="text" placeholder="Введите название письма" />
            <input class="inpt inpt-name-pattern" type="text" list="patterns-list" placeholder="Название шаблона" />
            <datalist id="patterns-list">
                <option value="Pattern1"></option>
                <option value="Pattern2"></option>
                <option value="Pattern3"></option>
            </datalist>
            <input class="inpt inpt-contact-data" type="text" placeholder="Введите контактные данные" />
            <button class="btn-add" type="button">
                Добавить
            </button>
        </form>`;

const panelHeader = document.querySelector('.right-panel-header');

const btnCreateEmail = document.querySelector('.btn-panel.create-email');

const formPopup = document.createElement('div');

document.addEventListener('click', e => {
    if (e.target.classList.contains('form-popup')) {
        hidePopupForm();
    }
});

btnCreateEmail.addEventListener('click', () => {
    showPopupForm();
});

const showPopupForm = () => {
    formPopup.classList.add('form-popup');
    formPopup.innerHTML = form;
    panelHeader.appendChild(formPopup);

    const popupCross = document.querySelector('.popup-form-cross');
    popupCross.addEventListener('click', hidePopupForm);

    const btnAdd = document.querySelector('.btn-add');
    btnAdd.addEventListener('click', () => {
        hidePopupForm();
        showPopupMsg();
    });
};

const hidePopupForm = () => {
    panelHeader.removeChild(formPopup);
};
