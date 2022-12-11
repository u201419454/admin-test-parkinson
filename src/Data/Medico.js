import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

// deconstructed props
function Medico({medico:{dni, nombres, apellidos, fec_nac, edad, user} }) {
  return (
        <tr key={dni}>
            <td>{dni}</td>
            <td>{nombres}</td>
            <td>{apellidos}</td>
            <td>{fec_nac}</td>
            <td>{edad}</td>
            <td>{user}</td>
            <td><a href={"resetPass/" + dni}>Resetear Password</a></td>
        </tr>
  )
}
export default Medico