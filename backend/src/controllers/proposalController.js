const Proposal = require('../models/Proposal');

exports.createProposal = async (req, res) => {
  const { title, description, type, voteThreshold } = req.body;
  try {
    const newProposal = new Proposal({
      title,
      description,
      type,
      voteThreshold,
      createdBy: req.user.id,
    });
    await newProposal.save();
    res.status(201).json(newProposal);
  } catch (err) {
    res.status(500).json({ error: 'Error creating proposal' });
  }
};

exports.getProposals = async (req, res) => {
  try {
    const proposals = await Proposal.find();
    res.json(proposals);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching proposals' });
  }
};

exports.getProposalById = async (req, res) => {
  try {
    const proposal = await Proposal.findById(req.params.id);
    if (!proposal) return res.status(404).json({ error: 'Proposal not found' });
    res.json(proposal);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching proposal' });
  }
};

exports.updateProposal = async (req, res) => {
  try {
    const updatedProposal = await Proposal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProposal) return res.status(404).json({ error: 'Proposal not found' });
    res.json(updatedProposal);
  } catch (err) {
    res.status(500).json({ error: 'Error updating proposal' });
  }
};

exports.deleteProposal = async (req, res) => {
  try {
    const deletedProposal = await Proposal.findByIdAndDelete(req.params.id);
    if (!deletedProposal) return res.status(404).json({ error: 'Proposal not found' });
    res.json({ message: 'Proposal deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting proposal' });
  }
};
