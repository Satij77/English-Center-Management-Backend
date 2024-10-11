const express = require('express');
const teacherController = require('../controllers/teacherController');

const router = express.Router();

// Route để lấy lớp học theo teacherID
router.get('/:teacherId/classes', teacherController.getClassesByTeacherId);

module.exports = router;
