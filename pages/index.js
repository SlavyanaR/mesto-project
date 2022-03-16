const profileEditBtn = document.querySelector('.profile__edit-button');
const popupOpen = document.querySelector('.popup_opened');
const popupBtnClose = document.querySelector('.popup__button_type_close');

/*открытие попап*/
function popupOpened(popup) {
    popup.classList.add('popup_opened');
}

/*закрытие попап*/ 
function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

profileEditBtn.addEventListener('click', function(){popupOpened(popupOpen)});
popupBtnClose.addEventListener('click', function(){popupClose(popupOpen)});
/*https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener*/
/*https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener*/