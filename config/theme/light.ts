'use client'

import { createTheme } from "@mui/material/styles"

/**
 * secondary.dark   rgb(44, 66, 100)    #2c4264
 * secondary    rgb(64 95 143)  #405f8f
 * primary      rgba(238, 90, 36, 1)
 */

//Declare custom colors 
declare module '@mui/material/styles' {
    interface Palette {
        darkBackground1: Palette['primary'];
        darkBackground2: Palette['primary'];
    }

    interface PaletteOptions {
        darkBackground1?: PaletteOptions['primary'];
        darkBackground2?: PaletteOptions['primary'];
        lightBackground?: PaletteOptions['primary'];
    }
}


export const light = createTheme({

    palette: {
        mode: 'light',
        primary: {
            main: '#0056f7',
            light: '#3f7efd',
            dark: '#004ad7',
        },
        secondary: {
            main: '#dddddd',
            light: '#e4e4e4',
            dark: '#262626',
        },
        error: {
            main: '#ff0000',
        },
        info: {
            main: '#00ccff',
        },
        success: {
            main: '#009933',
        },
        warning: {
            main: '#cc6600',
        },
        darkBackground1: {
            main: '#001b4d'
        },
        darkBackground2: {
            main: '#00091a'
        },
        lightBackground: {
            main: '#f2f2f2'
        }
    },
    typography: {
        fontFamily: [
            "Raleway", "sans-serif"
        ].join(','),
    },

    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {}
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'inherit',
                    "&:hover": {
                        boxShadow: 'inherit',
                    },
                    textTransform: 'none',
                    borderRadius: '25px'
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 48
                },
                h2: {
                    fontSize: 40
                },
                h3: {
                    fontSize: 32
                },
                h4: {
                    fontSize: 24
                },
                h5: {
                    fontSize: 20
                },
                h6: {
                    fontSize: 16
                },
            }
        }
    }
})