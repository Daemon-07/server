const express = require('express');
const router = express.Router();

const testimonialController = require('../../controllers/website/testimonial.controller');
const jwt_token= require('../../controllers/token/jwt_token');

router.get('/getall',testimonialController.getTestimonial);
router.delete('/delete', testimonialController.deleteTestimonial);
router.post('/add', testimonialController.addTestimonial);
router.put('/update', testimonialController.updateTestimonial);

module.exports = router;