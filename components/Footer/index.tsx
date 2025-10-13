import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

// const Grid = dynamic(() => import('@mui/material/Grid'))

export default function Footer() {

    return (
        <React.Fragment>
            {/* <FooterTop /> */}
            <Box sx={{ backgroundColor: 'darkBackground2.main', display: 'flex', justifyContent: 'center' }}>
                <Grid container sx={{ p: 2, maxWidth: 'xl' }}>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box>
                            <Section1 />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box>
                            <Section4 />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box>
                            <Section3 />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={3}>
                        <Box>
                            <Section2 />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, py: 2, backgroundColor: 'darkBackground2.main' }}>
                <Typography color='white' variant='body2'>Powered by <Link href='#' target='_self' className='unstyledLink'>Lepsus Solutions Ltd</Link>.</Typography>
            </Box>
            <Grid container justifyContent='center' alignItems='center' paddingY={4} sx={{ backgroundColor: 'secondary.dark' }}>
                <Typography sx={{ fontSize: '14px', color: 'grey.500' }}>
                    Copyright &copy; {process.env.NEXT_PUBLIC_BUSINESS_SINCE} - {new Date().getFullYear()} <Link href={"/about"} className='unstyledLink'>{process.env.NEXT_PUBLIC_BUSINESS_NAME}</Link>
                </Typography>
            </Grid>
        </React.Fragment>
    )
}
