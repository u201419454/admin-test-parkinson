// Pacientes.js
import React, { useState }  from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import Medico from './Medico'

function Medicos({medicos}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Dni</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Fecha de nacimiento</th>
                <th>Edad</th>
                <th>Usuario</th>
                <th>Resetear Password</th>
              </tr>
            </thead>
            <tbody>
              { medicos.map(medico => <Medico key={medico.dni} medico={medico} />) }
            </tbody>
          </Table>

        </div>
  )
}

export default Medicos