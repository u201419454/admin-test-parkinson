import React from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

  function loadData() {
    let picker = document.getElementById("fileData"),
        table = document.getElementById("demoTable");
    // (B1) REMOVE OLD TABLE ROWS
    table.innerHTML = "";
    
    // (B2) READ CSV & GENERATE TABLE
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
      let csv = reader.result.split("\r\n");
      var c = 1;
      var tableHead = "";
      var tableBody = "";
      
      tableBody = "<tbody>";
      for (let row of csv) {
        if(c==1){

          tableHead = "<thead><tr>"
          for (let col of row.split(",")) {
            tableHead += "<th scope='col'>" + col + "</th>"
          }
          tableHead += "</tr></thead>"
          c=0;
        }else{        
          let tr = table.insertRow();
          tableBody += "<tr>"
          for (let col of row.split(",")) {
            //let td = tr.insertCell();
            tableBody += "<td>" + col + "</td>";
          }
          tableBody += "</tr>"
        }
      }
      tableBody += "</tbody>";

      table.innerHTML = tableHead + tableBody;
    });
    reader.readAsText(picker.files[0]);
    document.getElementById("blkResultData").classList.remove("hide");


    axios.post("https://parkinson-prediction-api.ew.r.appspot.com/upload-historical-data") 
    .then(response => {
      console.log(response.data.data); 
      document.getElementById("txtEntrenamiento").value = response.data.data.precision_training;
      document.getElementById("txtPrecision").value = response.data.data.precision_data;
    })
  };

function uploadData() {
  return (
    <div className="container">
      <main>
      <div className="blkValidaciones">
        <h1>
        Carga de datos historicos de pacientes
        </h1>
      </div>
      <div className="d-grid gap-2 mt-3 mb-3">
        <Form>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="fileData">
            <Form.Control type="file" />
          </Form.Group>
          
          <Form.Group as={Col} controlId="formGridZip">
          <Button variant="primary" size="lg" onClick={loadData} >
                Cargar set de validacion
            </Button>
          </Form.Group>
          </Row>
        </Form>
      </div>
      <div className="tableResult">
        <Table striped bordered hover id="demoTable" width={20}>
        <thead>
        <tr>
          <th scope='col'>name</th>
          <th scope='col'>MDVP:Fo(Hz)</th>
          <th scope='col'>MDVP:Fhi(Hz)</th>
          <th scope='col'>MDVP:Flo(Hz)</th>
          <th scope='col'>MDVP:Jitter(%)</th>
          <th scope='col'>MDVP:Jitter(Abs)</th>
          <th scope='col'>MDVP:RAP</th>
          <th scope='col'>MDVP:PPQ</th>
          <th scope='col'>Jitter:DDP</th>
          <th scope='col'>MDVP:Shimmer</th>
          <th scope='col'>MDVP:Shimmer(dB)</th>
          <th scope='col'>Shimmer:APQ3</th>
          <th scope='col'>Shimmer:APQ5</th>	
          <th scope='col'>MDVP:APQ</th>
          <th scope='col'>Shimmer:DDA</th>
          <th scope='col'>NHR</th>
          <th scope='col'>HNR</th>
          <th scope='col'>status</th>
        </tr>
        </thead>
          <tbody>
          </tbody>
        </Table>
      </div>
      <div>
        <div id="blkResultData" className="row g-3">
          
          <div className="col-sm-6 loadFile">
          <Form.Label>Puntaje de precision del entrenamiento de datos</Form.Label>
            <Form.Control 
              id = "txtEntrenamiento"
              type="number" disabled
              placeholder="0.0"
              autoFocus />
          </div>

          <div className="col-sm-3 loadFile">
          <Form.Label>Puntuacion de precision de prueba de datos</Form.Label>
            <Form.Control 
              id = "txtPrecision"
              type="number" disabled
              placeholder="0.0"
              autoFocus />
          </div>

          <div className="col-sm-3 loadFile">
          </div>

          <div className="col-sm-3">
          </div>
          <div className="col-sm-3">
          </div>  
        </div>  
      </div>
      </main>
    </div>
  );
}

export default uploadData;
