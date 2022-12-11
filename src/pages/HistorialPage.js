import React, { useEffect, useState,Component, PropTypes} from 'react';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'

import Pacientes from '../Data/Historiales'
import axios from 'axios'
import Historiales from '../Data/Historiales';
import { useParams } from "react-router";
import { CSVLink } from 'react-csv';
import AsyncCSV from '../components/AsyncsCSV';

import ExportPdfComponent from "../components/ExportPdfComponent";


function HistorialPage() {

  const [historiales, setHistoriales] = useState([]);

  const { dni } = useParams();
  
  useEffect(() => {
    (async () => {
        const result = await axios("http://127.0.0.1:5000/examen-dni/" + dni);
        setHistoriales(result.data.data);
    })();
  }, []);





    return (
      
      <div className="container">

        <main>
        <h1>Historial de examenes</h1>
        <div>
          <div>
              <Historiales historiales={historiales} />
          </div>
        </div>
        </main>
      </div>


    );
}
  


  
export default HistorialPage;
