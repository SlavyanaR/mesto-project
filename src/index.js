import'../pages/index.css';
import { newCardSubmit, addInitialCards } from "../src/components/card.js";

import {  openPopup,
    closePopup,
    popupView,
    popuViewImage,
    popupViewDescription,
    popupAddCard,
    popupProfile
} from './components/modal.js';

import {
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
} from './components/utils.js';

export let profileId = "";

/* Функция формы для изменения профиля*/
function handleProfileEditSubmit(event) {
    event.preventDefault();
    formEditProfile.elements.submit.textContent = 'Сохранение...';
    editProfile(formEditProfile.elements.name.value, formEditProfile.elements.about.value)
      .then(() => {
        profileUserName.textContent = formEditProfile.elements.name.value;
        profileUserDescription.textContent = formEditProfile.elements.about.value;
        closePopup(popupProfile);
        addCardForm.reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        formEditProfile.elements.submit.textContent = 'Сохранить';
      })
  }

  formAvatar.addEventListener('submit', handleAvatarEditSubmit);
  addCardForm.addEventListener('submit', handleProfileEditSubmit);
  formAddCard.addEventListener('submit', handleNewCardSubmit);
  


/* Открываем поп апы по клику на редактировать профиль и добавить карточку */
profileEditButton.addEventListener('click', function () {
    formEditProfile.elements.name.value = profileUserName.textContent;
    formEditProfile.elements.about.value = profileUserDescription.textContent;
    openPopup(popupProfile);
  })

  profileAddButton.addEventListener('click', () => openPopup(popupAddCard));

  /* Открытие поп ап редактирования аватарки */
  profile.addEventListener('click', () => openPopup(popupAvatar));