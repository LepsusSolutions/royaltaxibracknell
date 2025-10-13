import Hero1 from '@/components/Hero/Hero1'
import Testimonials from '@/components/Sections/Testimonials'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import Specialities from '@/components/Sections/Specialities'

export default function Reviews() {
    return (
        <div>
            <Hero1 title={'Reviews'} imageURL={'/images/banner/reviews.jpg'} vertical='center' />
            <Box sx={{ backgroundColor: 'lightBackground.main', py: 4 }}>

                <Box maxWidth='md' mx='auto' my={8} px={{ xs: 2, md: 0 }}>
                    <Typography color='primary.main' textAlign='center'>WHAT CLIENTS SAY ABOUT US</Typography>
                    <Typography variant='h3' fontWeight='bold' textAlign='center' pt={4}>Testimonials</Typography>
                    <Testimonials />
                </Box>
            </Box>

            {/* Specialities */}
            <Specialities />
        </div>
    )
}
