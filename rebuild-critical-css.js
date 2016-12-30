var critical = require('critical')
critical.generate({
    inline: false,
    base: 'dist/',
    src: 'index.html',
    width: 1300,
    height: 900,
    ignore: ['@font-face', /\.side-nav/]
}).then(function (output) {
    console.log(output)
})
