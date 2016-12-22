window.jQuery = require('jquery')
window.$ = window.jQuery
require("./fonts.css")
require("./semantic/dist/semantic.css")
require("./app.css")
require("./semantic/dist/semantic.js")

$(document)
    .ready(function () {

        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'
        })
        $('.overlay').visibility({
            type: 'fixed',
            offset: 80
        })

        // lazy load images
        $('.image').visibility({
            type: 'image',
            transition: 'vertical flip in',
            duration: 500
        })

        // show dropdown on hover
        $('.main.menu  .ui.dropdown').dropdown({
            on: 'hover'
        })
    })
