// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function POST(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configure your email transporter
    const transporter = nodemailer.createTransport({
      service: 'your_email_service_provider',
      auth: {
        user: 'your_email@example.com',
        pass: 'your_email_password'
      }
    });

    // Email content
    const mailOptions = {
      from: 'your_email@example.com',
      to: 'recipient@example.com',
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }

  
}

export async function GET() {
    console.log("inside GET");
  
    const data = "this is the Data";
    
    return res.status(200).json({ success: true, data });
  }
