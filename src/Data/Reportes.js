// Pacientes.js
import React, { useState }  from 'react'
import Table from 'react-bootstrap/Table';

import Reporte from './Reporte';

function Reportes({reportes}) {
  return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Año</th>
                <th>Mes</th>
                <th>Pacientes Diagnosticados</th>
                <th>Pacientes Sanos</th>
              </tr>
            </thead>
            <tbody>
              { reportes.map(reporte => <Reporte key={reporte.Anio + reporte.Mesnombre} reporte={reporte} />) }
            </tbody>
          </Table>

        </div>
  )
}

export default Reportes