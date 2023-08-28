// utils/mailer.js
import { createTransport } from 'nodemailer';

async function sendEmail({ to, subject, text }) {
    const transporter = createTransport({
        service: 'Gmail', // e.g., 'Gmail'
        auth: {
            user: 'sunilhn3@gmail.com',
            pass: 'parvathi',
        },
    });

    const mailOptions = {
        from: 'your@email.com',
        to: to,
        subject: subject,
        text: text,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return true;
    } catch (error) {
        console.error('Error sending email:', error);
        return false;
    }
}

export default { sendEmail };
