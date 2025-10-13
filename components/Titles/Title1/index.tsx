import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { TypographyPropsVariantOverrides } from '@mui/material'
import React from 'react'
import { Variant } from '@mui/material/styles/createTypography'
import { OverridableStringUnion } from '@mui/types'

type TProps = {
    title: string,
    textColor?: string,
    variation?: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>
}

export default function Title1({ title, textColor = 'secondary.main', variation = 'h5' }: TProps) {
    return (
        <Box sx={{ margin: '8px 0px 16px 0px' }}>
            <Typography
                variant={variation}
                color={textColor}
                sx={{
                    fontWeight: 600,
                    letterSpacing: 0,
                    lineHeight: '1.5em',
                    textTransform: 'uppercase',
                    paddingBottom: '15px',
                    position: 'relative',
                    '&:before': {
                        content: '" "',
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                        height: '8px',
                        width: '25px',
                        transform: 'skewX(0deg)',
                        backgroundColor: 'primary.main'
                    },
                    '&:after': {
                        content: '" "',
                        position: 'absolute',
                        left: 25,
                        bottom: '2px',
                        height: '1px',
                        width: '90%',
                        maxWidth: '120px',
                        backgroundColor: 'secondary.main'
                    }
                }}
            >
                {title}
            </Typography>
        </Box>
    )
}
