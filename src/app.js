import './app.scss'
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

    $('.card[data-href]').bind("click", function (event) {
        event.preventDefault()
        window.location.href = $(this).data("href")
    })

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

    // Media.net ads
    window._mNHandle = {};
    window._mNHandle.queue = [];
    // medianet_versionId = "121199";
    (function () {
        var sct = document.createElement("script"),
            sctHl = document.getElementsByTagName("script")[0]
        sct.type = "text/javascript"
        sct.src = 'https://contextual.media.net/dmedianet.js?cid=8CU21S9US&https=1'
        sct.async = "async";
        sctHl.parentNode.insertBefore(sct, sctHl);
    })();
    window._mNHandle.queue.push(function () {
        window._mNDetails.loadTag("152146877", "728x20", "152146877");
    })
})
