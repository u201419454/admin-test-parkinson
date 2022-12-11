import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Medicos from '../Data/Medicos'
import axios from 'axios'
import Reportes from '../Data/Reportes';

function ReportsPage() {

  const [reportes, setReportes] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios("https://parkinson-prediction-api.ew.r.appspot.com/reporte-examen");
      console.log(result.data.data)
      setReportes(result.data.data);
    })();
  }, []);

    return (      
      <div className="container">
        <main>
        <h1>Reportes general de resultados </h1>
        <br />
        <div>
        <div>
            <Reportes reportes={reportes} />
          </div>
        </div>
        </main>
      </div>
    );
}
export default ReportsPage;
