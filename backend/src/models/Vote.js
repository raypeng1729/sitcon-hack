const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
  proposal: { type: mongoose.Schema.Types.ObjectId, ref: 'Proposal', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  voteValue: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Vote = mongoose.model('Vote', VoteSchema);
module.exports = Vote;
