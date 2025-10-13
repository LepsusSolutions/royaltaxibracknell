import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import Link from 'next/link'
import './style.css'
import Grid from '@mui/material/Grid'

export default function FooterTop() {
    return (
        <>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box className='footerTop' sx={{ backgroundColor: 'secondary.main' }}>
                        <Box>
                            <EmailIcon sx={{ color: 'black', fontSize: 120, position: 'absolute', left: -48, top: 4, opacity: 0.1 }} />
                            <EmailIcon fontSize='large' sx={{ color: 'white' }} />
                            <Typography variant='h4' color={'white'}>Email us</Typography>
                        </Box>
                        <Link href={'mailto:info@sanumotors.com'} className='unstyledLink'><Typography variant='h6' color={'white'}>info@sanumotors.com</Typography></Link>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box className='footerTop' sx={{ backgroundColor: 'secondary.dark' }}>
                        <Box>
                            <PhoneIcon sx={{ color: 'black', fontSize: 120, position: 'absolute', left: -48, top: 4, opacity: 0.1 }} />
                            <PhoneIcon fontSize='large' sx={{ color: 'white' }} />
                            <Typography variant='h4' color={'white'}>Hotline</Typography>
                        </Box>
                        <Typography variant='h6' color={'white'}>0755 102 1029</Typography>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

