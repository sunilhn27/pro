import { NextResponse } from "next/server";

// export async function GET() {
//     return NextResponse.json({"name" :"Sunil"});

// }
import nodemailer from 'nodemailer';


export async function POST(req, res) {

    const { name, email, message } = await req.json();
    console.log("name " + name)
    console.log("message " + message)
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USERNAME,
            pass: process.env.PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.USERNAME,
        to: process.env.To,
        subject: "From " + name,
        text: `${email} : ${message}`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        res.statusCode = 200;
        NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.statusCode = 500;
        NextResponse.json({ error: 'An error occurred while sending the email' });
    }


}



