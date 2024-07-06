const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, enum: ['policy', 'issue'], required: true },
  status: { type: String, default: 'active' },
  voteThreshold: { type: Number, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
});

const Proposal = mongoose.model('Proposal', ProposalSchema);
module.exports = Proposal;
