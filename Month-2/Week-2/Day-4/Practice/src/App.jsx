import{Route, Routes} from 'react-router'
import"./App.css";
import Home from './Home';
import Service from './Service';
import { Form } from 'react-router';
import AdminPage from './AdminPage';
import AdminDashbord from './AdminDashbord';
import Profile from './Profile';
import Navbar from './Navbar';

function App() {
  return (
   <>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='*' element={<h2>Not Found</h2>}/>

    <Route path='/admin' element={<AdminPage/>}/>
    <Route index element={<AdminDashbord/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="profile/:id" element={<Profile/>}/>
  

  </Routes>

   </>
  );
}

export default App;
