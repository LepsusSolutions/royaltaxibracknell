import Box from '@mui/material/Box'
import { motion } from 'framer-motion'
import { Url } from 'next/dist/shared/lib/router/router'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import GoogleIcon from '@mui/icons-material/Google'
import Link from 'next/link'
import React from 'react'

export default function index() {
    return (
        <Box sx={{ p: 4, display: 'flex', alignItems: 'center', color: 'lightGrey' }}>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href={process.env.NEXT_PUBLIC_BUSINESS_FACEBOOK as Url} target='_blank' className='unstyledLink'><FacebookIcon fontSize='large' sx={{ color: 'secondary' }} /></Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
                <Link href={process.env.NEXT_PUBLIC_BUSINESS_GOOGLE as Url} target='_blank' className='unstyledLink' ><GoogleIcon fontSize='large' sx={{ color: 'secondary' }} /></Link>
            </motion.div>
        </Box>
    )
}
