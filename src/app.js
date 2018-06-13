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
