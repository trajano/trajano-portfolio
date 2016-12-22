//import 'materialize-css/sass/materialize.scss'
import './app.scss'
import './style.css'
import 'materialize-css/dist/js/materialize'

$(function () {

    var navpos = $('#mainnav').offset();
    var navheight = $('#mainnav').outerHeight();

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > navpos.top) {

            $('#mainnav').addClass('navbar-fixed').addClass('affix-top')
        }
        else {
            $('#mainnav').removeClass('navbar-fixed').removeClass('affix-top')
        }
    });

    $('.button-collapse').sideNav({
        edge: 'right'
    });
    $('.parallax').parallax();
})
