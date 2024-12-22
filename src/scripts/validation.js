/**
 * Настройки валидации поп-ап форм
 */
export const validationSettings = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button-is-disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible"
};

/**
 * Включить валидацию всех форм
 */
export function enableValidation(validationSettings) {
    const forms = Array.from(document.querySelectorAll(validationSettings.formSelector));

    forms.forEach(form => {
        form.addEventListener("submit", function (evt) {
            evt.preventDefault();
        });

        const inputs = Array.from(form.querySelectorAll(validationSettings.inputSelector));
        const button = form.querySelector(validationSettings.submitButtonSelector);

        inputs.forEach(input => {
            input.addEventListener("input", () => {
                const errorSpan = form.querySelector(`.${input.id}-error`);
                const error = getValidityError(input);

                if (error === "") {
                    hideInputError(input, errorSpan, validationSettings);
                } else {
                    showInputError(input, errorSpan, error, validationSettings);
                }

                const someInputsInvalid = inputs.some(input => input.validity.valid === false);
                someInputsInvalid ? disableButton(button, validationSettings) : enableButton(button, validationSettings);
            });
        })
    });
}

/**
 * Очистить ошибки валидации формы и деактивировать кнопку
 */
export function clearValidation(form, validationSettings) {
    const inputs = Array.from(form.querySelectorAll(validationSettings.inputSelector));
    const button = form.querySelector(validationSettings.submitButtonSelector);

    inputs.forEach(input => {
        const errorSpan = form.querySelector(`.${input.id}-error`);

        hideInputError(input, errorSpan, validationSettings);
        input.value = "";
    });

    disableButton(button, validationSettings);
}

/**
 * Проверить пользовательский ввод
 * @return ошибка валидации
 */
function getValidityError(input) {
    const inputValidity = input.validity;

    if (inputValidity.valid === false) {
        if (inputValidity.patternMismatch === true) {
            return input.dataset.errorMessage;
        } else if (inputValidity.tooShort === true && inputValidity.valueMissing === false) {
            const currentLength = input.value.length;
            const minLength = input.minLength;
            return "Минимальное количество символов: " + minLength + ". Длина текста сейчас: " + currentLength + " символ.";
        } else {
            return input.validationMessage;
        }
    } else {
        return "";
    }
}

/**
 * Сделать кнопку неактивной
 */
function disableButton(button, validationSettings) {
    button.classList.add(validationSettings.inactiveButtonClass);
    button.disabled = true;
}

/**
 * Сделать кнопку активной
 */
function enableButton(button, validationSettings) {
    button.classList.remove(validationSettings.inactiveButtonClass);
    button.disabled = false;
}

/**
 * Отобразить ошибку ввода
 */
function showInputError(input, errorSpan, errorMessage, validationSettings) {
    input.classList.add(validationSettings.inputErrorClass);
    errorSpan.classList.add(validationSettings.errorClass);
    errorSpan.textContent = errorMessage;
}

/**
 * Скрыть ошибку ввода
 */
function hideInputError(input, errorSpan, validationSettings) {
    input.classList.remove(validationSettings.inputErrorClass);
    errorSpan.classList.remove(validationSettings.errorClass);
    errorSpan.textContent = "";
}