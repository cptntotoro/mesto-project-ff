import '../pages/index.css';
import { initialCards } from "./cards";

const cardTemplate = document.querySelector("#card-template");
const placesList = document.querySelector(".places__list");

function createCard(cardName, cardLink, deleteCard) {
    const cardElement = cardTemplate.content
        .querySelector(".card")
        .cloneNode(true);

    const cardTitle = cardElement.querySelector(".card__title");
    cardTitle.textContent = cardName;

    const cardImage = cardElement.querySelector(".card__image");
    cardImage.alt = cardName;
    cardImage.src = cardLink;

    const cardDeleteButton = cardElement.querySelector(".card__delete-button");
    cardDeleteButton.addEventListener("click", () => deleteCard(cardElement));

    return cardElement;
}

function deleteCard(cardElement) {
    cardElement.remove();
}

initialCards.forEach((card) => {
    const cardBlock = createCard(card.name, card.link, deleteCard);
    placesList.appendChild(cardBlock);
});
