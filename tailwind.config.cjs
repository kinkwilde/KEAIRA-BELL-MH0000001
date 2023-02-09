/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte}'],
    darkMode: 'class',
    prefix: 'tw-',
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px'
        },
        fontWeight: {
            light: 200,
            normal: 400,
            semi: 500,
            medium: 600,
            bold: 700
        },
        colors: {
            accent1: '#ffc600',
            accent2: '#e900ff',
            accent3: '#5800ff',
            black: '#141414',
            current: 'currentColor',
            grey: '#5a5a5a',
            inherit: 'inherit',
            transparent: 'transparent',
            white: '#ffffff'
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem'
            }
        },
        extend: {
            zIndex: {
                5: '5',
                15: '15',
                25: '25',
                35: '35',
                45: '45'
            }
        }
    },
    plugins: []
};
