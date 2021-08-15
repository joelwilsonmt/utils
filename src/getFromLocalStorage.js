export default (key) => {
    // search by key and return value
    return JSON.parse(localStorage.getItem(key) || "[]")
}