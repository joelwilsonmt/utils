export default (obj) => {
    const keys = Object.keys(obj)
    // eslint-disable-next-line no-bitwise
    return obj[keys[keys.length * Math.random() << 0]]
}