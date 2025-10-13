import Hero1 from '@/components/Hero/Hero1'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined'
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined'
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div>
            <Hero1 title={'About us'} imageURL={'/images/banner/about-us.jpg'} vertical='center' />
            <Box maxWidth='lg' mx='auto' my={8} px={{ xs: 2, md: 0 }}>
                <Divider>RIDE SMOOTH</Divider>
                <Box py={8}>
                    <p>Royal Executive Cars is an independent travel solutions provider,&nbsp;based in Bracknell.</p>
                    <p>We are dedicated in offering professional travel services for both corporate and individual clients. We are passionate about our services. Safety&nbsp;and Comfort of our customers is our absolute basic standard.</p>
                    <p>We are always prepared to give our clients an unbeatable standard of service with pickups available nationwide. We do provide transfers to all major UK airports, sea ports, event venues etc. You can rely on us to get to wherever you want to be in the height of comfort and luxury. We provide 24-hour service 365 days of the year.</p>
                    <p>All our drivers are licensed and fully vetted. They have been around in the industry for many years and they will do whatever it takes to make sure that your journey from start to finish will be safe and comfortable. Our fleet of cars includes Mercedes E class, BMW 5 series and 7 seaters to suit your needs. All our cars are owned by us and they are under constant inspection, so that we can ensure they are in great condition and truly ready for your next journey&hellip;&hellip;.</p>
                    <p>We will always go that extra mile to make your journey a special one which you will remember. Come and travel with Royal Executive Cars and enjoy a &lsquo;Royal like&rsquo; ride.</p>
                </Box>
                <Box>
                    <Typography textAlign='center' color='primary'>FEEL THE DIFFERENCE</Typography>
                    <Typography textAlign='center' variant='h3' fontWeight='bold' py={2}>Why Choose Us?</Typography>
                    <Grid container>
                        <Grid item xs={12} md={4} spacing={2}>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} pt={2} pb={8} alignItems={{ xs: 'center', md: 'left' }}>
                                <div>
                                    <AccessTimeIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                                </div>
                                <div>
                                    <Typography variant='h4' fontWeight='bold' sx={{ textAlign: { xs: 'center', md: 'left' } }}>Punctuality</Typography>
                                    <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }}>When you book a Royal Executive Car, we will never let you down. We pick you up on time and drop you off on time.</Typography>
                                </div>
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} pt={2} pb={8} alignItems={{ xs: 'center', md: 'left' }}>
                                <div>
                                    <ThumbUpOffAltIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                                </div>
                                <div>
                                    <Typography variant='h4' fontWeight='bold' sx={{ textAlign: { xs: 'center', md: 'left' } }}>Quality</Typography>
                                    <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }}>High spec executive cars (Saloon & MPV) with immaculate condition. Well maintained inside and out side.</Typography>
                                </div>
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} pt={2} pb={8} alignItems={{ xs: 'center', md: 'left' }}>
                                <div>
                                    <HandshakeOutlinedIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                                </div>
                                <div>
                                    <Typography variant='h4' fontWeight='bold' sx={{ textAlign: { xs: 'center', md: 'left' } }}>Reliability</Typography>
                                    <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }}>We are unbeaten on reliability. You and your loved ones will be safe throughout the journey.</Typography>
                                </div>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={4} spacing={2}>
                            <Box display='flex' justifyContent='center' alignItems='center' width='100%' height='100%'>
                                <Image src={'/images/cars/mercedes-e-2.jpg'} width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto' }} alt={'Mercedes-e-2'} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} spacing={2}>
                            <Stack direction={{ xs: 'column', md: 'row' }} flexDirection={{ xs: 'column-reverse', md: 'inherit' }} spacing={2} pt={2} pb={8} justifyContent={{ xs: 'center', md: 'right' }} alignItems={{ xs: 'center', md: 'left' }}>
                                <div>
                                    <Typography variant='h4' fontWeight='bold' sx={{ textAlign: { xs: 'center', md: 'right' } }}>Coverage</Typography>
                                    <Typography sx={{ textAlign: { xs: 'center', md: 'right' } }}>24/7 coverage around Bracknell area.</Typography>
                                </div>
                                <div>
                                    <DoneOutlineOutlinedIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                                </div>
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} flexDirection={{ xs: 'column-reverse', md: 'inherit' }} spacing={2} pt={2} pb={8} justifyContent={{ xs: 'center', md: 'right' }} alignItems={{ xs: 'center', md: 'left' }}>
                                <div>
                                    <Typography variant='h4' fontWeight='bold' sx={{ textAlign: { xs: 'center', md: 'right' } }}>Experienced Staff</Typography>
                                    <Typography sx={{ textAlign: { xs: 'center', md: 'right' } }}>Fully vetted, experienced drivers who provide a friendly, polite and personalised service.</Typography>
                                </div>
                                <div>
                                    <EmojiEventsOutlinedIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                                </div>
                            </Stack>
                            <Stack direction={{ xs: 'column', md: 'row' }} flexDirection={{ xs: 'column-reverse', md: 'inherit' }} spacing={2} pt={2} pb={8} justifyContent={{ xs: 'center', md: 'right' }} alignItems={{ xs: 'center', md: 'left' }}>
                                <div>
                                    <Typography variant='h4' fontWeight='bold' sx={{ textAlign: { xs: 'center', md: 'right' } }}>Reasonable Rates</Typography>
                                    <Typography sx={{ textAlign: { xs: 'center', md: 'right' } }}>At Royal Executive Cars we believe in trustworthiness. That’s why all our cars are metered, so the charges are transparent.</Typography>
                                </div>
                                <div>
                                    <AttachMoneyOutlinedIcon sx={{ color: 'primary.main', fontSize: 64 }} />
                                </div>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}
