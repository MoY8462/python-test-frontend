const formKitTailwind = require('@formkit/themes/tailwindcss')

module.exports = {
    content: ['./src/**/*.{js,jsx,mdx,vue}'],
    theme: {
        fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
        },
        colors: {
            primary: '#35485C',
            secondary: '#32E0C4',
            red: {
                300: '#FCE3D5',
                500: '#D3302F',
                700: '#B5222E',
            },
            blue: {
                300: '#D1EBFD',
                500: '#1D72E7',
                700: '#1558C6',
            },
            purple: {
                500: '#8a5cf6',
            },
            green: {
                300: '#DBFBE0',
                500: '#42B883',
                700: '#309E77',
            },
            yellow: {
                300: '#FEF7CC',
                500: '#FBBC05',
                700: '#DB9435',
            },
            gray: {
                200: '#F6F7F9',
                300: '#ECEFF4',
                400: '#C0CDDA',
                500: '#6A869E',
                600: '#26384F',
                700: '#1A2A42',
            },
            white: '#FFF',
        },
        extend: {
            boxShadow: {
                DEFAULT: '0px 1px 2px #4D1A2A42, 0px 1px 3px #261A2A42',
            },
            gridTemplateColumns: {
                login: '612px 1fr',
            },
            
        },
    },
    plugins: [
        formKitTailwind,

        require('./src/theme/base/global.base'),
        require('./src/theme/base/typography.base'),

        require('./src/theme/components/form.component'),
        require('./src/theme/components/dasboard.component'),

        require('./src/theme/utils/layout.util'),
    ],
}
