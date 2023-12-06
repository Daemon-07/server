const express = require('express');
const router = express.Router();
const jwt_token= require('../../controllers/token/jwt_token');

const syllabusController = require('../../controllers/training/syllabus.controller');
const topicController = require('../../controllers/training/topic.controller');

router.get('/module/getall', syllabusController.getModuleList );
router.post('/module/add',  syllabusController.addModuleDetail);
router.put('/module/update',  syllabusController.updateModuleDetail);
router.get('/chapter/getall', syllabusController.getChapterList );
router.post('/chapter/add',  syllabusController.addChapterDetail);
router.put('/chapter/update',  syllabusController.updateChapterDetail);

router.post('/topic/add',  topicController.addTopicDetail);
router.put('/topic/update',  topicController.updateTopicDetail);
router.put('/topic/get',  topicController.getTopicList);
router.get('/topic/getall', topicController.getTopicList );



router.get('/admin/topic/getall', syllabusController.getTopicsList);
router.get('/admin/topic/get', syllabusController.getTopicDetail);
router.post('/admin/topic/add', syllabusController.addTopic);
router.put('/admin/topic/update', syllabusController.updateTopic);

module.exports = router;