import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import React from 'react'

export default function index() {
    return (
        <Box maxWidth='lg' mx='auto' sx={{ py: 4 }} px={{ xs: 2, md: 0 }}>
            <Typography textAlign='center' color='primary'>MAIN FEATURES</Typography>
            <Typography textAlign='center' variant='h3' fontWeight='bold' py={2}>Our Specality</Typography>
            <Grid container>
                <Grid item xs={12} md={4} spacing={2}>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} pt={2} pb={8} alignItems={{ xs: 'center', md: 'left' }}>
                        <div>
                            <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                        </div>
                        <div>
                            <Typography variant='h4' fontWeight='bold' gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>No Waiting Charges</Typography>
                            <Typography variant='body2' sx={{ textAlign: { xs: 'center', md: 'left' } }}>Once you let us know the time of your arrival, we will be there to pick you up. If your flight or the ferry is delayed, it’s not your fault. We will be there, without adding any extra waiting charges.</Typography>
                        </div>
                    </Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} pt={2} pb={8} alignItems={{ xs: 'center', md: 'left' }}>
                        <div>
                            <AttachMoneyOutlinedIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                        </div>
                        <div>
                            <Typography variant='h4' fontWeight='bold' gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>Price Gurantee</Typography>
                            <Typography variant='body2' sx={{ textAlign: { xs: 'center', md: 'left' } }}>At Royal Executive Cars i.e. Royal Taxi Bracknell we have no hidden charges. No surprise bills.</Typography>
                        </div>
                    </Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} pt={2} pb={8} alignItems={{ xs: 'center', md: 'left' }}>
                        <div>
                            <LocalCafeIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                        </div>
                        <div>
                            <Typography variant='h4' fontWeight='bold' gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' } }}>Refreshments</Typography>
                            <Typography variant='body2' sx={{ textAlign: { xs: 'center', md: 'left' } }}>Providing water bottles & refreshment on all journeys</Typography>
                        </div>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4} spacing={2}>
                    <Box display='flex' justifyContent='center' alignItems='center' width='100%' height='100%'>
                        <Image src={'/images/cars/bmw-5-3.jpg'} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt={'Mercedes-e-2'} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} spacing={2}>
                    <Stack direction={{ xs: 'column', md: 'row' }} flexDirection={{ xs: 'column-reverse', md: 'inherit' }} spacing={2} pt={2} pb={8} justifyContent={{ xs: 'center', md: 'right' }} alignItems={{ xs: 'center', md: 'left' }}>
                        <div>
                            <Typography variant='h4' fontWeight='bold' gutterBottom sx={{ textAlign: { xs: 'center', md: 'right' } }}>100% Customer Satisfaction</Typography>
                            <Typography variant='body2' sx={{ textAlign: { xs: 'center', md: 'right' } }}>Our wealth is our happy customers. At Royal Executive Cars i.e. Royal Taxi Bracknell, we aim at providing a very high standard of services. That’s why we are highly rated among Bracknell Taxis</Typography>
                        </div>
                        <div>
                            <ThumbUpOffAltIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                        </div>
                    </Stack>
                    <Stack direction={{ xs: 'column', md: 'row' }} flexDirection={{ xs: 'column-reverse', md: 'inherit' }} spacing={2} pt={2} pb={8} justifyContent={{ xs: 'center', md: 'right' }} alignItems={{ xs: 'center', md: 'left' }}>
                        <div>
                            <Typography variant='h4' fontWeight='bold' gutterBottom sx={{ textAlign: { xs: 'center', md: 'right' } }}>We would travel that extra mile</Typography>
                            <Typography variant='body2' sx={{ textAlign: { xs: 'center', md: 'right' } }}>Once you are in one of our Royal Executive Cars i.e. Royal Taxi Bracknell, you are in safe hands. We will make you feel like you are travelling in your own car</Typography>
                        </div>
                        <div>
                            <AddRoadIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                        </div>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}
