import React from 'react';
import { Link } from 'react-router';
// import tailwindcss from '@tailwindcss/vite';

function Navbar() {
  return (
    <div className="text-center font-bold border-box shadow-xl text-yellow-500px m-5 p-5 flex-colon-4">
      <Link to="/home">Home                                                                                   </Link>
      <Link to="/service">Service                                                                             </Link>
      <Link to="/about">About                                                                                 </Link>
      <Link to="/contact">Contact                                                                             </Link>
    </div>
  );
}

export default Navbar;
