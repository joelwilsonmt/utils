export default (query) => {
    // first test if url parameter starts with '?'
    if (query[0] === "?") {
        query = query.slice(1, query.length)
    }
    let params = {}
    const vars = query.split('&')
    for (let i = 0; i < vars.length; i += 1) {
        const pair = vars[i].split('=')
        params[pair[0]] = decodeURIComponent(pair[1])
    }
    return query ? params : null
}