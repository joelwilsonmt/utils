export default () => {
    const test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        // console.log("Local Storage is required to run this function")
        return false;
    }
}