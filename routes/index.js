const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// GET home page
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../index.html')); // Uncomment if serving a static HTML file
    res.render('index'); // Use this if you're using a view engine
});

router.post('/', (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'messengerportfolio@gmail.com',
          pass: 'nzpf mkpx lvlj cadw' // Your email password
        }
      });
    
      let mailOptions = {
        from: 'messengerportfolio@gmail.com',
        to: '12lee12stephens@gmail.com', // Where you want to receive the emails
        subject: 'New Contact Form Submission',
        text: `Name: ${req.body.firstName} ${req.body.lastName} Email: ${req.body.email} Message: ${req.body.message}`
      };
    
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.render('index'); // Or render a failure page
        } else {
          console.log('Email sent: ' + info.response);
          res.render('index'); // Or render a success page
        }
    });
});

module.exports = router;