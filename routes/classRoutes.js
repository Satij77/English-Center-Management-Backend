const express = require('express');
const classController = require('../controllers/classController');

const router = express.Router();

// Route để lấy học sinh theo classID
router.get('/:classId/students', classController.getStudentsByClassId);

module.exports = router;
