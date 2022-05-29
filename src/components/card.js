import { formAddCard } from '../components/utils.js';

import {
    popupView,
    popuViewImage,
    popupViewDescription,
    popupAddCard,
    openPopup,
    closePopup,
} from '../components/modal.js';



const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const elements = document.querySelector('.elements');


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
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementImage = cardElement.querySelector('.element__image');

    cardElementImage.src = cardImage;
    cardElementImage.alt = cardName;
    cardElement.querySelector('.element__title').textContent = cardName;

    /*лайк карточки*/

    cardElement.querySelector('.element__button').addEventListener('click', function(event) {
        event.target.classList.toggle('element__button_active');
    })


    /*удаление карточки*/
    cardElement.querySelector('.element__delete').addEventListener('click', function (event) {
        event.target.closest('.element').remove();
    })

    /*открытие попапа с картинкой*/
    cardElementImage.addEventListener('click', function () {
        popuViewImage.src = cardImage;
        popuViewImage.alt = cardName;
        popupViewDescription.textContent = cardName;
        openPopup(popupView);
    })

    return cardElement;
}

export { createCard, initialCards }