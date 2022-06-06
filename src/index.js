import './pages/index.css';
import {
    handleNewCardSubmit,
    renderInitialCards,
    confirmRemove
} from "../src/components/card.js";

import {
    getProfileInfo,
    getCards,
    editProfile,
    updateAvatar
} from './components/api.js';

import {
    openPopup,
    closePopup,
    popupView,
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

/*получаем профиль и массив карточек по API*/
Promise.all([getProfileInfo(), getCards()])
    .then(([profile, card]) => {
        profileId = profile._id;
        profileName.textContent = profile.name;
        profileAbout.textContent = profile.about;
        profileAvatar.src = profile.avatar;
        renderInitialCards(card);
    })
    .catch((err) => {
        console.log(err);
    })

/*Изменение профиля*/
function handleProfileEditSubmit(event) {
    event.preventDefault();
    formEditProfile.elements.submit.textContent = 'Сохранение...';
    editProfile(formEditProfile.elements.name.value, formEditProfile.elements.about.value)
        .then(() => {
            profileName.textContent = formEditProfile.elements.name.value;
            profileAbout.textContent = formEditProfile.elements.about.value;
            closePopup(popupProfile);
            addProfile.reset();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            formEditProfile.elements.submit.textContent = 'Сохранить';
        })
}

function handleAvatarEditSubmit(event) {
    event.preventDefault();
    formAvatar.elements.submit.textContent = 'Сохранение...';
    updateAvatar(formAvatar.elements.link.value)
        .then(() => {
            profileAvatar.src = formAvatar.elements.link.value;
            closePopup(popupAvatar);
            formAvatar.reset();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            formAvatar.elements.submit.textContent = 'Сохранить';
        })
}

formAvatar.addEventListener('submit', handleAvatarEditSubmit);
addProfile.addEventListener('submit', handleProfileEditSubmit);
formAddCard.addEventListener('submit', handleNewCardSubmit);


profileEditBtn.addEventListener('click', function () {
    formEditProfile.elements.name.value = profileName.textContent;
    formEditProfile.elements.about.value = profileAbout.textContent;
    openPopup(popupProfile);
})
btnAddNewCard.addEventListener('click', () => openPopup(popupAddCard));

profile.addEventListener('click', () => openPopup(popupAvatar));
popupDeleteBtn.addEventListener("click", confirmRemove);