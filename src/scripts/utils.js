/**
 * Обработать отправку формы
 * @param request - запрос при отправке формы
 * @param evt - событие клика на кнопку сабмита формы
 * @param loadingText - текст загрузки
 */
export function handleSubmit(request, evt, loadingText = "Сохранение...") {
    evt.preventDefault();

    const submitButton = evt.submitter;
    const initialText = submitButton.textContent;

    renderLoading(true, submitButton, initialText, loadingText);

    request()
        .then(() => evt.target.reset())
        .catch((err) => console.error(`Ошибка: ${err}`))
        .finally(() => renderLoading(false, submitButton, initialText));
}

/**
 * Отобразить / скрыть текст загрузки на кнопке сабмита формы поп-апа
 * @param isLoading - начата ли загрузка
 * @param button - кнопка сабмита формы
 * @param buttonText - текст кнопки изначальный
 * @param loadingText - текст кнопки во время обработки формы
 */
function renderLoading(isLoading, button, buttonText='Сохранить', loadingText='Сохранение...') {
    button.textContent = isLoading ? loadingText : buttonText;
}