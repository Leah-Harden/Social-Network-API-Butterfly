const router = require('express').Router();

const {
    createThoughts,
    getThoughts,
    getUsersThoughts,
    updateThoughts,
    deleteThoughts
} = require('../controllers/thoughtsController');

// /api/students
router.route('/').get(getThoughts).post(createThoughts);

// /api/students/:studentId
router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);

// /api/students/:studentId/assignments
router.route('/:studentId/assignments').post(addAssignment);

// /api/students/:studentId/assignments/:assignmentId
router.route('/:studentId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
