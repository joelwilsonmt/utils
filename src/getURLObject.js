const isClient = typeof window === "object"
export default (url) => {
    if (isClient) {
        const parser = document.createElement('a')
        parser.href = url
        if (parser.pathname[parser.pathname.length] !== '/') {
            let temp = parser.pathname
            temp += '/'
            parser.pathname = temp
        }
        /* --------------------------
                https://gist.github.com/jlong/2428561

                var parser = document.createElement('a');
                parser.href = "<URL-STRING-HERE>";

                parser.protocol; // => "http/s:"
                parser.hostname; // => "example.com"
                parser.port;     // => "3000"
                parser.pathname; // => "/pathname/"
                parser.search;   // => "?search=test"
                parser.hash;     // => "#hash"
                parser.host;     // => "example.com:3000"
            -------------------------------- */
        return parser
    }
    return null
}