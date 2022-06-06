import './pages/index.css';
import {
    createCard,
    initialCards
} from "../src/components/card.js";

import { getProfileInfo, getCards, editProfile, updateAvatar } from './components/api.js';

import {
    openPopup,
    closePopup,
    popupView,
    popuViewImage,
    popupViewDescription,
    popupAddCard,
    popupProfile,
    popupAvatar,
    popupDeleteBtn
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

export let profileId = "";

const popupBtnClose = document.querySelector('.popup__button_type_close');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const popupAddCardClose = popupAddCard.querySelector('.popup__button_type_close');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const addCard = popupAddCard.querySelector('.popup__form');
const elements = document.querySelector('.elements');
const popupViewClose = popupView.querySelector('.popup__button_type_close');
const cardBtnSubmit = popupAddCard.querySelector('.popup__button_type_submit');
const profileBtnSubmit = popupProfile.querySelector('.popup__button_type_submit')


/*Изменение профиля*/
profileEditBtn.addEventListener('click', function () {
    popupNameInput.value = profileName.textContent;
    popupAboutInput.value = profileAbout.textContent;
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
function submitNewCard(evt) {
    evt.preventDefault();
    elements.prepend(createCard(popupAddCardName.value, popupAddCardLink.value));
    closePopup(popupAddCard);
    addCard.reset();
    cardBtnSubmit.classList.add('popup__button_type_disabled');
    cardBtnSubmit.disabled = true;
}

/*Коммит профиля*/
function submitProfileEdit(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;
    closePopup(popupProfile);

    profileBtnSubmit.classList.add('popup__button_type_disabled');
    profileBtnSubmit.disabled = true;
}

popupProfile.addEventListener('submit', submitProfileEdit);
addCard.addEventListener('submit', submitNewCard);

addInitialCards(initialCards);