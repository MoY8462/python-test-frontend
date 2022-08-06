const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
    addUtilities({
        '.screen_full': {
            width: '100vw',
            height: '100vh',
        },
        '.content_center': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    })
})
