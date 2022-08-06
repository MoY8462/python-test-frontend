const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase, theme }) {
    addBase({
        h3: {
            fontSize: theme('fontSize.4xl'),
            fontWeight: theme('fontWeight.semibold'),
        },
    })
})
