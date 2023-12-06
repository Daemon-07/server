const express = require('express');
const router = express.Router();
const jwt_token= require('../../controllers/token/jwt_token');

const syllabusController = require('../../controllers/student/student-syllabus.controller');

router.get('/training/getallmodulewithchapter', syllabusController.getAllModuleWithChapter);
router.get('/training/getalltopicsbychapterid', syllabusController.getAllTopicsByChapter);
// router.get('/training/gettopicsbychapterid', syllabusController.getTopicsByChapterId);
// router.post('/training/gettopicbyid',  syllabusController.getTopicById);


module.exports = router;