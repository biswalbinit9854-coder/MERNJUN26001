import React from 'react';

function Profile({ name }, children) {
  return (
    <div>
      Profile
      <br/>
        Name: {name}
        {children}
    </div>
  );
}

export default Profile;
