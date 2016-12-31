var critical = require('critical')
critical.generate({
    inline: false,
    base: 'dist/',
    src: 'index.html',
    dimensions: [{
        width: 1920,
        height: 1080
    }, {
        width: 1024,
        height: 768
    }, {
        width: 414,
        height: 736
    }],
    ignore: ['@font-face', /\.side-nav/]
}).then(function (output) {
    console.log(output)
})
