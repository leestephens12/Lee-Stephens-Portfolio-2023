const express = require('express');
const router = express.Router();
const path = require('path');

// GET home page
router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../index.html')); // Uncomment if serving a static HTML file
    res.render('index'); // Use this if you're using a view engine
});

module.exports = router;