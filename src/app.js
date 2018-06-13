import Vue from 'vue'
import './font-faces.scss'
import './app.scss'
import 'materialize-css'
import './icons'
import './directives'
import App from './components/App'

new Vue({
    el: '#app',
    render: h => h(App),
    mounted() {
        // You'll need this for renderAfterDocumentEvent.
        document.dispatchEvent(new Event('render-event'))
    }
})

$(window).resize(() => {
    $('#mainnav-nav').pushpin('remove')
    $('#mainnav-nav').pushpin({
        top: $('#mainnav').offset().top
    })
})

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

    // Media.net ads
    window._mNHandle = {
        queue: [() => window._mNDetails.loadTag("152146877", "728x20", "152146877")]
    }

    $.ajax({
        url: "//contextual.media.net/dmedianet.js?cid=8CU21S9US&https=1",
        cache: true,
        dataType: "script"
    })

})