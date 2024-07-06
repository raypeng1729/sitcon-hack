import React, { useState, useEffect } from 'react';
import { fetchComments, postComment, flagComment } from '../services/api';

function Discussion({ proposalId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments(proposalId).then(data => setComments(data));
  }, [proposalId]);

  const handlePostComment = () => {
    postComment(proposalId, newComment).then(comment => {
      setComments([...comments, comment]);
      setNewComment('');
    });
  };

  const handleFlagComment = (commentId) => {
    flagComment(commentId).then(() => {
      setComments(comments.map(comment => 
        comment.id === commentId ? { ...comment, flagged: true } : comment
      ));
    });
  };

  return (
    <div>
      <h3>Discussion</h3>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <p>{comment.content}</p>
            <button onClick={() => handleFlagComment(comment.id)}>Flag</button>
          </li>
        ))}
      </ul>
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handlePostComment}>Post Comment</button>
    </div>
  );
}

export default Discussion;
