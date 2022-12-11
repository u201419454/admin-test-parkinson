import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

// deconstructed props
function Paciente({paciente:{dni, nombres, apellidos, fec_nac, edad, fec_reg, cantExamenes} }) {


  var test = function(valor){
    console.log(valor);
    var paciente;
    axios.get('https://parkinson-prediction-api.ew.r.appspot.com/paciente/' + valor)
      .then(res => {
        const persons = res.data;
        paciente = persons.data;
        document.getElementById("btnRegistrarPaciente").click();
        setTimeout(function() {
          console.log(paciente);
          console.log(paciente.id);
          document.getElementById("hdnId").value = paciente.id;
          document.getElementById("txtDni").value = paciente.dni;
          document.getElementById("txtNombres").value = paciente.nombres;
          document.getElementById("txtApellidos").value = paciente.apellidos;
          document.getElementById("txtEdad").value = paciente.edad;
          document.getElementById("txtFecNac").value = paciente.fec_nac;
          document.getElementById("btnRegistrarPacienteAct").innerHTML = "Actualizar"
          document.getElementById("lblRegistrarPaciente").innerText = "Actualizar Paciente"
        }, 500);
      })
  }

  return (
        <tr key={dni}>
            <td><Link onClick={() => test(dni)}>{dni}</Link></td>
            <td>{nombres}</td>
            <td>{apellidos}</td>
            <td>{fec_nac}</td>
            <td>{edad}</td>
            <td>{fec_nac}</td>
            <td><a href={"diagnostico/" + dni}>Evaluar</a></td>
            <td>
            {(cantExamenes > 0) ? (
              <a href={"historial/" + dni}>Ver historial</a>
            ) : (
              <span></span>
            )}
              
            </td>
        </tr>
  )
}
export default Paciente