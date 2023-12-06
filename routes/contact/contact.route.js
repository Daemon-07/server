const express = require('express');
const router = express.Router();

const contactController = require('../../controllers/contact/contact.controller');

router.get('/get', contactController.getContactDetails);
router.post('/getall', contactController.getContactDetails);
router.post('/add',  contactController.addContactDetail);
module.exports = router;