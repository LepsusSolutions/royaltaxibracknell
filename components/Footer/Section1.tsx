'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import React from 'react'
import GoogleIcon from '@mui/icons-material/Google'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import { motion } from "framer-motion"
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

export default function Section1() {

    return (
        <div>
            <Box sx={{ px: 2 }}>
                <Image src={'/images/site/logo-white.png'} priority alt={'Sanu Motors Ltd.'} width={140} height={70} />
            </Box>
            <Box sx={{ px: 4 }}>
                <Typography color='lightGrey' variant='body2'>
                    At Royal Executive Cars, we are passionate about creating an ultimately satisfied customer base. We believe, the service quality is the key to thrive in the modern competitive market.
                </Typography>
            </Box>
            <Box sx={{ p: 4, display: 'flex', alignItems: 'center', gap: 4, color: 'lightGrey' }}>
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href={process.env.NEXT_PUBLIC_BUSINESS_GOOGLE as Url} target='_blank' className='unstyledLink'><GoogleIcon fontSize='large' /></Link>
                </motion.div>
                {/* <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href={process.env.NEXT_PUBLIC_BUSINESS_INSTAGRAM as Url} target='_blank' className='unstyledLink'><InstagramIcon fontSize='large' /></Link>
                </motion.div> */}
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Link href={process.env.NEXT_PUBLIC_BUSINESS_FACEBOOK as Url} target='_blank' className='unstyledLink'><FacebookIcon fontSize='large' /></Link>
                </motion.div>
            </Box>
        </div >
    )
}
