import { enableValidation } from '../components/validate.js';
import { popupProfile } from '../components/modal.js';

const profileEditBtn = document.querySelector('.profile__edit-button');
const profileChange = document.querySelector('.profile__change');
const profile = document.querySelector('.profile');
const profileAvatar = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const addProfile = popupProfile.querySelector('.popup__form');
const btnAddNewCard = document.querySelector('.profile__add-button');

const formEditProfile = document.forms.edit;
const formAvatar = document.forms.avatar;
const formAddCard = document.forms.add;

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button_type_submit',
    inactiveButtonClass: 'popup__button_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});

const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-10',
    headers: {
        authorization: '3d8bf53a-c1bd-4d13-81e8-2d8a8c9c3ed1',
        "Content-Type": "application/json"
    }
}

export {
    profileEditBtn,
    profile,
    profileAvatar,
    profileName,
    profileAbout,
    addProfile,
    btnAddNewCard,
    formEditProfile,
    formAvatar,
    formAddCard,
    apiConfig,
    profileChange
}
