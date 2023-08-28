import { NextResponse } from "next/server";

// export async function GET() {
//     return NextResponse.json({"name" :"Sunil"});

// }
import nodemailer from 'nodemailer';


export async function POST(req, res) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: '',
            pass: ''
        }
    });

    const mailOptions = {
        from: '',
        to: '',
        subject: 'Subject of the email',
        text: 'Content of the email',
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



