const profileEditBtn = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_open-profile');
const popupBtnClose = document.querySelector('.popup__button_type_close');
const popupNameInput = document.querySelector('.popup__input_type_name');
const popupAboutInput = document.querySelector('.popup__input_type_about');
const btnAddNewCard = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_open-card');
const popupAddCardClose = popupAddCard.querySelector('.popup__button_type_close');
const popupAddCardName = popupAddCard.querySelector('.popup__input_type_title');
const popupAddCardLink = popupAddCard.querySelector('.popup__input_type_link');
const addCard = popupAddCard.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
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
function popupOpened(popup) {
    popup.classList.add('popup_opened');
}
profileEditBtn.addEventListener('click', function() {
    popupNameInput.value = popupNameInput.textContent;
    popupAboutInput.value = popupAboutInput.textContent;
    popupOpened(popupProfile);
})
btnAddNewCard.addEventListener('click', () => popupOpened(popupAddCard));


/*1.2 закрытие popup*/
function popupClose(popup) {
    popup.classList.remove('popup_opened');
}

popupBtnClose.addEventListener('click', () => popupClose(popupProfile));
popupAddCardClose.addEventListener('click', () => popupClose(popupAddCard));
popupViewClose.addEventListener('click', () => popupClose(popupView));

/*создаем шаблон карточки*/
function createCard(cardName, cardImage) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardElementImage = cardElement.querySelector('.element__image');

    cardElementImage.src = cardImage;
    cardElementImage.alt = cardName;
    cardElement.querySelector('.element__title').textContent = cardName;

    /*5. лайк карточки*/
    cardElement.querySelector('.element__button').addEventListener('click', function(event) {
        event.target.classList.toggle('element__button_active');
    })

    /*6. удаление карточки*/
    cardElement.querySelector('.element__delete').addEventListener('click', function(event) {
        event.target.closest('.element').remove();
    })

    /*7. открытие попапа с картинкой*/
    cardElement.querySelector('.element__image').addEventListener('click', function() {
        popuViewImage.src = cardImage;
        popupViewDescription.textContent = cardName;
        popupOpened(popupView);
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
function NewCardSubmit(evt) {
    evt.preventDefault();
    elements.prepend(createCard(popupAddCardName.value, popupAddCardLink.value));
    popupClose(popupAddCard);
    addCard.reset();
}

/*Изменение профиля*/
profileEditBtn.addEventListener('click', function() {

    popupNameInput.value = profileName.textContent;
    popupAboutInput.value = profileAbout.textContent;

    popupOpened(popupProfile);
})

/*Коммит профиля*/
function ProfileEditSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = popupNameInput.value;
    profileAbout.textContent = popupAboutInput.value;

    popupClose(popupProfile);

    popupProfile.reset();
}

popupProfile.addEventListener('submit', ProfileEditSubmit);
addCard.addEventListener('submit', NewCardSubmit);
addInitialCards(initialCards);