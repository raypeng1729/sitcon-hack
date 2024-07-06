const express = require('express');
const { createProposal, getProposals, getProposalById, updateProposal, deleteProposal } = require('../controllers/proposalController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createProposal);
router.get('/', getProposals);
router.get('/:id', getProposalById);
router.put('/:id', authMiddleware, updateProposal);
router.delete('/:id', authMiddleware, deleteProposal);

module.exports = router;
