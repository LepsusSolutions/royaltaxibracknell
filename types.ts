type TContactUsEmail = {
    name: string
    email: string
    phone: string
    message: string
    city: string
    agreeTerms?: boolean
}

type TBookATaxiForm = {
    name: string
    email: string
    phone: string
    passengers: number,
    fromLocation: string,
    toLocation: string,
    pickUpDate: number,
    pickUpTime: number,
    message: string
    flightNumber?: string | 'N//A'
    agreeTerms?: boolean
}

type TBookingData = {
    name: string
    email: string
    phone: string
    passengers: number,
    fromLocation: string,
    toLocation: string,
    pickUpDate: string,
    pickUpTime: string,
    message: string
    flightNumber?: string | 'N/A'
}