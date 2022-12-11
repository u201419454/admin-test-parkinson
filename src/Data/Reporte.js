import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

// deconstructed props
function Reporte({reporte:{Anio, Mesnombre, PacientesParkinson, PacientesSano} }) {
  return (
        <tr key={Anio+Mesnombre}>
            <td>{Anio}</td>
            <td>{Mesnombre}</td>
            <td>{PacientesParkinson}</td>
            <td>{PacientesSano}</td>
        </tr>
  )
}
export default Reporte