import { formAddCard } from '../components/utils.js';

import {
    openPopup,
    closePopup,
    popupView,
    popuViewImage,
    popupViewDescription,
    popupAddCard
} from '../components/modal.js';



//const elementList = document.querySelector('.elements');
const addCardForm = popupAddCard.querySelector('.popup__form');
const buttonForm = addCardForm.querySelector('.popup__button_type_submit');
const cardTemplate = document.querySelector('#card-template').content;

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
function createCard(cardName, cardImage) {
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementImage = cardElement.querySelector('.element__image');

    cardElementImage.src = cardImage;
    cardElementImage.alt = cardName;
    cardElement.querySelector('.element__title').textContent = cardName;

    /*лайк карточки*/

    cardElement.addEventListener('click', function (event) {
        if (event.target.classList.contains('element__button')) {
            event.target.classList.toggle('element__button_active');
        }
    })
    /*удаление карточки*/
    cardElement.querySelector('.element__delete').addEventListener('click', function (event) {
        event.target.closest('.element').remove();
    })

    /*открытие попапа с картинкой*/
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

/*добавление карточки*/
function newCardSubmit(evt) {
    evt.preventDefault();
    formAddCard.elements.submit.textContent = 'Сохранение...';
    addCard(formAddCard.elements.name.value, formAddCard.elements.image.value)
      .then((card) => {
        console.log(card);
        elementList.prepend(createCard(formAddCard.elements.image.value, formAddCard.elements.name.value, card._id, card.owner._id, card.likes));
        closePopup(popupAddCard);
        formAddCard.reset();
        formAddCard.elements.submit.classList.add('form__submit_disabled');
        formAddCard.elements.submit.disabled = true;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        formAddCard.elements.submit.textContent = 'Создать';
      })
  
  }
  

export { newCardSubmit, addInitialCards }