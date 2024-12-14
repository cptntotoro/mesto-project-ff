import '../pages/index.css';
import { initialCards } from "./cards";
import { createCard, deleteCard, likeCard } from "./card";
import { openModal, closeModal } from "./modal";
import { enableValidation, clearValidation, validationSettings} from "./validation";

const placesList = document.querySelector(".places__list");

const imagePopup = document.querySelector(".popup.popup_type_image");
const imageImagePopup = imagePopup.querySelector(".popup__image");
const captionImagePopup = imagePopup.querySelector(".popup__caption");

const addNewPlaceButton = document.querySelector(".profile__add-button");
const newPlacePopup = document.querySelector(".popup.popup_type_new-card");
const newPlaceForm = newPlacePopup.querySelector(".popup__form");
const cardNameInput = newPlacePopup.querySelector(".popup__input_type_card-name");
const cardUrlInput = newPlacePopup.querySelector(".popup__input_type_url");

const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup.popup_type_edit");
const editProfileForm = editProfilePopup.querySelector(".popup__form");
const profileNameInput = editProfilePopup.querySelector(".popup__input_type_name");
const profileDescriptionInput = editProfilePopup.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

const closePopupButtonList = document.querySelectorAll(".popup__close");

/**
 * Наполнение страницы предустановленными карточками
 */
initialCards.forEach((card) => {
    const cardBlock = createCard(card.name, card.link, deleteCard, likeCard, showImagePopup);
    placesList.appendChild(cardBlock);
});

/**
 * Открытие и закрытие поп-апа добавления места
 */
addNewPlaceButton.addEventListener("click", () => {
    openModal(newPlacePopup);
    clearValidation(newPlaceForm, validationSettings);
});

/**
 * Открытие и закрытие поп-апа редактирования профиля
 */
editProfileButton.addEventListener("click", () => {
    clearValidation(editProfileForm, validationSettings);
    openEditProfileModal(editProfilePopup);
});

/**
 * Включить валидацию форм поп-апов
 */
enableValidation(validationSettings);

/**
 * Закрытие поп-апов по клику на крестик
 */
closePopupButtonList.forEach((closeButton) => {
    closeButton.addEventListener("click", () => {
        closeModal(closeButton.closest(".popup"));
    })
});

/**
 * Закрытие поп-апов по клику на область вне поп-апа
 */
document.querySelectorAll(".popup").forEach(element => {
    element.addEventListener("click", (e) => {
        if (element === e.target) {
            closeModal(element);
        }
    })
});

/**
 * Обработка сабмита формы поп-апа создания новой карточки
 */
newPlacePopup.addEventListener('submit', (e) => handleAddNewCardSubmit(e, newPlacePopup));

/**
 * Обработка сабмита формы поп-апа редактирования профиля
 */
editProfilePopup.addEventListener('submit', (e) => handleEditProfileSubmit(e, editProfilePopup));

/**
 * Создать новую карточку при отправке формы
 */
function handleAddNewCardSubmit(evt, popupElement) {
    evt.preventDefault();

    const cardBlock = createCard(cardNameInput.value, cardUrlInput.value, deleteCard, likeCard, showImagePopup);
    placesList.insertBefore(cardBlock, placesList.firstChild);

    cardNameInput.value = "";
    cardUrlInput.value = "";

    closeModal(popupElement);
}

/**
 * Установить новые значения при отправке формы редактирования профиля
 */
function handleEditProfileSubmit(evt, popupElement) {
    evt.preventDefault();

    profileName.textContent = profileNameInput.value;
    profileDescription.textContent = profileDescriptionInput.value;

    closeModal(popupElement);
}

/**
 * Отобразить поп-ап картинки карточки
 */
function showImagePopup(cardImageSrc, cardCaption) {
    imageImagePopup.src = cardImageSrc;
    captionImagePopup.textContent = cardCaption;

    openModal(imagePopup);
}

/**
 * Отобразить поп-ап редактирования профиля
 */
function openEditProfileModal(popupElement) {
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;

    openModal(popupElement);
}