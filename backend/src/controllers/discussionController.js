const Comment = require('../models/Comment');
const Flag = require('../models/Flag');

exports.postComment = async (req, res) => {
  const { proposalId } = req.params;
  const { content } = req.body;
  try {
    const newComment = new Comment({
      proposal: proposalId,
      user: req.user.id,
      content,
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ error: 'Error posting comment' });
  }
};

exports.getComments = async (req, res) => {
  const { proposalId } = req.params;
  try {
    const comments = await Comment.find({ proposal: proposalId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching comments' });
  }
};

exports.flagComment = async (req, res) => {
  const { commentId } = req.params;
  const { reason } = req.body;
  try {
    const newFlag = new Flag({
      comment: commentId,
      user: req.user.id,
      reason,
    });
    await newFlag.save();
    const comment = await Comment.findById(commentId);
    comment.flaggedCount += 1;
    await comment.save();
    res.status(201).json(newFlag);
  } catch (err) {
    res.status(500).json({ error: 'Error flagging comment' });
  }
};
