const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './src/**/*.css',
        './src/**/*.vue',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Vazir', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                nk: {
                    gray: {
                        300: '#414141',
                        500: '#252525',
                    },
                    red: {
                        500: '#ff0000',
                        700: '#af0430',
                    },
                },
            },
            padding: {
                full: '100%',
            },
            height: {
                'screen-1/2': '50vh',
                'screen-3/4': '75vh',
            },
        },
    },
    variants: {
        extend: {
            width: ['hover', 'focus'],
        },
    },
};
