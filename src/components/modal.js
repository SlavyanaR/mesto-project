const popupView = document.querySelector('.popup__views'); /*+*/
const popuViewImage = popupView.querySelector('.popup__image'); /*+*/
const popupViewDescription = popupView.querySelector('.popup__description'); /*+*/

//const popupViewClose = popupView.querySelector('.popup__button_type_close');

const popupAddCard = document.querySelector('.popup_open-card');

//const popupAddCardClose = popupAddCard.querySelector('.popup__button_type_close');
//const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
//const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');

const popupProfile = document.querySelector('.popup_open-profile'); /*+*/

//const popupNameInput = popupProfile.querySelector('.popup__input_type_name');
//const popupAboutInput = popupProfile.querySelector('.popup__input_type_about');
//const popupBtnClose = popupProfile.querySelector('.popup__button_type_close');

//const popups = document.querySelectorAll('.popup')

/*1.1 открытие popup*/
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

/*1.2 закрытие popup*/
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
};

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

//popupBtnClose.addEventListener('click', () => closePopup(popupProfile));
//popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard));
//popupViewClose.addEventListener('click', () => closePopup(popupView));

export {
  openPopup,
  closePopup,
  popupView,
  popuViewImage,
  popupViewDescription,
  popupAddCard,
  popupProfile
}
