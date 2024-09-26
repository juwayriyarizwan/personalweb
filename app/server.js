const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000; // Replace with your desired   
 port

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email service provider
  auth: {
    user: 'juwayriyarizwan@gmail.com', // Replace with your email address
    pass: 'Sabarizwan786*' // Replace with your email password   

  }
});

// Handle form submissions
app.post('/submit', (req, res) => {
  const { name, email, message } = req.body;

  // Send email
  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'juwayriyarizwan@gmail.com', // Replace with your recipient email
    subject: 'Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server   
 listening on port ${port}`);
});