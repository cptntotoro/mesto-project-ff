/**
 * Конфиг
 */
const config = {
    baseUrl: "https://nomoreparties.co/v1/cohort-mag-4",
    headers: {
        authorization: "b120d1c9-a963-45b6-94ed-3fdd57c6b237",
        "Content-Type": "application/json"
    },
};

/**
 * Получить данные профиля
 * @return name, about, avatar, _id, cohort
 */
export function getUser() {
    return fetchUrl(
        `${config.baseUrl}/users/me`,
        "GET"
    );
}

/**
 * Обновить данные профиля
 * @param name - имя профиля
 * @param about - описание профиля
 * @return name, about, avatar, _id, cohort
 */
export function updateUser(name, about) {
    return fetchUrl(
        `${config.baseUrl}/users/me`,
        "PATCH",
        JSON.stringify({
            name: name,
            about: about
        })
    );
}

/**
 * Обновить аватар профиля
 * @param imgUrl - ссылка на картинку
 */
export function updateAvatar(imgUrl) {
    return fetchUrl(
        `${config.baseUrl}/users/me/avatar`,
        "PATCH",
        JSON.stringify({
            avatar: imgUrl
        })
    );
}

/**
 * Получить карточки мест
 * @return массив карточек с полями: likes, _id, name, link, owner (см {@link getUser()}), createdAt
 */
export function getCards() {
    return fetchUrl(
        `${config.baseUrl}/cards`,
        "GET"
    );
}

/**
 * Добавить новую карточку
 * @param name - название места
 * @param link - URL картинки
 */
export function addCard(name, link) {
    return fetchUrl(
        `${config.baseUrl}/cards`,
        "POST",
            JSON.stringify({
            name: name,
            link: link
        })
    );
}

/**
 * Удалить карточку
 * @param id - идентификатор карточки
 */
export function removeCard(id) {
    return fetchUrl(
        `${config.baseUrl}/cards/${id}`,
        "DELETE"
    );
}

/**
 * Поставить/убрать лайк карточке
 * @param id - идентификатор карточки
 * @param isLiked - нужно поставить лайк (true) / нужно удалить лайк (false)
 */
export function toggleLike(id, isLiked) {
    return fetchUrl(
        `${config.baseUrl}/cards/likes/${id}`,
        isLiked ? "PUT" : "DELETE"
    );
}

/**
 * Общий метод отправки запроса
 */
function fetchUrl(url, method, body) {
    return fetch(url, {
        method: method,
        headers: config.headers,
        body: body
    }).then((r) => checkResponse(r));
}

/**
 * Проверить ответ
 */
function checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}