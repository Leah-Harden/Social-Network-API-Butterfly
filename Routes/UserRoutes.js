const router = require('express').Router();

const {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
} = require('../controllers/userController');

// /api/students
router.route('/').get(getAllUsers).post(createUser);

// /api/students/:studentId
router.route('/:userId').get(getUser).delete(deleteUser);

// /api/students/:studentId 
router.route('/:studentId').put(updateUser);


module.exports = router;
