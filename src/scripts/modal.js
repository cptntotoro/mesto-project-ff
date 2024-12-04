/**
 * Отобразить поп-ап
 */
export function openModal(popupElement) {
    popupElement.classList.add("popup_is-opened");
    document.addEventListener('keydown', closePopupByEsc);
}

/**
 * Закрыть поп-ап
 */
export function closeModal(popupElement) {
    popupElement.classList.remove("popup_is-opened");
    document.removeEventListener('keydown', closePopupByEsc);
}

/**
 * Закрыть поп-ап по нажатию Esc
 */
function closePopupByEsc(event) {
    if (event.key === 'Escape') {
        closeModal(document.querySelector('.popup_is-opened'));
    }
}