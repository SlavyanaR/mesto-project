const profileEditBtn = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_open-profile');
const popupBtnClose = document.querySelector('.popup__button_type_close');
const popupForm = document.querySelector('.popup__form');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const btnAddNewCard = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_open-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__button_type_close');
const popupAddCardName = popupAddCard.querySelector('popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('popup__input_type_link');
const addCard = popupAddCard.querySelector('.popup__form');
const deleteButton = document.querySelector('.element__delete');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

/*закрытие popup*/

/*1.1 открытие popup*/
function popupOpened(popup) {
    popup.classList.add('popup_opened');
}
profileEditBtn.addEventListener('click', function () {
    popupNameInput.value = popupNameInput.textContent;
    popupAboutInput.value = popupAboutInput.textContent;
    popupOpened(popupProfile);
})
btnAddNewCard.addEventListener('click', () => popupOpened(popupAddCard));


/*1.2 закрытие popup*/
function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

popupBtnClose.addEventListener('click', () => popupClose(popupProfile));
popupAddCardClose.addEventListener('click', () => popupClose(popupAddCard));

/*1.3 редактирование имени и информации о себе*
function popupSubmitHandler(event){
    evt.preventDefault(); 
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;
    popupClose(popup);
    popupForm.reset();
}
popupForm.addEventListener('submit', popupSubmitHandler);*/


/*создание карточки*
function createCard(cardImage, cardName) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementImage = card.querySelector('.element__image');

    cardElementImage.src = cardImage;
    cardElementImage.alt = cardName;
    cardElement.querySelector('.element__title').textContent = cardName;
}*/

/*добавление карточки*
function handleNewCardSubmit(event) {
    event.preventDefault();
  
    elementList.prepend(createCard(popupAddCardLink.value, popupAddCardName.value));
  
    popupClose(popupAddCard);
    addCardForm.reset();
  }
  
  addCardForm.addEventListener('submit', handleNewCardSubmit);
  
  renderInitialCards(initialCards);*/


/*6. удаление карточки*/
deleteButton.addEventListener('click', function () {
    const listItem = deleteButton.closest('.element');
    listItem.remove();
})

/*5. лайк карточки*/
document.querySelector('.element__button').addEventListener('click', function (event) {
    event.target.classList.toggle('element__button_active');
})