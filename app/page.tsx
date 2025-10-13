import Specialities from '@/components/Sections/Specialities'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import PlaceIcon from '@mui/icons-material/Place'
import LocalAirportIcon from '@mui/icons-material/LocalAirport'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi'
import CelebrationIcon from '@mui/icons-material/Celebration'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import React from 'react'
import GoingAbroad from '@/components/Sections/GoingAbroad'
import FleetOfCars from '@/components/Sections/FleetOfCars'
import HeroMain from '@/components/Hero/HeroMain'


export default function Home() {
  return (
    <div>
      <HeroMain />

      <Box maxWidth='lg' mx='auto' my={8} px={{ xs: 0, md: 0 }} display='flex' flexDirection='column' gap={8}>
        {/* What we offer */}
        <div>
          <Box>
            <Typography textAlign='center' color='primary'>WHAT WE OFFER</Typography>
            <Typography textAlign='center' variant='h1' fontWeight='bold' py={2}>Welcome to Royal Executive Cars, the leading Bracknell Taxi service.</Typography>
            <Typography textAlign='center' variant='body2' px={{ xs: 4, md: 32 }}>As the prominent Bracknell taxi service, Royal Executive Cars, in other words, Royal Taxi Bracknell is dedicated to providing you the friendliest and the most reliable service you would expect. Furthermore, our team of drivers is highly professional, fully licensed and well experienced. Hence, we guarantee that you will experience the most friendly and safer journey with us.</Typography>
          </Box>
          <Box my={8}>
            <Typography textAlign='center' color='primary'>THE LEADING BRACKNELL TAXI SERVICE IN BRACKNELL.</Typography>
            <Typography textAlign='center' variant='h1' fontWeight='bold' py={2}>Royal Executive Cars - Bracknell Taxi Service</Typography>
            <Typography textAlign='center' variant='body2' px={{ xs: 4, md: 32 }}>Royal Executive Cars, your Bracknell taxi service, can be defined as one of the safest taxi services in Bracknell. As we are leading among Bracknell taxis, we always thrive to provide the best possible service. As a result, Royal Taxi Bracknell regularly hear the best comments, appreciations and encouragement from our valued customers.</Typography>
          </Box>
          <Grid container>
            <Grid item xs={6} lg={2.4} display='flex' flexDirection='column' alignItems='center' p={2}>
              <PlaceIcon sx={{ fontSize: 96, color: 'primary.main' }} />
              <Typography variant='h5' fontWeight='bold'>Address Pickup</Typography>
              <Typography variant='body2'>If you need a taxi from Bracknell or a taxi to Bracknell, we are just a call away. 24/7 at your service…</Typography>
            </Grid>
            <Grid item xs={6} lg={2.4} display='flex' flexDirection='column' alignItems='center' p={2}>
              <LocalAirportIcon sx={{ fontSize: 96, color: 'primary.main' }} />
              <Typography variant='h5' fontWeight='bold'>Airport/Seaport Transfers</Typography>
              <Typography variant='body2'>Royal Executive Cars i.e. Royal Taxi Bracknell, is specialised in 24 hours airport and seaport transfer service.</Typography>
            </Grid>
            <Grid item xs={6} lg={2.4} display='flex' flexDirection='column' alignItems='center' p={2}>
              <CelebrationIcon sx={{ fontSize: 96, color: 'primary.main' }} />
              <Typography variant='h5' fontWeight='bold'>Event Coverage</Typography>
              <Typography variant='body2'>This is our most popular service. At Royal Executive Cars i.e. Royal Taxi Bracknell we provide transfer services for both corporate and private events whenever you need a taxi in Bracknell.</Typography>
            </Grid>
            <Grid item xs={6} lg={2.4} display='flex' flexDirection='column' alignItems='center' p={2}>
              <MyLocationIcon sx={{ fontSize: 96, color: 'primary.main' }} />
              <Typography variant='h5' fontWeight='bold'>Local and Long Distance</Typography>
              <Typography variant='body2'>At Royal Executive Cars i.e. Royal Taxi Bracknell we offer you, local and long distance transfers to anywhere at any time.</Typography>
            </Grid>
            <Grid item xs={6} lg={2.4} display='flex' flexDirection='column' alignItems='center' p={2}>
              <LocalTaxiIcon sx={{ fontSize: 96, color: 'primary.main' }} />
              <Typography variant='h5' fontWeight='bold'>Taxi Tours</Typography>
              <Typography variant='body2'>
                Taxi Tours
                Visiting Bracknell and surrounding area in taxi? At Royal Executive Cars i.e. Royal Taxi Bracknell we offer family friendly taxi tours, Click here to find out more.</Typography>
            </Grid>
          </Grid>
        </div>

        {/* Our uniqueness */}
        <Grid container spacing={0} marginY={4} sx={{ backgroundColor: 'lightBackground.main' }}>
          <Grid item xs={12} lg={6}>
            <Image src={'/images/section/woman-booking-taxi.jpg'} height={0} width={0} sizes='100vh' style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={'royaltaxibracknell.co.uk'}></Image>
          </Grid>
          <Grid item xs={12} md={6} >
            <Box p={2}>
              <Typography color='primary.main' textAlign='center'>OUR UNIQUENESS</Typography>
              <Typography variant='h1' fontWeight='bold' textAlign='center' pt={4}>Why Choose Royal Executive Cars if you need a taxi in Bracknell?</Typography>
              <Typography p={2}>Royal Executive Cars, the prominent Bracknell Taxi service is your most trustworthy Bracknell Taxi Service.</Typography>
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

        {/* Specialities */}
        <Specialities />
      </Box>

      {/* Going abroad */}
      <div>
        <GoingAbroad />
      </div>

      {/* Fleet of cars */}
      <Box maxWidth='lg' mx='auto' mt={8}>
        <FleetOfCars />
      </Box>

      {/* Why choose us */}
      <Box maxWidth='lg' mx='auto' my={8} display='flex' flexDirection='column' alignItems='center' gap={8}>
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

      {/* Any questions */}
      <Box maxWidth='lg' mx='auto' my={8} display='flex' flexDirection='column' alignItems='center' gap={8}>
        <div>
          <Box>
            <Typography sx={{ textAlign: 'center', fontWeight: 'bold', color: 'primary.main' }}>WE LOVE TO HEAR FROM YOU!</Typography>
            <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 'bold' }}>Any Questions?</Typography>
            <Typography variant='body2' sx={{ textAlign: 'center', py: 2 }}>If you have any questions, comments or suggestions please do call us on our dedicated customer support line or just drop us an email. Our friendly customer service team would promptly assist you.</Typography>
            <Grid container>
              <Grid item xs={6} lg={4} display='flex' flexDirection='column' alignItems='center' p={2}>
                <PlaceIcon sx={{ fontSize: 96, color: 'primary.main' }} />
                <Typography variant='h5' fontWeight='bold'>OUR ADDRESS</Typography>
                <Typography variant='body2'>95, Swaledale, Bracknell, Berkshire RG12 7EU</Typography>
              </Grid>
              <Grid item xs={6} lg={4} display='flex' flexDirection='column' alignItems='center' p={2}>
                <LocalPhoneIcon sx={{ fontSize: 96, color: 'primary.main' }} />
                <Typography variant='h5' fontWeight='bold'>OUR PHONES</Typography>
                <Typography variant='body2' display='inline'>+ 44 1344 303 444</Typography>
                <Typography variant='body2' display='inline'>+ 44 7484 934 500</Typography>
              </Grid>
              <Grid item xs={6} lg={4} display='flex' flexDirection='column' alignItems='center' p={2}>
                <EmailIcon sx={{ fontSize: 96, color: 'primary.main' }} />
                <Typography variant='h5' fontWeight='bold'>OUR MAIL</Typography>
                <Typography variant='body2'>book@royaltaxibracknell.co.uk</Typography>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Box>
    </div>
  )
}
