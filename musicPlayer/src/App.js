import React,{useState,useEffect} from 'react';
import { Route, Routes,useNavigate } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Login from './Screens/Login';
import Register from './Screens/Register';
import NotFound from './Screens/NotFound';
import Aos from 'aos';
import SliderSide from './Screens/PalyList/Pages/SliderSide';
import MusicsPage from './Screens/PalyList/Pages/MusicsPage';
import Profile from './Screens/Dashboard/Admin/Profile';
import Password from './Screens/Dashboard/Admin/Password';
import MusicList from './Screens/Dashboard/Admin/MusicList';
import Dashboard from './Screens/Dashboard/Admin/Dashboard';
import Categories from './Screens/Dashboard/Admin/Categories';
import AddMusic from './Screens/Dashboard/Admin/AddMusic';

import Users from './Screens/Dashboard/Admin/Users';
import Premium from './Screens/Premium/Premium';
import Artists from './Screens/Artists';
import SingleArtist from './Screens/SingleArtist';
import DownloadedMusics from './Screens/PalyList/Pages/DownloadedMusics';
import RecentlyMusics from './Screens/PalyList/Pages/RecentlyMusics';
import { getAuth } from 'firebase/auth';
import { app } from './Config/firebase.config';

function App() {
  const firebaseAuth = getAuth(app);
const navigate= useNavigate();

const [authState, setAuthState] = useState(false);

const[auth, setAuth] = useState(false ||window.localStorage.getItem("auth")=== "true")
useEffect(()=> {
firebaseAuth.onAuthStateChanged((userCred)=>
{
if(userCred){
userCred.getIdToken().then((token)=>{
  console.log(token);
})

}else{
setAuth(false);
window.localStorage.setItem("auth", "false");
navigate("/login")
    }
  })
} , [])

  Aos.init();
  return (
    <Routes>
      <Route path='/' element={<HomeScreen/>} />
      <Route path='/login' element={<Login setAuth = {setAuth}/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/playlist' element={<SliderSide/>} />
      <Route path='/musics' element={<MusicsPage/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/password' element={<Password/>} />
      <Route path='/musiclist' element={<MusicList/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      <Route path='/categories' element={<Categories/>} />
      <Route path='/addmusic' element={<AddMusic/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/artists' element={<Artists/>} />
      <Route path='/downloaded' element={<DownloadedMusics/>} />
      <Route path='/recently' element={<RecentlyMusics/>} />
      <Route path='/premium' element={<Premium/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default App
