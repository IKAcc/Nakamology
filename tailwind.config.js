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
                rb: {
                    indigo: {
                        500: '#421196',
                    },
                    violet: {
                        100: '#FCF8FF',
                        200: '#EBD6FF',
                        500: '#9529FF',
                        600: '#850AFF',
                        900: '#463C74',
                    },
                    yellow: {
                        500: '#FFC719',
                    },
                    red: {
                        500: '#FF193B',
                    },
                    carnelian: {
                        500: '#B8001C',
                    },
                },
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
