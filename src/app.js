import './font-faces.scss'
import './app.scss'
import 'materialize-css/dist/js/materialize'

// Declare variables that will be created asynchronously later.
// var Waves = undefined
var smartsupp = undefined

$(window).resize(() => {
    $('#mainnav-nav').pushpin('remove')
    $('#mainnav-nav').pushpin({
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
    //Waves.displayEffect({ duration: 200 })
    $('#mainnav-nav').pushpin({
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

    $.ajax({
        url: "//contextual.media.net/dmedianet.js?cid=8CU21S9US&https=1",
        cache: true,
        dataType: "script"
    })

    // Smartsupp Live Chat script
    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = '1164536eedc7355cdbbac4c037e82b31531fcd0f'

    $.ajax({
        url: "//www.smartsuppchat.com/loader.js",
        cache: true,
        dataType: "script",
        success: () => {
            smartsupp('on', 'status', status => {
                if (status == 'online') {
                    $('.chatbutton').show()
                } else {
                    $('.chatbutton').hide()
                }
            });
            $(".chatbutton").on("click", () => {
                smartsupp('chat:open')
            })
        }
    })

})
