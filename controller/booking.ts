'use server'

import { sendBookingEmailAdmin, sendBookingEmailCustomer } from "./email";

export async function createBooking({
    name,
    email,
    phone,
    passengers,
    fromLocation,
    toLocation,
    pickUpDate,
    pickUpTime,
    flightNumber,
    message }: TBookATaxiForm) {

    //Send email to admin
    return await sendBookingEmailAdmin({ name, email, phone, passengers, fromLocation, toLocation, pickUpDate, pickUpTime, flightNumber, message })
        .then(async (res) => {

            if (res.error) {
                return { success: false, error: true }
            }
            console.log(res)
            if (res.success) {
                //send email to customer
                return await sendBookingEmailCustomer({ name, email, phone, passengers, fromLocation, toLocation, pickUpDate, pickUpTime, flightNumber, message })
                    .then((res) => {
                        if (res.error) {
                            return { success: false, error: true }
                        }

                        if (res.success) {
                            return { success: true, error: false }
                        }
                        else
                            return { success: false, error: true }
                    })
                    .catch(e => {
                        console.error(e)
                        return { success: false, error: true }
                    })
            }

            else
                return { success: false, error: true }

        })
        .catch(e => {
            console.error(e)
            return { success: false, error: true }
        })

}