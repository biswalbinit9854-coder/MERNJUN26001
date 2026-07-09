import React from 'react';
import { useParams } from 'react-router';

function Profile() {
  const{id} = useParams();
  return (
    <div>
      Hellloooo
      <br/>
      Id : {id}
    </div>
  );
}

export default Profile;
