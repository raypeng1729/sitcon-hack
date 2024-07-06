const mongoose = require('mongoose');

const FlagSchema = new mongoose.Schema({
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reason: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Flag = mongoose.model('Flag', FlagSchema);
module.exports = Flag;
