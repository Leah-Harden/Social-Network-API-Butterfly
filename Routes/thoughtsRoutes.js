const router = require('express').Router();

const {
    createThoughts,
    getOneThoughts,
    getThoughts,
    getUsersThoughts,
    updateThoughts,
    deleteThoughts
} = require('../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/thoughts/:studentId  get one / delete / update
router.route('/:userId').get(getOneThoughts).delete(deleteThoughts).post(updateThoughts);

// /api/thoughts/:studentId/thoughts
router.route('/:userId/thoughts').get(getUsersThoughts);

module.exports = router;
