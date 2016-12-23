//import 'materialize-css/sass/materialize.scss'
import './app.scss'
import './style.css'
import 'materialize-css/dist/js/materialize'

$(function () {

    $('#mainnav nav').pushpin({
        top: $('#mainnav').offset().top
    })

    $('.button-collapse').sideNav({
        edge: 'right'
    })
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    })
    $('.parallax').parallax();
})
