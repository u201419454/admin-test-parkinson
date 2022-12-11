import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import AsyncCSV from '../components/AsyncsCSV';
import ExportPdfComponent from "../components/ExportPdfComponent";


function test(dni){
    console.log(dni)
}
//<td><ExportPdfComponent idExamen={id}/></td>

function Historial({historial:{id, fecha_examen, status} }) {
    var dni = "46221787"
    return (
            <tr key={id}>
                <td>{id}</td>
                <td>{fecha_examen}</td>
                <td>
                {(status > 0) ? (
                    "Parkinson presente"
                ) : (
                    "No presenta síntomas"
                )}
                </td>
                <td><AsyncCSV idExamen={id}/></td>
            </tr>
    )
}
export default Historial