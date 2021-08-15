import getURLObject from "./getURLObject.js"

export default (uri) => {
    let { pathname } = getURLObject(uri)
    while (pathname[pathname.length - 1] === '/') {
        pathname = pathname.slice(0, pathname.length - 1)
    }
    pathname += "/"
    return pathname
}