import './app.scss'
import 'materialize-css/dist/js/materialize'

$(window).resize(function () {
    $('#mainnav nav').pushpin('remove')
    $('#mainnav nav').pushpin({
        top: $('#mainnav').offset().top
    })
})
function deobfuscate(e) {
    return e.replace("...", "@")
        .replace(/\.\.\./g, ".")
        .replace(/One/g, "1")
        .replace(/Two/g, "2")
        .replace(/Three/g, "3")
        .replace(/Four/g, "4")
        .replace(/Five/g, "5")
        .replace(/Six/g, "6")
        .replace(/Seven/g, "7")
        .replace(/Eight/g, "8")
        .replace(/Nine/g, "9")
        .replace(/Zero/g, "0")
}
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

    $('.card[data-href]').bind("click", function (event) {
        event.preventDefault()
        window.location.href = $(this).data("href")
    })

    /* Deobfuscate mailto and tel links */
    $("a.obfuscate").each(function () {
        $(this).html(deobfuscate($(this).html()))
        $(this).attr("href", deobfuscate($(this).attr("href")))
    })

    // load stylesheet here
    const styleSheetLink = document.createElement('link')
    styleSheetLink.rel = 'stylesheet'
    styleSheetLink.href = '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
    styleSheetLink.type = 'text/css'
    const linkAnchor = document.getElementsByTagName('link')[0]
    linkAnchor.parentNode.insertBefore(styleSheetLink, linkAnchor)

    // Media.net ads
    window._mNHandle = {
        queue: [() => window._mNDetails.loadTag("152146877", "728x20", "152146877")]
    }

    const mediaNetLink = document.createElement("script")
    mediaNetLink.type = "text/javascript"
    mediaNetLink.src = '//contextual.media.net/dmedianet.js?cid=8CU21S9US&https=1'
    mediaNetLink.async = "async"
    const scriptAnchor = document.getElementsByTagName("script")[0]
    scriptAnchor.parentNode.insertBefore(mediaNetLink, scriptAnchor)

})
