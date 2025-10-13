'use client'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
//import { APIProvider, AdvancedMarker, Map } from '@vis.gl/react-google-maps'
import React, { useState } from 'react'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useForm, Controller } from "react-hook-form"
import FormControlLabel from '@mui/material/FormControlLabel'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/x-date-pickers'
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { getEarliestTime } from '@/lib/app'
import { createBooking } from '@/controller/booking'
import { useRouter } from 'next/navigation'

export default function GetATaxi() {

    const earliestTime = getEarliestTime()

    const { handleSubmit, register, control, formState: { errors }, } = useForm<TBookATaxiForm>({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            passengers: 1,
            fromLocation: '',
            toLocation: '',
            pickUpDate: Date.now(),
            pickUpTime: earliestTime,
            message: '',
            flightNumber: '',
            agreeTerms: false,
        }
    })

    const onSubmit = async (data: TBookATaxiForm) => {
        setLoading(true)
        await createBooking({
            name: data.name,
            email: data.email,
            phone: data.phone,
            passengers: data.passengers,
            fromLocation: data.fromLocation,
            toLocation: data.toLocation,
            pickUpDate: data.pickUpDate,
            pickUpTime: data.pickUpTime,
            flightNumber: data.flightNumber,
            message: data.message
        })
            .then((res) => {

                if (res.error)
                    setEmailSent({ success: true, error: false })
                if (res.success)
                    setEmailSent({ success: true, error: false })
                setLoading(false)
            })
            .catch((e) => console.error(e))

    }

    const [emailSent, setEmailSent] = useState({ success: false, error: false })
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    return (
        <div>
            <Grid container spacing={{ md: 4 }} marginY={4}>
                <Grid>
                    <Box sx={{ pb: 4 }}>
                        <Typography textAlign='center' color='primary' >CALL US AND MAKE A BOOKING NOW</Typography>
                        <Stack display='flex' direction='row' spacing={4} justifyContent='center' alignItems='center' py={4}>
                            <PhoneInTalkIcon sx={{ fontSize: 64, color: 'secondary.main' }} />
                            <Box>
                                <Typography textAlign='center' variant='h3' fontWeight='bold' >01344 303 444</Typography>
                                <Typography textAlign='center' variant='h3' fontWeight='bold' >07484 934 500</Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Box sx={{ border: 1, backgroundColor: 'lightBackground1.main', borderColor: 'lightGrey', paddingY: 4, paddingX: { xs: 2, md: 8 }, display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <Typography textAlign='center' color='primary' variant='body2' fontWeight='bold'>ENJOY A COMFORTABLE JOURNEY</Typography>
                        <Typography textAlign='center' variant='h3' fontWeight='bold' >Book a Royal Taxi Online</Typography>
                        {emailSent.success && <Alert severity="success">Thank you for contacting us. We have received your booking successfully. We will reach out to you shortly.</Alert>}
                        {emailSent.error && <Alert severity="error">Error sending email</Alert>}
                        {emailSent.error || emailSent.success && <Button onClick={() => router.push('/')} variant='contained'>&lt;&lt; Home</Button>}

                        {/* Book a taxi form */}
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="on" >
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6} >
                                    <TextField {...register('name', { required: 'Name is required' })} label="" placeholder='Enter Name' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                    {errors.name && <Typography variant='body2' color={'error.main'}>{errors.name?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } })} label="" placeholder='Enter Email' variant="outlined" type='email' sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                    {errors.email && <Typography variant='body2' color={'error.main'}>{errors.email?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField {...register('phone', { required: 'Phone number is required' })} type='number' label="" placeholder='Enter Phone number' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                    {errors.phone && <Typography variant='body2' color={'error.main'}>{errors.phone?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField select defaultValue={1} {...register('passengers', { required: 'Number of passengers required' })} disabled={emailSent.success || emailSent.error} fullWidth variant="outlined" label="Enter number of passengers" >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={6}>6</MenuItem>
                                    </TextField>
                                    {errors.passengers && <Typography variant='body2' color={'error.main'}>{errors.passengers?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField {...register('fromLocation', { required: 'Pick up location is required' })} label="" placeholder='Enter pickup location' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                    {errors.fromLocation && <Typography variant='body2' color={'error.main'}>{errors.fromLocation?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField {...register('toLocation', { required: 'Drop off location is required' })} label="" placeholder='Enter drop off location' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                    {errors.toLocation && <Typography variant='body2' color={'error.main'}>{errors.toLocation?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Controller
                                        name="pickUpDate"
                                        control={control}
                                        render={({ field }) =>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    {...field}  //values=> value, onChange, ref, onBlur...
                                                    value={dayjs(field.value)}
                                                    disablePast
                                                    disabled={emailSent.success || emailSent.error}
                                                    sx={{ width: '100%' }}
                                                />
                                            </LocalizationProvider>
                                        }
                                        rules={{ required: 'Pick up date is required' }}
                                    />
                                    {errors.pickUpDate && <Typography variant='body2' color={'error.main'}>{errors.pickUpDate?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Controller
                                        name="pickUpTime"
                                        control={control}
                                        render={({ field }) =>
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DesktopTimePicker
                                                    {...field}
                                                    value={dayjs(field.value)}
                                                    disabled={emailSent.success || emailSent.error}
                                                    sx={{ width: '100%' }}
                                                />
                                            </LocalizationProvider>
                                        }
                                        rules={{ required: 'Pick up time is required' }}
                                    />
                                    {errors.pickUpTime && <Typography variant='body2' color={'error.main'}>{errors.pickUpTime?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <TextField {...register('flightNumber')} label="" placeholder='Enter Flight Number' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                    {errors.flightNumber && <Typography variant='body2' color={'error.main'}>{errors.flightNumber?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField {...register('message', { required: 'Message is required' })} multiline rows={8} label="" placeholder='Enter Message' variant="outlined" sx={{ width: '100%', backgroundColor: 'white' }} disabled={emailSent.success || emailSent.error} />
                                    {errors.message && <Typography variant='body2' color={'error.main'}>{errors.message?.message}</Typography>}
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel required control={<Checkbox {...register('agreeTerms', {
                                        required: 'Please tick to agree our terms and conditions.'
                                    }
                                    )}
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
                            <Button fullWidth variant='contained' type='submit' sx={{ marginY: 2 }} disabled={emailSent.success || emailSent.error}>{loading ? 'Please wait...' : 'Book Now'}</Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

        </div>
    )
}
