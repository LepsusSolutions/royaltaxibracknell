import React from 'react'
import Title1 from '@/components/Titles/Title1'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Section4() {
    const items = [
        { title: 'Gallery', url: '/gallery' },
        { title: 'About us', url: '/about' },
        { title: 'Contact us', url: '/contact' },
        { title: 'Terms & Conditions', url: '/terms-conditions' },
        { title: 'Privacy & Policy', url: '/privacy-policy' }
    ]
    return (
        <Box sx={{ p: 2 }}>
            <Title1 title='CONTACT INFO' textColor='lightGrey' variation='h6' />
            <Box sx={style}>
                <MyLocationIcon />
                <Box>
                    <Typography variant='body2'>Address</Typography>
                    <Typography variant='body2'>{process.env.NEXT_PUBLIC_BUSINESS_ADDRESS}</Typography>
                </Box>
            </Box>
            <Box sx={style}>
                <PhoneIcon />
                <Box>
                    <Typography variant='body2'>Phone</Typography>
                    <Typography variant='body2'>{process.env.NEXT_PUBLIC_BUSINESS_PHONE1}</Typography>
                    <Typography variant='body2'>{process.env.NEXT_PUBLIC_BUSINESS_PHONE2}</Typography>
                </Box>
            </Box>
            <Box sx={style}>
                <EmailIcon />
                <Box>
                    <Typography variant='body2'>Email</Typography>
                    <Typography variant='body2'>{process.env.NEXT_PUBLIC_BUSINESS_EMAIL}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

const style = {
    display: 'flex',
    color: 'lightgrey',
    gap: 4,
    pt: 2,
    px: 2
}
