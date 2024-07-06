import React, { useEffect, useState } from 'react';
import { fetchUserProfile, updateUserProfile } from '../services/auth';

function Profile() {
  const [profile, setProfile] = useState({});
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    fetchUserProfile().then(data => setProfile(data));
  }, []);

  const handleUpdateProfile = () => {
    updateUserProfile(profile).then(updatedProfile => {
      setProfile(updatedProfile);
      setEditable(false);
    });
  };

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={profile.username}
            readOnly={!editable}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={profile.email}
            readOnly={!editable}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </label>
      </div>
      <button onClick={() => setEditable(!editable)}>
        {editable ? 'Cancel' : 'Edit'}
      </button>
      {editable && <button onClick={handleUpdateProfile}>Save</button>}
    </div>
  );
}

export default Profile;
