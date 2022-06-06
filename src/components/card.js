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

const elementList  = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card-template').content;
let cardElementDelete;
let cardElementId;

const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const elements = document.querySelector('.elements');


/*создаем шаблон карточки*/
function createCard(cardImage, cardName, cardId, cardOwner, cardLikes) {
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
  
  function likeCard(cardElement, cardLikeCount, cardId) {
    cardElement.querySelector('.element__button').addEventListener('click', function (event) {
      if (!event.target.classList.contains('element__button_active')) {
        addLikeCard(cardId)
          .then((card) => {
            event.target.classList.toggle('element__button_active');
            cardLikeCount.textContent = card.likes.length;
          })
          .catch((err) => {
            console.log(err);
          })
  
      } else {
        removeLikeCard(cardId)
          .then((card) => {
            event.target.classList.toggle('element__button_active');
            cardLikeCount.textContent = card.likes.length;
          })
          .catch((err) => {
            console.log(err);
          })
      }
    })
  }

function btnDeleteCard(cardElement) {
    const btnDelete = document.createElement('button');
    btnDelete.classList.add('element__delete');
    btnDelete.setAttribute("type", "button");
    cardElement.prepend(btnDelete);
    return btnDeleteCard;
}

/*перебираем массив с карточками*/
function renderInitialCards(initialCards) {
    initialCards.forEach((card) => {
        elementList.append(createCard(card.link, card.name, card._id, card.owner._id, card.likes));
    })
  }

  /*добавление карточки из формы*/
  function handleNewCardSubmit(event) {
    event.preventDefault();
    formAddCard.elements.submit.textContent = 'Сохранение...';
    addCard(formAddCard.elements.name.value, formAddCard.elements.image.value)
      .then((card) => {
        console.log(card);
        elementList.prepend(createCard(formAddCard.elements.image.value, formAddCard.elements.name.value, card._id, card.owner._id, card.likes));
        closePopup(popupAddCard);
        formAddCard.reset();
        formAddCard.elements.submit.classList.add('popup__button_type_disabled');
        formAddCard.elements.submit.disabled = true;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        formAddCard.elements.submit.textContent = 'Создать';
      })
    }

export { handleNewCardSubmit, renderInitialCards }
