import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import UploadData from './pages/uploadData';
import PatientPage from './pages/PatientPage';
import Diagnostico from './pages/Diagnostico';
import Signin from './pages/Signin';
import MedicoPage from './pages/MedicoPage';
import HistorialPage from './pages/HistorialPage';
import ReportsPage from './pages/ReportsPage';

function App() {
  

  var activeSession = sessionStorage.getItem("userSession");
  console.log(activeSession);

  if(activeSession === null){
    console.log("no hay sesion");
    return (
      <>
      <Signin />
      </>    
    );
  }else{
    console.log("sesion activa");

  
    return (
      <>
  
        <Router>
              <Navbar />
             <Routes>
                   <Route exact path='/' element={< Home />}></Route>
                   <Route exact path='/uploadData' element={< UploadData />}></Route>
                   <Route exact path='/patients' element={< PatientPage />}></Route>
                   <Route exact path='/medicos' element={< MedicoPage />}></Route>
                   <Route exact path='/diagnostico/:dni' element={< Diagnostico />}></Route>
                   <Route exact path='/historial/:dni' element={< HistorialPage />}></Route>
                   <Route exact path='/reports' element={< ReportsPage />}></Route>
            </Routes>
         </Router>
      </>
    )

  }
}

export default App;
