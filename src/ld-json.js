import Handlebars from "handlebars"

module.exports = function (data) {
    return new Handlebars.SafeString("<script type='application/ld+json'>"
        + JSON.stringify(data)
        + "</script>")
}
