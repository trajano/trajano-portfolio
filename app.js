import 'font-awesome/scss/font-awesome.scss'
import './app.scss'
import './style.css'
import 'materialize-css/dist/js/materialize'

$(function () {
    Waves.displayEffect({ duration: 200 })
    $('#mainnav nav').pushpin({
        top: $('#mainnav').offset().top
    })

    $('.button-collapse').sideNav({
        edge: 'right',
        closeOnClick: true
    })
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    })
    $('.parallax').parallax();

    /* Obfuscate mailto and tel links */
    $(".obfuscate").each(function () {
        $(this).html($(this).html()
            .replace("...", "@").replace(/\.\.\./g, ".")
            .replace(/One/g, "1")
            .replace(/Two/g, "2")
            .replace(/Three/g, "3")
            .replace(/Four/g, "4")
            .replace(/Five/g, "5")
            .replace(/Six/g, "6")
            .replace(/Seven/g, "7")
            .replace(/Eight/g, "8")
            .replace(/Nine/g, "9")
            .replace(/Zero/g, "0"));
        $(this).attr("href", $(this).attr("href")
            .replace("...", "@").replace(/\.\.\./g, ".")
            .replace(/One/g, "1")
            .replace(/Two/g, "2")
            .replace(/Three/g, "3")
            .replace(/Four/g, "4")
            .replace(/Five/g, "5")
            .replace(/Six/g, "6")
            .replace(/Seven/g, "7")
            .replace(/Eight/g, "8")
            .replace(/Nine/g, "9")
            .replace(/Zero/g, "0"));
    });
})
