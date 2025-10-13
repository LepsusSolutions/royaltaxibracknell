'use client'

import FormatQuoteIcon from '@mui/icons-material/FormatQuote'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import React from 'react'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

const comments = [
    {
        text: "We used your taxi service for the first time after seeing good reports online. Very efficient, and smart driver with a very clean vehicle. We want to say a big thank you for excellent service and we would definitely recommend to friends and family and use your service again. You are the best, keep it going that way.",
        name: 'SHELBY BLAKE, GUILDFORD'
    },
    {
        text: 'I am happy to send you this message! Your dispatcher and the driver went out of their way to help us tonight. We left a cell phone in the taxi and they were able to locate it and returned it. Made our night to get it back! Thank you! Your team is perfect. I am really satisfied and will recommend you to my friends.',
        name: 'LOREN JACOBS, LONDON'
    },
    {
        text: 'I can highly recommend this taxi service. The driver was on time and even waited for us for a few minutes when we were late since my watch had lost time. The drive to the airport was quick and one felt completely safe this taxi. The vehicle was spotlessly clean and smelled fantastic. All in all, good, reliable service.',
        name: 'OLIVER HODGES, BRACKNELL'
    }
]

export default function Testimonials() {
    return (
        <Box my={4} px={{ xs: 2, md: 0 }}>
            <Box display='flex' alignItems='center' justifyContent='center' m={2}>
                <Box sx={{ backgroundColor: 'primary.main', width: 48, height: 48, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <FormatQuoteIcon sx={{ fontSize: 48, color: 'white' }} />
                </Box>
            </Box>
            <Carousel
                responsive={responsive}
                showDots={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                infinite={true}
                ssr={true}
                arrows={false}
            >
                {
                    comments.map((item, index) => (
                        <Box key={index} maxWidth='sm' mx='auto' py={4}>
                            <Typography variant="body2" component="div" py={2} textAlign='center'>{item.text}</Typography>
                            <Typography variant="body2" component="div" py={2} textAlign='center' color='primary.main' fontWeight='bold'>{item.name}</Typography>
                        </Box>
                    ))
                }
            </Carousel>
        </Box>
    )
}



/*
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length)
    }

            <Typography variant="body2" component="div" py={2} textAlign='center'>{texts[currentIndex].text}</Typography>
            <Typography variant="body2" component="div" py={2} textAlign='center' color='primary.main' fontWeight='bold'>{texts[currentIndex].name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                <Button variant="contained" color="primary" onClick={handlePrevious} sx={{ mr: 1 }}>Previous</Button>
                <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
            </Box>
*/