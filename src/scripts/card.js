const cardTemplate = document.querySelector("#card-template");

/**
 * Создать карточку
 */
export function createCard(cardName, cardImageUrl, deleteCard, likeCard, showImagePopup) {
    const cardElement = cardTemplate.content
        .querySelector(".card")
        .cloneNode(true);

    const cardTitle = cardElement.querySelector(".card__title");
    cardTitle.textContent = cardName;

    const cardImage = cardElement.querySelector(".card__image");
    cardImage.alt = cardName;
    cardImage.src = cardImageUrl;

    const cardDeleteButton = cardElement.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", () => deleteCard(cardElement));

    const cardLikeButton = cardElement.querySelector(".card__like-button");
    cardLikeButton.addEventListener("click", (evt) => {
        likeCard(evt);
    });

    cardImage.addEventListener("click", () => {
        showImagePopup(cardImage.src, cardTitle.textContent)
    })

    return cardElement;
}

/**
 * Удалить карточку
 */
export function deleteCard(cardElement) {
    cardElement.remove();
}

/**
 * Поставить / удалить лайк карточке
 */
export function likeCard(evt) {
    const likeButton = evt.target;
    likeButton.classList.toggle("card__like-button_is-active");
}