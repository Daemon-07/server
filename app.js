//module dependencies
const express = require('express');
const logger = require('morgan');
const jwt = require('jsonwebtoken');

// const bodyParser= require("body-parser");

const db = require('./models');
// db.sequelize.sync();
// const db = require("../models"); // models path depend on your structure
// const Tutorial = db.tutorials;




const authApi = require('./routes/auth/auth.route');
const userApi = require('./routes/user/user.route');
const contactApi = require('./routes/contact/contact.route');
const countryApi = require('./routes/common/country.route');
const stateApi = require('./routes/common/state.route');
const cityApi = require('./routes/common/city.route');
const localityApi = require('./routes/common/locality.route');
const trainingApi = require('./routes/training/training.route');
const syllabusApi = require('./routes/training/syllabus.route');
const domainApi = require('./routes/common/domain.route');
const batchApi = require('./routes/training/batch.route');
const languageApi = require('./routes/common/language.route');
const alumniFeedbackApi = require('./routes/common/alumniFeedback.route');
const uploadsApi = require('./routes/common/uploads.route');
const paymentApi = require('./routes/payment/payment.route');
const consultationApi = require('./routes/common/consultation.route');
const testimonialApi = require('./routes/website/testimonial.route');
const mentorsApi = require('./routes/website/mentors.route');
const categoryApi = require('./routes/common/category.route');
const subCategoryApi = require('./routes/common/subCategory.route');
const studentApi= require('./routes/student/syllabus.route');
//create express server
const app = express(); 

const expressConfig = require('./config')();

//Express configuration.
app.set('host', expressConfig.server.host); 
app.set('port', expressConfig.server.port);

app.use(logger(expressConfig.logger.level));

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

//Using custom cors policy
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.append('Access-Control-Allow-Headers', '*');
    next();
});

// app.use(bodyParser.json({limit: '50mb'}));
// app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));





app.use('/api/auth', authApi);
app.use('/api/user', userApi);
app.use('/api/contact', contactApi);
app.use('/api/country', countryApi);
app.use('/api/state', stateApi);
app.use('/api/city', cityApi);
app.use('/api/locality', localityApi);
app.use('/api/training', trainingApi);
app.use('/api/domain', domainApi);
app.use('/api/batch', batchApi);
app.use('/api/language', languageApi);
app.use('/api/feedback',alumniFeedbackApi);
app.use('/api/common/uploads', uploadsApi);
app.use('/images',express.static(__dirname + '/uploads'));
app.use('/api/payment',paymentApi);
app.use('/api/consultation',consultationApi);
app.use('/api/testimonial',testimonialApi);
app.use('/api/mentors',mentorsApi);
app.use('/api/consultation',consultationApi)
app.use('/api/category',categoryApi)
app.use('/api/subCategory',subCategoryApi)
app.use('/api/syllabus',syllabusApi)
app.use('/api/student',studentApi);

app.listen(app.get('port'), () => {
    console.log('Server started at %s : %d in %s mode', require('os').hostname, app.get('port'), expressConfig.environment);
});

module.exports = app;