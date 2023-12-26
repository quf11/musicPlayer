import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import NotFound from './Screens/NotFound';
import Aos from 'aos';
import PlayMusics from './Screens/PalyList/PlayMusics';
import ListOfMusics from './Components/PlayList/ListOfMusics';

function App() {
  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/playlist' element={<PlayMusics/>} />
      <Route path='/playlist/:id' element={<ListOfMusics/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
