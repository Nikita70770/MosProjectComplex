const popupMessage = `
        <img class="popup-msg-cross" src="img/cross.svg" alt="" />
        <div class="popup-message-text">
            <h2>Письмо успешно создано!</h2>
            <img src="img/check-mark.svg" alt="" />
        </div>`;

const panelHeader = document.querySelector('.right-panel-header');
const msgPopup = document.createElement('div');

export const showPopupMsg = () => {
    msgPopup.classList.add('popup-message');
    msgPopup.innerHTML = popupMessage;
    panelHeader.appendChild(msgPopup);

    const popupMsgCross = document.querySelector('.popup-msg-cross');
    popupMsgCross.addEventListener('click', hidePopupMsg);

    document.addEventListener('click', e => {
        if (!msgPopup.contains(e.target) && !e.target.classList.contains('btn-add') && panelHeader.contains(msgPopup)) {
            hidePopupMsg();
        }
    });
};

const hidePopupMsg = () => {
    panelHeader.removeChild(msgPopup);
};
