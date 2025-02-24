import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Setup the transporter (using Gmail here, but you can use other services like SendGrid)
    const transporter = nodemailer.createTransport({
      service: 'gmail',  // You can use your preferred email service
      auth: {
        user: process.env.EMAIL_USER,  // Your email (from environment variables)
        pass: process.env.EMAIL_PASS,  // Your email password or app-specific password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,  // Receiver email
      subject: `Message from ${name}`,
      text: message,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
