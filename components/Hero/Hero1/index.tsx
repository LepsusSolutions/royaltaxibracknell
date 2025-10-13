import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

export default function Hero1({ title, imageURL, vertical }: { title: string, imageURL: string, vertical: string }) {

    const style = {
        bgImage: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageURL})`,
            height: 'auto',
            backgroundPositionX: 'center',
            backgroundPositionY: vertical,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
        }
    }

    return (
        <Box sx={style.bgImage}>
            <Box>
                <Typography
                    variant='h1'
                    color={'white'}
                    sx={{ textAlign: 'center', py: 16, fontWeight: 'bold' }}>
                    {title}
                </Typography>
            </Box>
        </Box>
    )
}

