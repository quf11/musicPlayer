import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import NotFound from './Screens/NotFound';
import Aos from 'aos';
import SliderSide from './Screens/PalyList/Pages/SliderSide';
import MusicsPage from './Screens/PalyList/Pages/MusicsPage';
import Profile from './Screens/Dashboard/Admin/Profile';
import Password from './Screens/Dashboard/Admin/Password';




function App() {
  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/playlist' element={<SliderSide/>} />
      <Route path='/musics' element={<MusicsPage/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/password' element={<Password/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
