const router = require('express').Router();

const {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
} = require('../controllers/userController');

// /user all user / create a user
router.route('/').get(getAllUsers).post(createUser);

// /user/:userId  get one / delete / update
router.route('/:userId').get(getUser).delete(deleteUser).put(updateUser);


module.exports = router;
