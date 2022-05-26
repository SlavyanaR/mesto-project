const popupView = document.querySelector('.popup__views');
const popuViewImage = popupView.querySelector('.popup__image');
const popupViewDescription = popupView.querySelector('.popup__description');
const popupAddCard = document.querySelector('.popup_open-card');
const popupProfile = document.querySelector('.popup_open-profile');

/*1.1 открытие popup*/
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

/*1.2 закрытие popup*/
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

/* Закрытие попап по ESC */
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

/*закрытие по кнопке "крестик" и оверлей*/
Array.from(document.querySelectorAll('.popup')).forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__button_type_close')) {
      closePopup(popup)
    }
  })
})

export {
  openPopup,
  closePopup,
  popupView,
  popuViewImage,
  popupViewDescription,
  popupAddCard,
  popupProfile
}
