import React from 'react';
import Login from './Login';
import Home from './Home';
import AboutPage from './AboutPage';
import Profile from './Profile';
import AdminPage from './AdminPage';
import  {Route,Routes} from "react-router"
function App() {
  return (
   <>
    <Navbar/>
  <Routes>
    <Route path='/home' element={<Home/>}/>
    <Route path='/aboutpage' element={<AboutPage/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path='/adminpage' element={<AboutPage/>}/>

  </Routes>

   </>
  );
}

export default App;
