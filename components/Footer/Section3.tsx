import Box from '@mui/material/Box'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import React from 'react'
import Link from 'next/link'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Title1 from '@/components/Titles/Title1'

export default function Section3() {
    const items = [
        { title: 'Home', url: '/' },
        { title: 'About us', url: '/about' },
        { title: 'Contact us', url: '/contact' },
        { title: 'Get a taxi', url: '/get-a-taxi' },
        { title: 'privacy and policy', url: '/privacy-and-policy' }
    ]
    return (
        <Box sx={{ p: 2 }}>
            <Title1 title='LINKS' textColor='lightGrey' variation={'h6'} />
            <List dense>
                {
                    items.map((i, index) =>
                        <div key={index}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ color: 'lightGrey' }}>
                                    <ListItemIcon sx={{ color: 'lightGrey' }}>
                                        <NavigateNextIcon />
                                    </ListItemIcon>
                                    <Link href={i.url} style={{ textDecoration: 'none', color: 'inherit' }}><ListItemText primary={i.title} sx={{ '&:hover': { color: 'primary.main' } }} /></Link>
                                </ListItemButton>
                            </ListItem>
                            {/* <Divider variant="middle" sx={{ backgroundColor: 'grey.700', borderBottom: '1px dashed' }} /> */}
                        </div>
                    )
                }
            </List>
        </Box>
    )
}
