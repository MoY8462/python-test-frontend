const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        body: {
            margin: '0',
        },
        '#app': {
            width: '100%',
            color: theme('colors.yellow-500'),
        },
    })
})
