const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
    addComponents({
        '.u_list':{
            '.title':{
                width: '100%',
                margin: '20px 0px',
                textAlign: 'center',
                fontSize: '36px',
                padding: '10px 0px',
                fontWeight: '700',
                lineHeight: '32px',
            },
            '.list':{
                padding: '0px 20px',
                minWidth: '250px',
                '.name': {
                    fontSize: '24px',
                    fontWeight: '700',
                    textAlign: 'center',
                    marginBottom: '10px',
                },
                '.card': {
                    borderRadius: '0.5rem',
                    background: '#FFF8B3',
                    'p': {
                        fontWeight: '400',
                        marginBottom: '0.75rem',
                        color: 'rgb(26 42 66 / var(--tw-text-opacity))',
                    },
                },
            },
            '.actions': {
                display: 'flex',
                justifyContent: 'space-around'
            },
            'u_button':{
                minWidth: "320px",
                maxWidth: "450px",
                background: "#facc15"
            }
        },
        
    })
})
