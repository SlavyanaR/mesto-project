import { formAddCard } from '../components/utils.js';

import {
    popupView,
    popuViewImage,
    popupViewDescription,
    popupAddCard,
    openPopup,
    closePopup,
    popupDelete
} from '../components/modal.js';

import { addCard, removeCard, addLikeCard, removeLikeCard } from '../components/api.js';
import { profileId } from '../index.js';


const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const elements = document.querySelector('.elements');

const cardTemplate = document.querySelector('#card-template').content;
const elementList = document.querySelector('.elements');
let cardElementDelete;
let cardElementId;

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

/*создаем шаблон карточки*/
function createCard(cardName, cardImage, cardId, cardOwner, cardLikes) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementImage = cardElement.querySelector('.element__image');
    const cardLike = cardElement.querySelector('.element__button');
    const cardLikeCount = cardElement.querySelector('.element__count');

    cardElementImage.src = cardImage;
    cardElementImage.alt = cardName;
    cardElement.querySelector('.element__title').textContent = cardName;

    cardLikeCount.textContent = cardLikes.length;

    /*лайк карточки*/
    if (cardLikes) {
        likeCard(cardElement, cardLikeCount, cardId);
        cardLikes.forEach((card) => {
            if (card._id === profileId) {
                cardLike.classList.add('element__button_active');
            }
        })
    } else {
        cardLikeCount.textContent = 0;
    }

    /*удаление карточки*/


    if (cardOwner === profileId) {
        btnDeleteCard(cardElement);

        const cardElementDelete = cardElement.querySelector(".element__delete");

        cardElementDelete.addEventListener("click", (evt) => {
            cardElementDelete = evt.target.closest(".element");
            cardElementId = cardId;
            openPopup(popupDelete);
        });
    }

    /*открытие попапа с картинкой*/
    cardElementImage.addEventListener('click', function () {
        popuViewImage.src = cardImage;
        popuViewImage.alt = cardName;
        popupViewDescription.textContent = cardName;
        openPopup(popupView);
    })
    return cardElement;
}

/* подтверждение удаление карточки */
export function confirmRemove(card) {
    removeCard(cardElementId)
      .then(() => {
        cardElementDelete.remove();
        closePopup(popupDelete);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  



function btnDeleteCard(cardElement) {
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('element__delete');
    btnDelete.setAttribute("type", "button");
    cardElement.prepend(btnDelete);
    return btnDeleteCard;
}

export { createCard, initialCards }