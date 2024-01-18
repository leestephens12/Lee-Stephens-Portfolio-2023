const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index'); // Assumes you have an index router in the routes directory

// Set a view engine if you are using one
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// Serve static files (like CSS, JavaScript, images)
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data
app.set('view engine', 'ejs');

// Use routers
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    res.status(404).send('404: Page Not Found');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('500: Internal Server Error');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
