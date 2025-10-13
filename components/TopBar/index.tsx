'use client'

import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import { Router } from 'next/router'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import Link from 'next/link'
import { Typography } from '@mui/material'

export default function TopBar() {
    const router = useRouter()
    return (
        <Box sx={{ width: '100%', backgroundColor: 'secondary.dark', py: 1 }}>
            <Box sx={{ maxWidth: 'xl', display: 'flex' }}>
                <Box sx={{ display: 'flex', gap: 1, marginX: 'auto' }}>
                    <EmailIcon sx={{ color: 'white' }} fontSize='small' />
                    <Typography color='white' variant='body2'>book@royaltaxibracknell.co.uk</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, marginX: 'auto' }}>
                    <PhoneIcon sx={{ color: 'white' }} fontSize='small' />
                    <Typography color='white' variant='body2' >01344 303 444</Typography>
                </Box>
            </Box>
        </Box>
    )
}