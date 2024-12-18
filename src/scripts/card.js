import { toggleLike, removeCard } from "./api";

/**
 * Создать карточку
 */
export function createCard(card, deleteCard, setLike, showImagePopup, userId) {
    const cardTemplate = document.querySelector("#card-template");
    const cardElement = cardTemplate.content
        .querySelector(".card")
        .cloneNode(true);

    const cardTitle = cardElement.querySelector(".card__title");
    cardTitle.textContent = card.name;

    const cardImage = cardElement.querySelector(".card__image");
    cardImage.alt = card.name;
    cardImage.src = card.link;

    const cardDeleteButton = cardElement.querySelector(".card__delete-button");
    if (card.owner._id !== userId) {
        cardDeleteButton.style.display = "none";
    } else {
        cardDeleteButton.addEventListener("click", () =>
            deleteCard(card._id, cardElement)
        );
    }

    const cardLikeButton = cardElement.querySelector(".card__like-button");
    cardLikeButton.addEventListener("click", () =>
        setLike(cardLikeButton, cardLikeCount, card._id, userId)
    );

    const cardLikeCount = cardElement.querySelector(".card__like-count");
    const cardLikes = card.likes;

    cardLikeCount.textContent = cardLikes.length;
    if (cardLikes.filter(like => like._id === userId).length !== 0) {
        cardLikeButton.classList.toggle("card__like-button_is-active");
    }

    cardImage.addEventListener("click", () => {
        showImagePopup(cardImage.src, cardTitle.textContent)
    })

    return cardElement;
}

/**
 * Удалить карточку
 */
export function deleteCard(cardId, cardElement) {
    removeCard(cardId).then(() => cardElement.remove());
}

/**
 * Поставить / удалить лайк карточке
 */
export async function setLike(likeButton, likeCount, cardId) {
    const isLiked = likeButton.classList.contains("card__like-button_is-active");

    toggleLike(cardId, !isLiked).then(updatedCard => {
        likeCount.textContent = updatedCard.likes.length;
        likeButton.classList.toggle("card__like-button_is-active");
    });
}