'use client'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
//import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps'
import React, { useState } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useForm } from "react-hook-form"
import Hero1 from '@/components/Hero/Hero1'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Social from '@/components/Widgets/Social'
import { sendContactUsEmail } from '@/controller/email'
import Divider from '@mui/material/Divider'

export default function Contact() {
    const { handleSubmit, register, formState: { errors }, reset, watch } = useForm({ defaultValues: { name: '', email: '', phone: '', city: '', message: '', agreeTerms: false } })
    const onSubmit = async (data: TContactUsEmail) => {
        await sendContactUsEmail({ name: data.name, email: data.email, phone: data.phone, city: data.city, message: data.message })
            .then((res) => {
                if (res.success)
                    setEmailSent({ success: true, error: false })
                else if (res.error)
                    setEmailSent({ success: false, error: true })
                reset()
            })
    }

    const [emailSent, setEmailSent] = useState({ success: false, error: false })

    return (
        <div>
            <Hero1 title={'Contact us'} imageURL={'/images/banner/contact2.jpg'} vertical='center' />
            <Box maxWidth='lg' mx='auto' my={4}>
                <Grid container spacing={{ md: 4 }} marginY={4}>
                    <Grid item xs={12} lg={8}>
                        <Box sx={{ border: 1, backgroundColor: 'lightBackground1.main', borderColor: 'lightGrey', paddingY: 4, paddingX: { xs: 2, md: 8 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <Typography variant='h4' textAlign={'center'} fontWeight='bold' >General Enquiries</Typography>
                            {emailSent.success && <Alert severity="success">Thank you for contacting us. We have received your email successfully. We will reach out to you within the next 24 hours.</Alert>}
                            {emailSent.error && <Alert severity="error">Error sending email</Alert>}

                            {/* Email form */}
                            <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="on" >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} >
                                        <TextField {...register('name', { required: { value: true, message: 'Name is required' } })} label="" placeholder='Enter Name' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                        {errors.name && <Typography variant='body2' color={'error.main'}>{errors.name?.message}</Typography>}
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <TextField {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } })} label="" placeholder='Enter Email' variant="outlined" type='email' sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                        {errors.email && <Typography variant='body2' color={'error.main'}>{errors.email?.message}</Typography>}
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <TextField {...register('phone', { required: { value: true, message: 'Phone number is required' } })} type='number' label="" placeholder='Enter Phone number' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                        {errors.phone && <Typography variant='body2' color={'error.main'}>{errors.phone?.message}</Typography>}
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <TextField {...register('city', { required: { value: true, message: 'City is required' } })} label="" placeholder='Enter City' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                        {errors.city && <Typography variant='body2' color={'error.main'}>{errors.city?.message}</Typography>}
                                    </Grid>
                                    <Grid item xs={12} >
                                        <TextField {...register('message', { required: 'Message is required' })} inputMode='numeric' multiline rows={8} label="" placeholder='Enter Message' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                        {errors.message && <Typography variant='body2' color={'error.main'}>{errors.message?.message}</Typography>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControlLabel required control={<Checkbox {...register('agreeTerms', {
                                            required: { value: true, message: 'Please tick to agree our terms and conditions.' }
                                        })}
                                            disabled={emailSent.success || emailSent.error} />}
                                            label={<Typography
                                                component='span'
                                                variant='body2'>I agree that my submitted data is being collected and stored.
                                            </Typography>
                                            } />
                                        {errors.agreeTerms && <Typography variant='body2' color={'error.main'}>{errors.agreeTerms?.message}</Typography>}
                                        <Alert severity="info">We will not share your personal details with any third party</Alert>
                                    </Grid>
                                </Grid>
                                <Button fullWidth variant='contained' type='submit' sx={{ marginY: 2 }} disabled={emailSent.success || emailSent.error}>Send</Button>
                            </Box>
                        </Box>
                    </Grid>
                    {/* Contact Info */}
                    <Grid item xs={12} lg={4}>
                        <Box sx={{ border: 1, borderColor: 'lightgrey', padding: 4 }}>
                            <Box py={2}>
                                <Typography sx={{ textAlign: 'center', color: 'primary.main' }}>HOW CAN WE HELP YOU?</Typography>
                                <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 'bold' }}>Any Questions?</Typography>
                                <Typography variant='body2' sx={{ textAlign: 'center', py: 2 }}>If you have any comments, suggestions or questions, please do not hesitate to contact us. Our high-quality office staff will help you and answer all your questions.</Typography>
                            </Box>
                            <Divider />
                            {/* <Alert severity="warning"><strong>Important!</strong> Please ring us to make an appointment before visiting.</Alert> */}
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar >
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                                            <MyLocationIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Address" secondary="95, Swaledale, Bracknell, Berkshire RG12 7EU" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                                            <PhoneIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Phone" secondary={<React.Fragment><Typography variant='body2' component="span">+ 44 1344 303 444<br /> + 44 7484 934 500</Typography></React.Fragment>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                                            <EmailIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Email" secondary="book@royaltaxibracknell.co.uk" />
                                </ListItem>
                            </List>
                            <Social />
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {/* 
            <Box sx={{ marginTop: 4, width: '100vw', height: 400 }}>
                <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
                    <Map
                        zoom={16}
                        center={mapPosition}
                        disableDefaultUI={true}
                        mapId={'e56980411ff1289c'}
                    >
                        <AdvancedMarker position={mapPosition} />
                    </Map>
                </APIProvider>
            </Box> */}
        </div >
    )
}