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
        lightBackground1?: PaletteOptions['primary'];
    }
}


export const dark = createTheme({

    palette: {
        mode: 'light',
        primary: {
            main: '#ee5a24',
            light: '#fff0ea',
        },
        secondary: {
            main: '#405f8f',
            light: '#eaeef4'
        },
        error: {
            main: '#dc2626',
        },
        info: {
            main: '#0ea5e9',
        },
        success: {
            main: '#0d9488',
        },
        warning: {
            main: '#fb923c',
        },
        darkBackground1: {
            main: '#0b1524'
        },
        darkBackground2: {
            main: '#010307'
        },
        lightBackground1: {
            main: '#f8f8f8'
        }
    },

    components: {
        MuiAvatar: {
            styleOverrides: {
                root: {}
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
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
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 36
                },
                h2: {
                    fontSize: 32
                },
                h3: {
                    fontSize: 28
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