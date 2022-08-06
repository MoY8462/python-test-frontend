const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.form': {
            width: '452px',
            marginTop: '36px',
            marginBottom: '36px',
            padding: '45px 60px',
            backgroundColor: theme('colors.white'),
            borderRadius: theme('borderRadius.DEFAULT'),
            boxShadow: theme('boxShadow.DEFAULT'),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',

            '.form-content': {
                display: 'grid',
                rowGap: '18px',
            },

            '.form-footer': {
                display: 'flex',
                marginTop: '24px',
                justifyContent: 'center',

                '& a:nth-child(2)': {
                    margin: '0 24px',
                },
            },
        },
    })
})
