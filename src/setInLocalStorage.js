import hasLocalStorage from "./hasLocalStorage.js"

export default (key, value) => {
    if (hasLocalStorage) {
        localStorage.setItem(key, JSON.stringify(value))
    }
}