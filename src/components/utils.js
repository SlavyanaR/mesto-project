import { enableValidation } from '../components/validate.js';
import { popupProfile } from '../components/modal.js';

const profileEditButton = document.querySelector('.profile__edit-button');
const profile = document.querySelector('.profile');
const profileAvatar = document.querySelector('.profile__avatar');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const addCardForm = popupProfile.querySelector('.popup__form');
const profileAddButton = document.querySelector('.profile__add-button');

const formEditProfile = document.forms.edit;
const formAvatar = document.forms.avatar;
const formAddCard = document.forms.add;

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button_type_submit',
    inactiveButtonClass: 'form__submit_disabled',
    inputErrorClass: 'form__input_type_error',
    errorClass: 'form__input-error_active'
});

export {
    profileEditButton,
    profile,
    profileAvatar,
    profileName,
    profileAbout,
    addCardForm,
    profileAddButton,
    formEditProfile,
    formAvatar,
    formAddCard
}
