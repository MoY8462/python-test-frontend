const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.img': {
            '&_logo': {
                width: '150px',
                height: '60px',
                backgroundImage: theme('backgroundImage.logo'),
                backgroundSize: 'cover',
            },
            '&_dots-green': {
                backgroundImage: theme('backgroundImage.dots_green'),
                backgroundSize: '288px',
            },
            '&_dots-gray': {
                backgroundImage: theme('backgroundImage.dots_gray'),
                backgroundSize: '14px',
            },
        },
    })
})
