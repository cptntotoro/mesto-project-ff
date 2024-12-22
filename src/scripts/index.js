import '../pages/index.css';
import { createCard, deleteCard, setLike } from "./card";
import { openModal, closeModal } from "./modal";
import { enableValidation, clearValidation, validationSettings} from "./validation";
import { getUser, updateUser, updateAvatar, getCards, addCard } from "./api";
import { handleSubmit } from "./utils";

/**
 * Список карточек мест
 */
const placesList = document.querySelector(".places__list");

/**
 * Элементы поп-апа с картинкой по клику на картинку карточки места
 */
const imagePopup = document.querySelector(".popup.popup_type_image");
const imageImagePopup = imagePopup.querySelector(".popup__image");
const captionImagePopup = imagePopup.querySelector(".popup__caption");

/**
 * Элементы поп-апа добавления новой карточки места
 */
const addNewPlaceButton = document.querySelector(".profile__add-button");
const newPlacePopup = document.querySelector(".popup.popup_type_new-card");
const newPlaceForm = document.forms["new-place"];
const cardNameInput = newPlaceForm.querySelector(".popup__input_type_card-name");
const cardUrlInput = newPlaceForm.querySelector(".popup__input_type_url");

/**
 * Элементы поп-апа редактирования профиля
 */
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfilePopup = document.querySelector(".popup.popup_type_edit");
const editProfileForm = document.forms["edit-profile"];
const profileNameInput = editProfileForm.querySelector(".popup__input_type_name");
const profileDescriptionInput = editProfileForm.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");

/**
 * Элементы поп-апа редактирования аватара профиля
 */
const editAvatarPopup = document.querySelector(".popup.popup_type-avatar");
const editAvatarForm = document.forms["avatar-form"];

/**
 * Кнопки закрытия поп-апов
 */
const closePopupButtonList = document.querySelectorAll(".popup__close");

/**
 * Идентификатор пользователя
 */
let userId = "";

/**
 * Получение профиля пользователя и наполнение страницы карточками
 */
Promise.all([getUser(), getCards()])
    .then(([user, cards]) => {
        userId = user._id;
        profileName.textContent = user.name;
        profileDescription.textContent = user.about;
        profileImage.style.backgroundImage = `url(${user.avatar})`;

        cards.forEach(card => renderCard(card));
    })
    .catch(console.error);

/**
 * Открытие и закрытие поп-апа добавления места
 */
addNewPlaceButton.addEventListener("click", () => {
    clearValidation(newPlaceForm, validationSettings);
    openModal(newPlacePopup);
});

/**
 * Открытие и закрытие поп-апа редактирования профиля
 */
editProfileButton.addEventListener("click", () => {
    clearValidation(editProfileForm, validationSettings);
    openEditProfileModal(editProfilePopup);
});

/**
 * Открытие и закрытие поп-апа редактирования аватара профиля
 */
profileImage.addEventListener("click", () => {
    clearValidation(editAvatarForm, validationSettings);
    openModal(editAvatarPopup);
});

/**
 * Включить валидацию форм поп-апов
 */
enableValidation(validationSettings);

/**
 * Закрытие поп-апов по клику на крестик
 */
closePopupButtonList.forEach((closeButton) => {
    closeButton.addEventListener("click", () =>
        closeModal(closeButton.closest(".popup"))
    );
});

/**
 * Закрытие поп-апов по клику на область вне поп-апа
 */
document.querySelectorAll(".popup").forEach(popupElement => {
    popupElement.addEventListener("click", (e) => {
        if (popupElement === e.target) {
            closeModal(popupElement);
        }
    })
});

/**
 * Обработка сабмита формы поп-апа создания новой карточки
 */
newPlacePopup.addEventListener('submit', (e) =>
    handleAddNewCardSubmit(e, newPlacePopup)
);

/**
 * Обработка сабмита формы поп-апа редактирования профиля
 */
editProfilePopup.addEventListener('submit', (e) =>
    handleEditProfileSubmit(e, editProfilePopup)
);

/**
 * Обработка сабмита формы поп-апа обновления аватара профиля
 */
editAvatarPopup.addEventListener('submit', (e) =>
    handleEditAvatarSubmit(e, editAvatarPopup)
);

/**
 * Отрисовать карточку места
 * @param card - карточка
 * @param method - метод вставки
 */
function renderCard(card, method = "append") {
    const cardElement = createCard(card, userId, {
        deleteCard: deleteCard,
        setLike: setLike,
        showImagePopup: showImagePopup,
    });
    placesList[ method ](cardElement);
}

/**
 * Создать новую карточку при отправке формы
 */
function handleAddNewCardSubmit(evt, popupElement) {
    function makeRequest() {
        return addCard(cardNameInput.value, cardUrlInput.value).then((cardData) => {
            const cardBlock = createCard(cardData, userId, {
                deleteCard: deleteCard,
                setLike: setLike,
                showImagePopup: showImagePopup,
            });
            placesList.insertBefore(cardBlock, placesList.firstChild);
            closeModal(popupElement);
        });
    }
    handleSubmit(makeRequest, evt);
}

/**
 * Установить новые значения при отправке формы редактирования профиля
 */
function handleEditProfileSubmit(evt, popupElement) {
    function makeRequest() {
        return updateUser(profileNameInput.value, profileDescriptionInput.value).then((userData) => {
            profileName.textContent = userData.name;
            profileDescription.textContent = userData.about;
            closeModal(popupElement);
        });
    }
    handleSubmit(makeRequest, evt);
}

/**
 * Установить новый аватар при отправке формы редактирования аватара
 */
function handleEditAvatarSubmit(evt, editAvatarPopup) {
    const imageUrlInput = editAvatarPopup.querySelector(".popup__input_type_url");

    function makeRequest() {
        return updateAvatar(imageUrlInput.value).then((userData) => {
            profileImage.style.backgroundImage = `url(${userData.avatar})`;
            closeModal(editAvatarPopup);
        });
    }
    handleSubmit(makeRequest, evt);
}

/**
 * Отобразить поп-ап картинки карточки
 */
function showImagePopup(cardImageSrc, cardCaption) {
    imageImagePopup.src = cardImageSrc;
    imageImagePopup.alt = cardCaption;
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