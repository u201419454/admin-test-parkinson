import React, { useState } from 'react';
import '../components/login.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

var autenticar = function(){
  document.getElementById("btnAutenticar").innerText = "Autenticando..."
  var paciente = {
      "user" : document.getElementById("txtUser").value,
      "pass" : document.getElementById("txtPass").value  
  }    
  axios.post('https://parkinson-prediction-api.ew.r.appspot.com/autenticar', paciente)
      .then(response => {
        console.log(response.data);
        if(response.data.status == "error"){
          document.getElementById("blkMessage").innerHTML = response.data.message
          document.getElementById("blkMessage").style.display = ""
        }else{
          console.log(response.data.data.nombres);
          sessionStorage.setItem("userSession", response.data.data.nombres);
          window.location.href = "/";
        }
      })
			.finally(() => {
        document.getElementById("btnAutenticar").innerText = "Login"
			});
}


function Signin() {
   return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px', marginTop: '10%!important'}}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <p className="text-white-50 mb-3">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 w-100' label='Usuario' id='txtUser' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-1 w-100' label='Contraseña' id='txtPass' type='password' size="lg" style={{marginBottom: '10px'}}/>

              <div style={{height: '70px'}}>
                <Alert id="blkMessage" key='danger' variant='danger' style={{display: 'none'}}>              
                </Alert>
              </div>
              <Button id='btnAutenticar' onClick={autenticar} variant="primary" >
                Login
              </Button>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}
export default Signin;
