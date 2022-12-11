import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'

import Pacientes from '../Data/Pacientes'
import axios from 'axios'



function PatientPage() {

  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://parkinson-prediction-api.ew.r.appspot.com/pacientes");
      setPacientes(result.data);
    })();
  }, []);





    return (
      
      <div className="container">

        <main>
        <h1>Relación de pacientes</h1>
        <div>
        <div>
            <Pacientes pacientes={pacientes} />
          </div>
        </div>
        </main>
      </div>
    );
}
  


  
export default PatientPage;
