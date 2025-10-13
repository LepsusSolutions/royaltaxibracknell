import Box from '@mui/material/Box'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Divider from '@mui/material/Divider'
import Title1 from '@/components/Titles/Title1'
import { Typography } from '@mui/material'

export default function Section2() {
    const items = [
        { title: 'Home', url: '/' },
        { title: 'About us', url: '/about' },
        { title: 'Contact us', url: '/contact' },
        { title: 'Get a Taxi', url: '/get-a-taxi' },
        { title: 'Privacy & Policy', url: '/privacy-and-policy' }
    ]
    return (
        <Box sx={{ p: 2 }}>
            <Title1 title='HOW TO PAY' textColor='lightGrey' variation={'h6'} />
            <Typography color='white' fontWeight='bold' p={1}>iZettle Payments</Typography>
            <Image src={'/images/site/iZettle-logo.png'} width={260} height={114} alt={'iZettle Payments'} />
            <Typography color='white' variant='body2'>You can make your payments to the driver using iZettle payments.</Typography>
        </Box>
    )
}
