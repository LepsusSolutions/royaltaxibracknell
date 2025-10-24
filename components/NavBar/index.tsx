'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Menu, MenuItem, colors } from '@mui/material'
import { usePathname, useRouter } from 'next/navigation'
import { AccountCircle } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@mui/material/Modal'
import ListItemIcon from '@mui/material/ListItemIcon'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import CloseIcon from '@mui/icons-material/Close'
import Stack from '@mui/material/Stack'

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = '75vw';
const navItems = [
    { text: 'HOME', url: '/' },
    { text: 'GET A TAXI', url: '/get-a-taxi' },
    { text: 'REVIEWS', url: '/customer-reviews' },
    { text: 'CONTACT US', url: '/contact' },
    { text: 'ABOUT US', url: '/about' },
];

export default function DrawerAppBar(props: Props) {
    const router = useRouter()
    const path = usePathname()

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const [selectedMenu, setSelectedMenu] = React.useState(path)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)



    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    // };

    // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const [modalOpen, setModalOpen] = React.useState(false)

    // React.useEffect(() => {
    //     if (!sessionStorage.getItem('showCustomerNotice')) {
    //         setModalOpen(true)
    //         sessionStorage.setItem('showCustomerNotice', 'true');
    //     }
    // }, [])

    return (
        <React.Fragment>
            {/* Large Screen Menu */}
            <AppBar component="nav" position='sticky' sx={{ backgroundColor: 'white' }}>
                <Toolbar sx={{ maxWidth: 'xl', mx: 'auto', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'left' }, width: { xs: '100%', md: 'auto' } }}>
                        <Box sx={{ display: { md: 'none' }, position: { xs: 'absolute', md: 'relative' }, left: 0 }}>
                            <IconButton
                                color="secondary"
                                aria-label="open drawer"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon fontSize='large' />
                            </IconButton>
                        </Box>

                        {/* Logo/Logo Text */}
                        <Box>
                            <Link href='/'>
                                <Image unoptimized src={'/images/site/logo-black.png'} priority alt={process.env.NEXT_PUBLIC_BUSINESS_NAME as string} width={140} height={71} onClick={() => router.push('/')} />
                            </Link>
                        </Box>
                    </Box>
                    {/* Menu items */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: { sm: 1 }, justifyContent: { md: 'center' }, alignItems: { md: 'center' }, gap: 2 }}>
                        {navItems.map((item, index) => (
                            <Button onClick={() => {
                                setSelectedMenu(item.text)
                                router.push(item.url)
                            }} key={index} variant={(path === item.url) ? 'contained' : 'text'} size='small'>
                                <Typography variant='body2'>{item.text}</Typography>
                            </Button>
                        ))}
                    </Box>

                    {/* List menu - Auth (user) */}
                    {/* <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Button onClick={() => router.push('/get-a-quote')} variant='contained' >Get a Quote</Button>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color='secondary'
                        >
                            <AccountCircle fontSize='large' />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </Box> */}
                </Toolbar>
            </AppBar>

            {/* Drawer - Mobile Menu */}
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `calc(${drawerWidth} - 20px)` },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <Box sx={{ display: 'flex', px: 4, alignItems: 'center' }}>
                            <Box sx={{ flexGrow: 1, my: 4, display: 'flex', justifyContent: 'center' }}>
                                <Image unoptimized src={'/images/site/logo-black.png'} priority alt={process.env.NEXT_PUBLIC_BUSINESS_NAME as string} width={140} height={71} onClick={() => router.push('/')} />
                            </Box>
                            {/* <Typography variant="h6" sx={{ flexGrow: 1, my: 4 }}>
                                MUI
                            </Typography> */}
                        </Box>
                        <Divider sx={{ borderColor: 'secondary.light' }} />
                        <Box flexGrow={1}>
                            <List disablePadding >
                                {navItems.map((item, index) => (
                                    <Box key={index}>
                                        <ListItem disablePadding onClick={() => router.push(item.url)}>
                                            <ListItemButton>
                                                <Box display='flex' justifyContent='center' alignItems='center' width='100%'>
                                                    <Button variant={item.text === 'GET A TAXI' ? 'contained' : 'text'} size='small'>
                                                        <ListItemText primary={item.text} />
                                                    </Button>
                                                </Box>
                                            </ListItemButton>
                                        </ListItem>
                                        {/* <Divider sx={{ borderBottom: '1px dashed', borderColor: 'secondary.light' }} /> */}
                                    </Box>
                                ))}
                                <Divider sx={{ borderColor: 'secondary.light' }} />
                            </List>
                        </Box>
                        {/* Book Now */}
                        <Box sx={{ backgroundColor: 'success.main', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end', py: 4 }}>
                            <Typography variant='h4' sx={{ color: 'white', p: 2, fontWeight: 'bold', }}>Book Now</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                                <PhoneIcon sx={{ fontSize: 24, color: 'white' }} />
                                <Link href={'tel: +44 1344 303 444'} className='unstyledLink'><Typography variant='body2' sx={{ color: 'white', fontWeight: 'bold', fontSize: 24 }}>01344 303 444</Typography></Link>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
                                <EmailIcon sx={{ fontSize: 24, color: 'white' }} />
                                <Link href={'/get-a-taxi'} className='unstyledLink'><Typography color='white' variant='body2'>book@royaltaxibracknell.co.uk</Typography></Link>
                            </Box>
                        </Box>
                    </Box >
                </Drawer>
            </nav>

            {/* Modal */}
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    minWidth: 360,
                    maxWidth: 500,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 2
                }}>
                </Box>
            </Modal>
        </React.Fragment>
    )
}
