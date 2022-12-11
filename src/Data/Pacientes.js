// Pacientes.js
import React, { useState }  from 'react'
import Paciente from './Paciente'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';

function Pacientes({pacientes}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

  var showModalRegistrarPaciente = function(){
    handleShow();

    setTimeout(function() {
      document.getElementById("hdnId").value = "";
      document.getElementById("txtDni").value = "";
      document.getElementById("txtNombres").value = "";
      document.getElementById("txtApellidos").value = "";
      document.getElementById("txtEdad").value = "";
      document.getElementById("txtFecNac").value = "";

      document.getElementById("btnRegistrarPacienteAct").innerHTML = "Registrar"
      document.getElementById("lblRegistrarPaciente").innerText = "Registrar Paciente"        
    }, 500);
  }

  var registraPaciente = function(){
    var paciente = {
        "id" : document.getElementById("hdnId").value,
        "nombres" : document.getElementById("txtNombres").value,
        "apellidos" : document.getElementById("txtApellidos").value,
        "fec_nac" : document.getElementById("txtFecNac").value,
        "edad" : document.getElementById("txtEdad").value,
        "dni" : document.getElementById("txtDni").value
    }    
    axios.post('https://parkinson-prediction-api.ew.r.appspot.com/paciente', paciente)
        .then(response => {
          console.log(response.data);
          document.getElementById("blkMessage").style.display = "none"
          //document.getElementById("btnRegistrarPacienteAct").innerText = "Registrando..."
          if(response.data.status = "true"){
            console.log("paciente registrado...");
            document.getElementById("blkMessage").innerText = response.data.message;
            document.getElementById("blkMessage").classList.remove("alert-danger");
            document.getElementById("blkMessage").classList.add("alert-success");
            document.getElementById("blkMessage").style.display = ""
            document.getElementById("btnRegistrarPacienteAct").innerText = "Actualizar"
            document.getElementById("hdnId").value = document.getElementById("txtDni").value;
          }else{            
            document.getElementById("blkMessage").innerText = response.data.message;
            document.getElementById("blkMessage").classList.remove("alert-success");
            document.getElementById("blkMessage").classList.add("alert-danger");
            document.getElementById("blkMessage").style.display = ""
            document.getElementById("btnRegistrarPacienteAct").innerText = "Registrar"
          }
        })
        //handleClose();
  }

  return (
        <div>
          <Button id='btnRegistrarPaciente' variant="primary" onClick={showModalRegistrarPaciente}>
            Registrar Paciente
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Dni</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Fecha de nacimiento</th>
                <th>Edad</th>
                <th>Fecha de registro</th>
                <th>Evaluación</th>
                <th>Historial</th>
              </tr>
            </thead>
            <tbody>
              { pacientes.map(paciente => <Paciente key={paciente.dni} paciente={paciente} />) }
            </tbody>
          </Table>

          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id='lblRegistrarPaciente'>Registrar Paciente</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
                <div className="container">
                  <div className="row g-3">                            
                    <div className="col-sm-3">
                      <Form.Label>DNI</Form.Label>
                      <Form.Control id = "txtDni" autoFocus type="text" maxLength="8" />
                      <input type="hidden" id="hdnId" value="" />
                    </div>

                    <div className="col-sm-9">
                    </div>

                    <div className="col-sm-6">
                      <Form.Label>Nombres</Form.Label>
                      <Form.Control id="txtNombres" type="text" />
                    </div>
                    <div className="col-sm-6">
                      <Form.Label>Apellidos</Form.Label>
                      <Form.Control id="txtApellidos" type="text" />
                    </div>
                    <div className="col-sm-6">
                      <Form.Label>Edad</Form.Label>
                      <Form.Control id="txtEdad" type="text" />
                    </div>
                    <div className="col-sm-6">
                      <Form.Label>Fecha de nacimiento</Form.Label>
                      <Form.Control id="txtFecNac" type="date" />
                    </div>
                    <div className="col-sm-12" style={{height: '75px'}}>
                      <Alert id="blkMessage" key='danger' variant='danger' style={{display: 'none'}} >
                      </Alert>
                    </div>
                  </div>
                </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button id='btnRegistrarPacienteAct' variant="primary" onClick={registraPaciente}>
              Registrar
            </Button>
          </Modal.Footer>
          </Modal>
        </div>
  )
}

export default Pacientes