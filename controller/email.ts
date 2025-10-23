'use server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: parseInt(process.env.SMTP_PORT as string),
  auth: {
    user: process.env.NO_REPLY_EMAIL_ADDRESS,
    pass: process.env.NO_REPLY_PASS
  }
})

export async function sendContactUsEmail({ name, email, phone, city, message }: TContactUsEmail) {

  //const mobileService = (emailData.mobileService == undefined) ? 'No' : 'Yes'

  const mailOptions = {
    from: `"No Reply" ${process.env.NO_REPLY_EMAIL_ADDRESS}`,
    to: process.env.INFO_EMAIL_ADDRESS,
    subject: `General inquiry from ${name}`,
    replyTo: email,
    html: `<html>
              <head></head>
              <body>
              <style>
                td, th, td {
                  border: 1px solid #c2c2c2;
                  color: #405F8F;
                }
                td {
                  padding: 10px;
                }
                /*
                a:link, a:visited {
                  background-color: #EE5A24;
                  color: white;
                  padding: 15px 210px;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                }
                */
                a:hover, a:active {
                  background-color: #F17041;
                }
              </style>
              <p>A new inquiry by ${name},</p>
              <table border='1' style="max-width: 720px; border-collapse: collapse;">
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Name</strong></td><td style='padding: 10px;'>${name}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Email</strong></td><td style='padding: 10px;'>${email}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Phone</strong></td><td style='padding: 10px;'>${phone}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>City</strong></td><td style='padding: 10px;'>${city}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Message</strong></td><td style='padding: 10px;'>${message}</td></tr>
              </table>
              <p style='font-style: italic;'>Note: This is an automated email. Please do not reply to this email.</p>
              </body>
              </html>`
  }

  return await transporter.sendMail(mailOptions)
    .then(() => { return { success: 'Email sent successfully', error: null } })
    .catch((e) => { console.log(e); return { success: null, error: 'Email send error' } })
}

export async function sendBookingEmailAdmin({
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
  const date = new Date(pickUpDate).toDateString()
  const time = new Date(pickUpTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true // 12-hour clock
  })
  //book@royaltaxibracknell.co.uk
  const mailOptions = {
    from: `"No Reply" ${process.env.NO_REPLY_EMAIL_ADDRESS}`,
    to: process.env.BOOKING_EMAIL_ADDRESS,
    subject: `New Booking Request`,
    html: `<html>
              <head></head>
              <body>
              <style>
                td, th, td {
                  border: 1px solid #c2c2c2;
                  color: #405F8F;
                }
                td {
                  padding: 10px;
                }
                /*
                a:link, a:visited {
                  background-color: #EE5A24;
                  color: white;
                  padding: 15px 210px;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                }
                */
                a:hover, a:active {
                  background-color: #F17041;
                }
              </style>
              <p>Hello Royal Executive Cars,</p>
              <p>You have received a new booking request by ${name}. Please find information below. </p>
              <table border='1' style="max-width: 720px; border-collapse: collapse;">
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Name</strong></td><td style='padding: 10px;'>${name}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Email</strong></td><td style='padding: 10px;'>${email}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Phone</strong></td><td style='padding: 10px;'>${phone}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Number of passengers</strong></td><td style='padding: 10px;'>${passengers}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Pick up location</strong></td><td style='padding: 10px;'>${fromLocation}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Drop off location</strong></td><td style='padding: 10px;'>${toLocation}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Pick up Date</strong></td><td style='padding: 10px;'>${date}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Pick up time</strong></td><td style='padding: 10px;'>${time}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Flight Number</strong></td><td style='padding: 10px;'>${flightNumber}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Message</strong></td><td style='padding: 10px;'>${message}</td></tr>
              </table>
              <p>Thank You,</p>
              <p>Site Admin</p>
              <p>===========</p>
              <p style='font-style: italic;'>Note: This is an automated email.</p>
              <p style='font-style: italic;'>This e-mail is sent via the Get a Taxi form on Royal Executive Cars. (https://www.bracknellroyaltaxi.space)</p>
              </body>
              </html>`
  }

  return await transporter.sendMail(mailOptions)
    .then(() => { return { success: 'Email sent successfully', error: null } })
    .catch((e) => { console.log(e); return { success: null, error: 'Email send error' } })

}

export async function sendBookingEmailCustomer({
  name,
  email,
  phone,
  passengers,
  fromLocation,
  toLocation,
  pickUpDate,
  pickUpTime,
  message }: TBookATaxiForm) {

  const date = new Date(pickUpDate).toDateString()
  const time = new Date(pickUpTime).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true // 12-hour clock
  })

  const mailOptions = {
    from: `"No Reply" ${process.env.NO_REPLY_EMAIL_ADDRESS}`,
    to: email,
    subject: `Booking confirmation - Royal Executive Cars`,
    html: `<html>
              <head></head>
              <body>
              <style>
                td, th, td {
                  border: 1px solid #c2c2c2;
                  color: #405F8F;
                }
                td {
                  padding: 10px;
                }
                /*
                a:link, a:visited {
                  background-color: #EE5A24;
                  color: white;
                  padding: 15px 210px;
                  text-align: center;
                  text-decoration: none;
                  display: inline-block;
                }
                */
                a:hover, a:active {
                  background-color: #F17041;
                }
              </style>
              <p>Hello ${name},</p>
              <p>Thank you for your request. We can confirm that we have received your request sucessfully. We will send another email or contact you on your mobile once your booking is confirmed. Your booking details are given below;</p>
              <table border='1' style="max-width: 720px; border-collapse: collapse;">
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Name</strong></td><td style='padding: 10px;'>${name}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Email</strong></td><td style='padding: 10px;'>${email}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Phone</strong></td><td style='padding: 10px;'>${phone}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Number of passengers</strong></td><td style='padding: 10px;'>${passengers}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Pick up location</strong></td><td style='padding: 10px;'>${fromLocation}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Drop off location</strong></td><td style='padding: 10px;'>${toLocation}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Pick up Date</strong></td><td style='padding: 10px;'>${date}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Pick up time</strong></td><td style='padding: 10px;'>${time}</td></tr>
                <tr><td style='color: white; padding: 10px; background-color: #0056f7;'><strong>Message</strong></td><td style='padding: 10px;'>${message}</td></tr>
              </table>
              <p style='font-style: italic;'>Note: This is an automated email, please do now reply to this email.</p>
              </body>
              </html>`
  }

  return await transporter.sendMail(mailOptions)
    .then(() => { return { success: 'Email sent successfully', error: null } })
    .catch((e) => { console.log(e); return { success: null, error: 'Email send error' } })

}