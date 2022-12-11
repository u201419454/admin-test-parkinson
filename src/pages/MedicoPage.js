import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'

import Medicos from '../Data/Medicos'
import axios from 'axios'



function MedicoPage() {

  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://parkinson-prediction-api.ew.r.appspot.com/medicos");
      setMedicos(result.data);
    })();
  }, []);





    return (
      
      <div className="container">

        <main>
        <h1>Relación de Neurólogos</h1>
        <div>
        <div>
            <Medicos medicos={medicos} />
          </div>
        </div>
        </main>
      </div>
    );
}
  


  
export default MedicoPage;
