const express = require('express');
const { postComment, getComments, flagComment } = require('../controllers/discussionController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:proposalId/comments', authMiddleware, postComment);
router.get('/:proposalId/comments', getComments);
router.post('/comments/:commentId/flag', authMiddleware, flagComment);

module.exports = router;
