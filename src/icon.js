import Handlebars from "handlebars"

module.exports = function () {
    let className = "fa";
    for (let i = 0; i < arguments.length - 1; ++i) {
        if (arguments[i] == "left") {
            className += " " + arguments[i]
        } else {
            className += " fa-" + arguments[i]
        }
    }
    return new Handlebars.SafeString('<i class="' + className + '" aria-hidden="true"></i>')
}
