const Vote = require('../models/Vote');
const Proposal = require('../models/Proposal');

exports.castVote = async (req, res) => {
  const { proposalId } = req.params;
  const { voteValue } = req.body;
  try {
    const newVote = new Vote({
      proposal: proposalId,
      user: req.user.id,
      voteValue,
    });
    await newVote.save();
    res.status(201).json(newVote);
  } catch (err) {
    res.status(500).json({ error: 'Error casting vote' });
  }
};

exports.getVoteResults = async (req, res) => {
  const { proposalId } = req.params;
  try {
    const votes = await Vote.find({ proposal: proposalId });
    const result = votes.reduce(
      (acc, vote) => {
        if (vote.voteValue) acc.yes += 1;
        else acc.no += 1;
        return acc;
      },
      { yes: 0, no: 0 }
    );
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching vote results' });
  }
};
