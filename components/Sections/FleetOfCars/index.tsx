'use client'

import "react-multi-carousel/lib/styles.css"
import Image from 'next/image'
import React from 'react'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Slider from "react-slick"

var settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 3000,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3
            }
        },
    ]
}

export default function FleetOfCars() {
    const style = {
        imageStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '300px',
            width: 'auto',
        }
    }
    return (
        <Box sx={{ overflow: 'hidden' }}>
            <Box>
                <Typography gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold', textAlign: 'center' }}>FOR A COMFORTABLE JOURNEY</Typography>
                <Typography variant="h2" gutterBottom sx={{ textAlign: 'center', fontWeight: 900 }}>Our Fleet of Vehicles</Typography>
            </Box>

            <Slider {...settings}>
                <Box sx={style.imageStyle}><Image src={"/images/cars/fleet1.jpg"} width={420} height={236} alt={"Fleet of cars - Royal Executive Cars"} /></Box>
                <Box sx={style.imageStyle}><Image src={"/images/cars/fleet2.jpg"} width={420} height={277} alt={"Fleet of cars - Royal Executive Cars"} /></Box>
                <Box sx={style.imageStyle}><Image src={"/images/cars/fleet3.jpg"} width={420} height={199} alt={"Fleet of cars - Royal Executive Cars"} /></Box>
                <Box sx={style.imageStyle}><Image src={"/images/cars/fleet4.jpg"} width={420} height={108} alt={"Fleet of cars - Royal Executive Cars"} /></Box>
                <Box sx={style.imageStyle}><Image src={"/images/cars/fleet5.jpg"} width={420} height={126} alt={"Fleet of cars - Royal Executive Cars"} /></Box>
                <Box sx={style.imageStyle}><Image src={"/images/cars/fleet6.jpg"} width={420} height={229} alt={"Fleet of cars - Royal Executive Cars"} /></Box>
            </Slider>
        </Box>
    )
}
