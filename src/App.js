import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Doctorid from "./components/Doctorid";
import Home from "./components/Home";
import Forget from './components/Forget'
import PasswordReset from './components/Passwordrest';
import Activated from './components/Activated';
import Profile from './components/Profile';
import Medicalfile from './components/Medicalfile'
import Hospital from './components/Hospital'
import RegisterDoctor from './components/RegisterDoctor'
import DoctorDoctor from './components/MediclDoctor'
import About from './components/About'



function App() {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/MediclDoctor" element={<DoctorDoctor/>}/>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path='/Hospital' element={<Hospital />}/>
        <Route exact path='/Doctorid' element={<Doctorid />}/>
        <Route exact path='/register_doctor' element={<RegisterDoctor />}/>
        <Route exact path='/forgot/:token' element={<PasswordReset />}/>
        <Route exact path="/forgot" element={<Forget/>}/>
        <Route exact path="/activate/:token" element={<Activated/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/Medicalfile" element={<Medicalfile/>}/>
      </Routes>
      </>
  );
}

export default App;
