import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProposalDetails } from '../services/api';
import Discussion from './Discussion';

function ProposalDetails() {
  const { id } = useParams();
  const [proposal, setProposal] = useState(null);

  useEffect(() => {
    fetchProposalDetails(id).then(data => setProposal(data));
  }, [id]);

  if (!proposal) return <div>Loading...</div>;

  return (
    <div>
      <h2>{proposal.title}</h2>
      <p>{proposal.description}</p>
      <button>Vote</button>
      <Discussion proposalId={id} />
    </div>
  );
}

export default ProposalDetails;
