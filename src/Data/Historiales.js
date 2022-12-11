import React, { useState }  from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';
import Historial from './Historial';

function Historiales({historiales}) {

  return (
        <div>
          
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id Exámen</th>
                <th>Fecha de exámen</th>
                <th>Resultado</th>
                <th>Descargar</th>
              </tr>
            </thead>
            <tbody>
              { historiales.map(historial => <Historial key={historial.id} historial={historial} />) }
            </tbody>
          </Table>

        </div>
  )
}

export default Historiales