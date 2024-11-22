const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors()); // Enable CORS

// Nodemailer function for sending the welcome email
async function sendMail(toEmail) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'yashika4824.be23@chitkara.edu.in',
            pass: 'rihrualdthlnaflq', 
        },
    });

    const mailOptions = {
        from: 'yashika4824.be23@chitkara.edu.in',
        to: toEmail,
        subject: 'Welcome to Dev@deakin',
        text: 'Welcome to Dev@deakin! ',
    };

    try {
        
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

// Route to handle subscription
app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }

    try {
        await sendMail(email);
        res.json({ message: 'Welcome email sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error sending welcome email.' });
    }
});

app.listen(port, () => {
    console.log('Server is running at http://localhost:${port}');
});