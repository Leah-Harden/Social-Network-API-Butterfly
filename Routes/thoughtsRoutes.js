const router = require('express').Router();

const {
    createThoughts,
    getOneThoughts,
    getThoughts,
    getUsersThoughts,
    updateThoughts,
    deleteThoughts
} = require('../controllers/thoughtsController');

// /thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /thoughts/:thoughtId  get one / delete / update
router.route('/:thoughtId').get(getOneThoughts).delete(deleteThoughts).put(updateThoughts);

// /thoughts/:userId/thoughts
router.route('/:userId/thoughts').get(getUsersThoughts);

module.exports = router;
