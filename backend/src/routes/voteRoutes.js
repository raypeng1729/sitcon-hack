const express = require('express');
const { castVote, getVoteResults } = require('../controllers/voteController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/:proposalId', authMiddleware, castVote);
router.get('/:proposalId/results', getVoteResults);

module.exports = router;
