import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <div className="text-center font-bold border-box shadow-xl text-yellow-500px m-5 p-5 flex-colon-4">
         <Link to="/home">Home</Link>
         <Link to="/aboutpage">AboutPage</Link>
         <Link to="/profile">Profile</Link>
         <Link to="/login">Login</Link>
         <Link to="/adminpage">AdminPage</Link>
    </div>
  );
}

export default Navbar;
