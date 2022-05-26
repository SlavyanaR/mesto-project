import { newCardSubmit, addInitialCards, profileEditSubmit } from "../src/components/card.js";

import {
    openPopup,
    //closePopup,
    popupView,
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

//const popupBtnClose = document.querySelector('.popup__button_type_close');
//const popupNameInput = document.querySelector('.popup__input_type_name');
//const popupAboutInput = document.querySelector('.popup__input_type_about');
//const addProfile = document.querySelector('.popup__form');
const btnAddNewCard = document.querySelector('.profile__add-button');
//const popupAddCard = document.querySelector('.popup_open-card');
//const popupAddCardClose = popupAddCard.querySelector('.popup__button_type_close');
//const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
//const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
//const addCard = popupAddCard.querySelector('.popup__form');
//const profileAbout = document.querySelector('.profile__about');
//const elements = document.querySelector('.elements');
//const popupView = document.querySelector('.popup__views');
//const popuViewImage = popupView.querySelector('.popup__image');
//const popupViewDescription = popupView.querySelector('.popup__description');
const popupViewClose = popupView.querySelector('.popup__button_type_close');


/*Изменение профиля*/
profileEditBtn.addEventListener('click', function () {
    popupNameInput.value = popupNameInput.textContent;
    popupAboutInput.value = popupAboutInput.textContent;
    openPopup(popupProfile);
})
btnAddNewCard.addEventListener('click', () => openPopup(popupAddCard));



/*Открытие popup по клику на "редактировать профиль" и "добавить карточку"*/
profileEditBtn.addEventListener('click', function () {
    popupEditProfile.elements.name.value = profileName.textContent;
    popupEditProfile.elements.about.value = profileAbout.textContent;
    openPopup(popupProfile);
})
btnAddNewCard.addEventListener('click', () => openPopup(popupAddCard));

popupProfile.addEventListener('submit', profileEditSubmit);
addCard.addEventListener('submit', newCardSubmit);
addInitialCards(initialCards);

