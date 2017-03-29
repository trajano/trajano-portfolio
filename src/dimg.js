// Deferred image loading
import Handlebars from "handlebars"

module.exports = function (src, alt, className) {

    return new Handlebars.SafeString(`<img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="${src}" alt="${alt}" class="${className}">`)
}


