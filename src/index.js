

import {
    openPopup,
    closePopup,
    popupView,
    popuViewImage,
    popupViewDescription,
    popupAddCard,
    popupProfile
} from './components/modal.js';

import {
    profileEditBtn,
    profile,
    profileAvatar,
    profileName,
    profileAbout,
    addProfile,
    btnAddNewCard,
    formEditProfile,
    formAvatar,
   formAddCard
} from './components/utils.js';

const popupBtnClose = document.querySelector('.popup__button_type_close');
const addButton1 = document.querySelector('.popup__btn_action_add');/*добавлен класс для кнопки submit*/
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const popupAddCardClose = popupAddCard.querySelector('.popup__button_type_close');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const addCard = popupAddCard.querySelector('.popup__form');
const addButton2 = popupAddCard.querySelector('.popup__btn_action_add');/*добавлен класс для кнопки submit*/
const elements = document.querySelector('.elements');
const popupViewClose = popupView.querySelector('.popup__button_type_close');

const initialCards = [{
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


/*Изменение профиля*/
profileEditBtn.addEventListener('click', function () {
    popupNameInput.value = popupNameInput.textContent;
    popupAboutInput.value = popupAboutInput.textContent;
    openPopup(popupProfile);
})
btnAddNewCard.addEventListener('click', () => openPopup(popupAddCard));


/*создаем шаблон карточки*/
function createCard(cardName, cardImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementImage = cardElement.querySelector('.element__image');

    cardElementImage.src = cardImage;
    cardElementImage.alt = cardName;
    cardElement.querySelector('.element__title').textContent = cardName;

    /*5. лайк карточки*/

    /*cardElement.querySelector('.element__button').addEventListener('click', function(event) {
        event.target.classList.toggle('element__button_active');
    })*/

    cardElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('element__button')) {
            event.target.classList.toggle('element__button_active');
        }
    })

    /*6. удаление карточки*/
    cardElement.querySelector('.element__delete').addEventListener('click', function (event) {
        event.target.closest('.element').remove();
    })

    /*7. открытие попапа с картинкой*/
    cardElement.querySelector('.element__image').addEventListener('click', function () {
        popuViewImage.src = cardImage;
        popuViewImage.alt = cardName;
        popupViewDescription.textContent = cardName;
        openPopup(popupView);
    })

    return cardElement;
}

/*создаем 6 карточек*/
function addInitialCards(initialCards) {
    initialCards.forEach((item) => {
        elements.append(createCard(item.name, item.link));
    })
}


/*добавление карточки*/
function newCardSubmit(evt) {
    evt.preventDefault();
    elements.prepend(createCard(popupAddCardName.value, popupAddCardLink.value));
    closePopup(popupAddCard);
    addCard.reset();
    setSubmitButtonState(false); /*добавление проверки на валидность*/
}

/*Коммит профиля*/
function profileEditSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;

    closePopup(popupProfile);

    addProfile.reset();
    setSubmitButtonState(false); /*добавление проверки на валидность*/
}

popupProfile.addEventListener('submit', profileEditSubmit);
addCard.addEventListener('submit', newCardSubmit);
addInitialCards(initialCards);