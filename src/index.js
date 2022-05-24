/*import { newCardSubmit, addInitialCards } from "../src/components/card.js";

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
  profileEditButton,
  profile,
  profileAvatar,
  profileName,
  profileAbout,
  addCard,
  profileAddButton,
  formEditProfile,
  formAvatar,
  formAddCard
} from './components/utils.js';*/


const profileEditBtn = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_open-profile');
const popupBtnClose = document.querySelector('.popup__button_type_close');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const addProfile = document.querySelector('.popup__form');
const btnAddNewCard = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_open-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__button_type_close');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const addCard = popupAddCard.querySelector('.popup__form');
const profileAbout = document.querySelector('.profile__about');
const elements = document.querySelector('.elements');
const popupView = document.querySelector('.popup__views');
const popuViewImage = popupView.querySelector('.popup__image');
const popupViewDescription = popupView.querySelector('.popup__description');
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

/*1.1 открытие popup*/
function openPopup(popup) {
    popup.classList.add('popup_opened');
}

/*Изменение профиля*/
profileEditBtn.addEventListener('click', function () {
    popupNameInput.value = popupNameInput.textContent;
    popupAboutInput.value = popupAboutInput.textContent;
    openPopup(popupProfile);
})
btnAddNewCard.addEventListener('click', () => openPopup(popupAddCard));


/*1.2 закрытие popup*/
function closePopup(popup) {
    popup.classList.remove('popup_opened');
};

popupBtnClose.addEventListener('click', () => closePopup(popupProfile));
popupAddCardClose.addEventListener('click', () => closePopup(popupAddCard));
popupViewClose.addEventListener('click', () => closePopup(popupView));


/* Удаление popup по Escape */
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup(popupProfile);
    };
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup(popupAddCard);
    };
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closePopup(popupView);
    };
});

/* Удаление popup кликом на оверлей - пока не работает *
document.addEventListener('click',function (event) {
        if (event.target.classList.contains('.popup__container') && event.target.classList.contains('.popup__button_type_close')) {
        popup.classList.remove('popup_opened');
    };
});*/


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

/*добавление проверки на валидность*/
function setSubmitButtonState(isFormValid) {
    if (isFormValid) {
        addButton1.removeAttribute('disabled');
        addButton1.classList.remove('popup__button_type_disabled');
    } else {
        addButton1.setAttribute('disabled', true);
        addButton1.classList.add('popup__button_type_disabled');
    }
}

popupProfile.addEventListener('input', function (evt) {
    const isValid = popupNameInput.value.length > 0 && popupAboutInput.value.length > 0;
    setSubmitButtonState(isValid);
});

popupAddCard.addEventListener('input', function (evt) {
    const isValid = popupAddCardName.value.length > 0 && popupAddCardLink.value.length > 0;
    setSubmitButtonState(isValid);
});

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