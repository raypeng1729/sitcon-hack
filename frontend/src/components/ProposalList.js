import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProposals } from '../services/api';

function ProposalList() {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetchProposals().then(data => setProposals(data));
  }, []);

  return (
    <div>
      <h2>Proposals</h2>
      <ul>
        {proposals.map(proposal => (
          <li key={proposal.id}>
            <Link to={`/proposal/${proposal.id}`}>{proposal.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProposalList;
