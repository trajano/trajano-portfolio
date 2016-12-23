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
        edge: 'right'
    })
    $('.scrollspy').scrollSpy({
        scrollOffset: 0
    })
    $('.parallax').parallax();

    /* Obfuscate mailto and tel links */
    $(".obfuscate").each(function () {
        $(this).html($(this).html()
            .replace("...", "@").replace(/\.\.\./g, ".")
            .replace(/one/g, "1")
            .replace(/two/g, "2")
            .replace(/three/g, "3")
            .replace(/four/g, "4")
            .replace(/five/g, "5")
            .replace(/six/g, "6")
            .replace(/seven/g, "7")
            .replace(/eight/g, "8")
            .replace(/nine/g, "9")
            .replace(/zero/g, "0"));
        $(this).attr("href", $(this).attr("href")
            .replace("...", "@").replace(/\.\.\./g, ".")
            .replace(/one/g, "1")
            .replace(/two/g, "2")
            .replace(/three/g, "3")
            .replace(/four/g, "4")
            .replace(/five/g, "5")
            .replace(/six/g, "6")
            .replace(/seven/g, "7")
            .replace(/eight/g, "8")
            .replace(/nine/g, "9")
            .replace(/zero/g, "0"));
    });
})
