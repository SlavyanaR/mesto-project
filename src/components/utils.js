import { enableValidation } from '../components/validate.js';
import { popupProfile } from '../components/modal.js';

const profileEditBtn = document.querySelector('.profile__edit-button');
const profile = document.querySelector('.profile');/*???*/
const profileAvatar = document.querySelector('.profile__avatar');/*???*/
const profileName = document.querySelector('.profile__name'); 
const profileAbout = document.querySelector('.profile__about'); 
const addProfile  = popupProfile.querySelector('.popup__form');
const btnAddNewCard = document.querySelector('.profile__add-button');

const formEditProfile  = document.forms.edit;
const formAvatar  = document.forms.avatar;
const formAddCard  = document.forms.add;

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button_type_submit',
    inactiveButtonClass: 'popup__button_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
});

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
   formAddCard
}
