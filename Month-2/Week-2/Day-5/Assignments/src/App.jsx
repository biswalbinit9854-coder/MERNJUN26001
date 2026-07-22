import React from 'react';
import Login from '../../Practice/src/Login';

function App() {
  return (
    <>
      let isLogin = true;
      
        if (isLogin) {
          return (
            <>
              <Profile />
            </>
          );
        }
        return (
          <div>
            <Login />
          </div>
        );
      
        return <div>{isLogin ? <Profile /> : <Login />}</div>;
    </>
  );
}

export default App;
