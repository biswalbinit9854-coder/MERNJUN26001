import React from 'react';
import Navbar from './assets/Navbar';

function App() {
  return (
    <div>
    App
      <br />
      <Navbar />
      <h1>Welcome to React</h1>
      {
        console.log('Hello World')
      }
    </div>
  );
}

export default App;
