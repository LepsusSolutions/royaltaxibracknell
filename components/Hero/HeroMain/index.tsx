'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Typography from '@mui/material/Typography'
import { motion } from "framer-motion"
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function HeroMain() {

    const settings = {
        dots: false,
        fade: true, //Change this to make a simeple slider
        autoplay: true,
        infinite: true,
        autoplaySpeed: 8000,
        speed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        pauseOnHover: false,
    }

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Slider {...settings}>
                <Box sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner/man-woman-sitting-in-taxi.jpeg')`,
                    height: 'calc(100vh - 120px)',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative'
                }} >
                    <Box sx={{ overflowX: 'hidden' }}>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.0 } }}>
                            <Typography sx={{ textAlign: 'center', color: 'white', fontSize: { xs: 32, md: 48 }, fontWeight: 'bold', pt: 8, textTransform: 'uppercase' }}>Your Journey is Our Priority</Typography>
                        </motion.div>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <Box display={{ xs: 'none', md: 'block' }}>
                                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                        <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, pt: 4 }}>BOOK YOUR TAXI ONLINE</Typography>
                                    </motion.div>
                                </Box>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.0 } }} >
                                    <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}><Button href='/get-a-taxi' variant='contained' size='large'>BOOK NOW</Button></Box>
                                    <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}>01344 303 444</Typography>
                                    <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}>07484 934 500</Typography>
                                </motion.div>
                            </Box>
                        </Box>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.5 } }}>
                            <Box sx={{ position: { xs: 'relative', lg: 'absolute' }, bottom: { lg: '15%' }, left: { lg: '5%', xl: '20%' }, pt: { xs: 8, lg: 0 } }}>
                                <motion.div
                                    animate={{ x: 0 }}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'left' }, fontSize: { xs: 20, lg: 24 } }}>Travel with Ease, Arrive with a Smile</Typography>
                                    </Box>
                                </motion.div>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'left' }, fontSize: { xs: 20, lg: 24 } }}>Professional Drivers, Personalized Service</Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                            <Box sx={{ position: { xs: 'relative', lg: 'absolute' }, bottom: { lg: '15%' }, right: { lg: '5%', xl: '20%' } }}>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'right' }, fontSize: { xs: 20, lg: 24 } }}>From Door-to-Door, We&apos;ve Got You Covered</Typography>
                                    </Box>
                                </motion.div>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'right' }, fontSize: { xs: 20, lg: 24 } }}>Reliable Rides, Every Time, Everywhere</Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>

                <Box sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner/woman-with-luggage-1.jpg')`,
                    height: 'calc(100vh - 120px)',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative'
                }} >
                    <Box>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.0 } }}>
                            <Typography sx={{ textAlign: 'center', color: 'white', fontSize: { xs: 32, md: 48 }, fontWeight: 'bold', pt: 8, textTransform: 'uppercase' }}>Your Journey is Our Priority</Typography>
                        </motion.div>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <Box display={{ xs: 'none', md: 'block' }}>
                                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                        <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, pt: 4 }}>BOOK YOUR TAXI ONLINE</Typography>
                                    </motion.div>
                                </Box>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.0 } }} >
                                    <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}><Button href='/get-a-taxi' variant='contained' size='large'>BOOK NOW</Button></Box>
                                    <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}>01344 303 444</Typography>
                                    <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}>07484 934 500</Typography>
                                </motion.div>
                            </Box>
                        </Box>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.5 } }}>
                            <Box sx={{ position: { xs: 'relative', lg: 'absolute' }, bottom: { lg: '15%' }, left: { lg: '5%', xl: '20%' }, pt: { xs: 8, lg: 0 } }}>
                                <motion.div
                                    animate={{ x: 0 }}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'left' }, fontSize: { xs: 20, lg: 24 } }}>Travel with Ease, Arrive with a Smile</Typography>
                                    </Box>
                                </motion.div>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'left' }, fontSize: { xs: 20, lg: 24 } }}>Professional Drivers, Personalized Service</Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                            <Box sx={{ position: { xs: 'relative', lg: 'absolute' }, bottom: { lg: '15%' }, right: { lg: '5%', xl: '20%' } }}>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'right' }, fontSize: { xs: 20, lg: 24 } }}>From Door-to-Door, We&apos;ve Got You Covered</Typography>
                                    </Box>
                                </motion.div>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'right' }, fontSize: { xs: 20, lg: 24 } }}>Reliable Rides, Every Time, Everywhere</Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>

                <Box sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner/woman-with-luggage-4.jpg')`,
                    height: 'calc(100vh - 120px)',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative'
                }} >
                    <Box>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.0 } }}>
                            <Typography sx={{ textAlign: 'center', color: 'white', fontSize: { xs: 32, md: 48 }, fontWeight: 'bold', pt: 8, textTransform: 'uppercase' }}>Your Journey is Our Priority</Typography>
                        </motion.div>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <Box display={{ xs: 'none', md: 'block' }}>
                                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                        <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, pt: 4 }}>BOOK YOUR TAXI ONLINE</Typography>
                                    </motion.div>
                                </Box>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.0 } }} >
                                    <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}><Button href='/get-a-taxi' variant='contained' size='large'>BOOK NOW</Button></Box>
                                    <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}>01344 303 444</Typography>
                                    <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}>07484 934 500</Typography>
                                </motion.div>
                            </Box>
                        </Box>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.5 } }}>
                            <Box sx={{ position: { xs: 'relative', lg: 'absolute' }, bottom: { lg: '15%' }, left: { lg: '5%', xl: '20%' }, pt: { xs: 8, lg: 0 } }}>
                                <motion.div
                                    animate={{ x: 0 }}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'left' }, fontSize: { xs: 20, lg: 24 } }}>Travel with Ease, Arrive with a Smile</Typography>
                                    </Box>
                                </motion.div>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'left' }, fontSize: { xs: 20, lg: 24 } }}>Professional Drivers, Personalized Service</Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                            <Box sx={{ position: { xs: 'relative', lg: 'absolute' }, bottom: { lg: '15%' }, right: { lg: '5%', xl: '20%' } }}>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'right' }, fontSize: { xs: 20, lg: 24 } }}>From Door-to-Door, We&apos;ve Got You Covered</Typography>
                                    </Box>
                                </motion.div>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'right' }, fontSize: { xs: 20, lg: 24 } }}>Reliable Rides, Every Time, Everywhere</Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>

                <Box sx={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/banner/woman-with-luggage-3.jpg')`,
                    height: 'calc(100vh - 120px)',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative'
                }} >
                    <Box>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.0 } }}>
                            <Typography sx={{ textAlign: 'center', color: 'white', fontSize: { xs: 32, md: 48 }, fontWeight: 'bold', pt: 8, textTransform: 'uppercase' }}>Your Journey is Our Priority</Typography>
                        </motion.div>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <Box display={{ xs: 'none', md: 'block' }}>
                                    <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                                        <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24, pt: 4 }}>BOOK YOUR TAXI ONLINE</Typography>
                                    </motion.div>
                                </Box>
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.0 } }} >
                                    <Box py={4} sx={{ display: 'flex', justifyContent: 'center' }}><Button href='/get-a-taxi' variant='contained' size='large'>BOOK NOW</Button></Box>
                                    <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}>01344 303 444</Typography>
                                    <Typography color={'white'} sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: 32, md: 48 } }}>07484 934 500</Typography>
                                </motion.div>
                            </Box>
                        </Box>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 1.5 } }}>
                            <Box sx={{ position: { xs: 'relative', lg: 'absolute' }, bottom: { lg: '15%' }, left: { lg: '5%', xl: '20%' }, pt: { xs: 8, lg: 0 } }}>
                                <motion.div
                                    animate={{ x: 0 }}
                                    transition={{ ease: "easeOut", duration: 0.5 }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'left' }, fontSize: { xs: 20, lg: 24 } }}>Travel with Ease, Arrive with a Smile</Typography>
                                    </Box>
                                </motion.div>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'left' }, fontSize: { xs: 20, lg: 24 } }}>Professional Drivers, Personalized Service</Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                            <Box sx={{ position: { xs: 'relative', lg: 'absolute' }, bottom: { lg: '15%' }, right: { lg: '5%', xl: '20%' } }}>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'right' }, fontSize: { xs: 20, lg: 24 } }}>From Door-to-Door, We&apos;ve Got You Covered</Typography>
                                    </Box>
                                </motion.div>
                                <motion.div animate={{ x: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', pl: { xs: 1, md: 0 }, gap: 1 }}>
                                        <DoubleArrowIcon sx={{ color: 'primary.main' }} />
                                        <Typography color={'white'} sx={{ fontWeight: 'bold', textAlign: { xs: 'left', lg: 'right' }, fontSize: { xs: 20, lg: 24 } }}>Reliable Rides, Every Time, Everywhere</Typography>
                                    </Box>
                                </motion.div>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </Slider>
        </Box>
    )
}
