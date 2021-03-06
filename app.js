const express = require('express');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const analyticsRoutes = require('./routes/analytics');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const positionRoutes = require('./routes/position');

const keys = require('./config/keys');

const app = express();

mongoose.connect(keys.mongoUri)
    .then(() => console.log('----MONGO DB CONNECTED----'))
    .catch((err) => console.error('----MONGO DB ERROR----', err))

app.use(passport.initialize())
require('./middlware/passport')(passport);

app.use(require('morgan')('dev'));
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

app.use('/api/analytics', analyticsRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/order', orderRoutes)
app.use('/api/position', positionRoutes)

module.exports = app;
