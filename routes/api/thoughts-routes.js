const router = require('express').Router();

const {
    getAllThoughts,
    createThought,
    findThoughtbyId,
} = require('../../controllers/thoughtController');

router.route('/api/thought').get(getAllUsers).post(createUser);

router.route('/:thoughtId').get(findThoughtbyId);

module.exports = router;