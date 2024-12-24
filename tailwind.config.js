// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
    defaultTheme: "light",
    defaultExtendTheme: "light",
    addCommonColors: true,
    extend: {
        animation: {
            fade: 'fadeIn 1.5s ease-in-out',
            fill: 'fillIn 3s 1s forwards',
        },
        keyframes: {
            fadeIn: {
                from: {opacity: 0},
                to: {opacity: 1},
            },
            fillIn: {
                '100%': {backgroundPosition: 'left', backgroundSize: '200% 100%'},
            },
        }, fontFamily: {
            sans: ["var(--font-sans)"], mono: ["var(--font-mono)"],
        },
    },
    darkMode: "class",
    themes: {
        colors: {
            background: "#2380D1", foreground: "#FEFEFE", primary: {
                100: "#D2F2FC",
                200: "#A7E0FA",
                300: "#78C5F1",
                400: "#55A8E3",
                500: "#2380D1",
                600: "#1963B3",
                700: "#114A96",
                800: "#0B3479",
                900: "#062464",
                DEFAULT: "#2380D1",
                foreground: "#FFFFFF",
            }, success: {
                100: "#F2FCCD",
                200: "#E3F99C",
                300: "#CAEF69",
                400: "#AEE043",
                500: "#89CC0E",
                600: "#6FAF0A",
                700: "#579207",
                800: "#417604",
                900: "#326102",
            }, secondary: {
                100: "#CBFDED",
                200: "#97FCE4",
                300: "#63F8E1",
                400: "#3CF1E4",
                500: "#00E4E8",
                600: "#00B2C7",
                700: "#0087A7",
                800: "#006186",
                900: "#00476F",
            }, warning: {
                100: "#FEF1CC",
                200: "#FDE099",
                300: "#FBC966",
                400: "#F7B340",
                500: "#F28F04",
                600: "#D07202",
                700: "#AE5802",
                800: "#8C4001",
                900: "#743000",
            }, danger: {
                100: "#FEE5D7",
                200: "#FEC6AF",
                300: "#FE9F86",
                400: "#FD7A68",
                500: "#FC3E37",
                600: "#D82830",
                700: "#B51B30",
                800: "#92112D",
                900: "#780A2C",
            }, focus: "#2380D1",
        }, "dark": {
            colors: {
                background: "#2380D1", foreground: "#FEFEFE", primary: {
                    50: "#3B096C",
                    100: "#520F83",
                    200: "#7318A2",
                    300: "#9823C2",
                    400: "#c031e2",
                    500: "#DD62ED",
                    600: "#F182F6",
                    700: "#FCADF9",
                    800: "#FDD5F9",
                    900: "#FEECFE",
                    DEFAULT: "#DD62ED",
                    foreground: "#ffffff",
                }, focus: "#F182F6",
            }, layout: {
                disabledOpacity: "0.3", radius: {
                    small: "4px", medium: "6px", large: "8px",
                }, borderWidth: {
                    small: "1px", medium: "2px", large: "3px",
                },
            },
        },
        variants: {
            fill: ['hover', 'focus'],
        },
    }, plugins: [nextui()],
    important: true
};