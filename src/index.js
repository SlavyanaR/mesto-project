import { createCard } from "../src/components/card.js";

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

}

/*Коммит профиля*/
function profileEditSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;

    closePopup(popupProfile);

    addProfile.reset();
}

popupProfile.addEventListener('submit', profileEditSubmit);
addCard.addEventListener('submit', newCardSubmit);

addInitialCards(initialCards);
debugger;