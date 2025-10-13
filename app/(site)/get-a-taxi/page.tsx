'use client'

import GetATaxi from '@/components/GetATaxi'
import Hero1 from '@/components/Hero/Hero1'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React from 'react'

export default function GetACab() {
    return (
        <div>
            <Hero1 title={'Get a Taxi'} imageURL={'/images/banner/get-a-taxi.jpg'} vertical='center' />
            <Box maxWidth='lg' mx='auto' my={8} px={{ xs: 2, md: 0 }}>
                {/* Get a Taxi form */}
                <GetATaxi />

                {/* Why choose us */}
                <Grid container spacing={2} marginY={4} sx={{ backgroundColor: 'lightBackground.main' }}>
                    <Grid item xs={12} lg={6}>
                        <Image src={'/images/section/smiling-blonde-woman-talking-phone.jpg'} height={0} width={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt={'About us'}></Image>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Box p={4}>
                            <Typography color='primary.main' textAlign='center'>OUR UNIQUENESS</Typography>
                            <Typography variant='h1' fontWeight='bold' textAlign='center' pt={4}>Why Choose Us?</Typography>
                            <ul>
                                <li><Typography variant='body2'>Reliability and Punctuality Guaranteed!</Typography></li>
                                <li><Typography variant='body2'>High spec executive cars &40;Saloon & MPV&41; well maintained and immaculate interior.</Typography></li>
                                <li><Typography variant='body2'>Fully vetted experienced drivers with friendly, polite and personalised service.</Typography></li>
                                <li><Typography variant='body2'>24/7 Coverage.</Typography></li>
                                <li><Typography variant='body2'>Executive service for standard rates.</Typography></li>
                                <li><Typography variant='body2'>Fully licensed and DBS checked driver.</Typography></li>
                            </ul>
                            <Box px={4}>
                                <Button href='/about' variant='contained'>Learn more</Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid >
            </Box>
        </div>
    )
}
