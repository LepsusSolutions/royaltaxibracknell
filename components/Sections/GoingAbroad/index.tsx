import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import FlightIcon from '@mui/icons-material/Flight'
import React from 'react'

export default function Hero1() {

    const style = {
        bgImage: {
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/images/section/jumbo-jet-flying-sky.jpg')`,
            height: '100%',
            witdth: '100vw',
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            position: 'relative'
        }
    }

    return (
        <Box sx={style.bgImage}>
            <Box sx={{ py: 12 }}>
                <Typography sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center', letterSpacing: 2 }}>OUR RATES FOR AIRPORT TRANSFERS</Typography>
                <Typography variant='h1' color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold' }}>Going Abroad?</Typography>
            </Box>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} mx={{ xs: 4, lg: 'auto' }} pt={4} pb={8} maxWidth='lg'>
                <Stack sx={{ position: 'relative', backgroundColor: 'darkBackground2.main', '&:hover': { backgroundColor: 'darkBackground1.main' }, display: 'flex', justifyContent: 'center', p: 2, mx: 4, borderRadius: 10 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', left: 0, top: -30, width: '100%' }}>
                        <Box sx={{ p: 1.2, backgroundColor: 'darkBackground2.main', borderRadius: '50%' }}>
                            <Box sx={{ p: 1, backgroundColor: 'primary.main', borderRadius: '50%' }}>
                                <FlightIcon sx={{ color: 'white', fontSize: 40 }} />
                            </Box>
                        </Box>
                    </Box>
                    <Stack direction='column' spacing={2} pt={8}>
                        <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Heathrow Airport</Typography>
                        <Typography variant='body2' sx={{ color: 'white', textAlign: 'center' }}>Heathrow Airport is a main international airport in London and the second busiest airport in the world.</Typography>
                        <Typography variant='h5' sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}>£45</Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ position: 'relative', backgroundColor: 'darkBackground2.main', '&:hover': { backgroundColor: 'darkBackground1.main' }, display: 'flex', justifyContent: 'center', p: 2, mx: 4, borderRadius: 10 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', left: 0, top: -30, width: '100%' }}>
                        <Box sx={{ p: 1.2, backgroundColor: 'darkBackground2.main', borderRadius: '50%' }}>
                            <Box sx={{ p: 1, backgroundColor: 'primary.main', borderRadius: '50%' }}>
                                <FlightIcon sx={{ color: 'white', fontSize: 40 }} />
                            </Box>
                        </Box>
                    </Box>
                    <Stack direction='column' spacing={2} pt={8}>
                        <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Gatwick Airport</Typography>
                        <Typography variant='body2' sx={{ color: 'white', textAlign: 'center' }}>Gatwick Airport is located in South East of London.</Typography>
                        <Typography variant='h5' sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}>£92</Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ position: 'relative', backgroundColor: 'darkBackground2.main', '&:hover': { backgroundColor: 'darkBackground1.main' }, display: 'flex', justifyContent: 'center', p: 2, mx: 4, borderRadius: 10 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', left: 0, top: -30, width: '100%' }}>
                        <Box sx={{ p: 1.2, backgroundColor: 'darkBackground2.main', borderRadius: '50%' }}>
                            <Box sx={{ p: 1, backgroundColor: 'primary.main', borderRadius: '50%' }}>
                                <FlightIcon sx={{ color: 'white', fontSize: 40 }} />
                            </Box>
                        </Box>
                    </Box>
                    <Stack direction='column' spacing={2} pt={8}>
                        <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Luton Airport</Typography>
                        <Typography variant='body2' sx={{ color: 'white', textAlign: 'center' }}>This is an international airport located in Luton, Bedfordshire.</Typography>
                        <Typography variant='h5' sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}>£92</Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ position: 'relative', backgroundColor: 'darkBackground2.main', '&:hover': { backgroundColor: 'darkBackground1.main' }, display: 'flex', justifyContent: 'center', p: 2, mx: 4, borderRadius: 10 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', left: 0, top: -30, width: '100%' }}>
                        <Box sx={{ p: 1.2, backgroundColor: 'darkBackground2.main', borderRadius: '50%' }}>
                            <Box sx={{ p: 1, backgroundColor: 'primary.main', borderRadius: '50%' }}>
                                <FlightIcon sx={{ color: 'white', fontSize: 40 }} />
                            </Box>
                        </Box>
                    </Box>
                    <Stack direction='column' spacing={2} pt={8}>
                        <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Stansted Airport</Typography>
                        <Typography variant='body2' sx={{ color: 'white', textAlign: 'center' }}>Stansted international airport is located North East from Central London.</Typography>
                        <Typography variant='h5' sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}>£160</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

