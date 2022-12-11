import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router";

function CargarExamen() {
    

    let picker = document.getElementById("fileData");
  
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
      let csv = reader.result.split("\r\n");
      var c = 1;
  
      for (let row of csv) {
        if(c==2){
  
          var columns = row.split(",");
          console.log(columns[0]);
          console.log(columns[1]);
          console.log(columns[2]);
          console.log(columns[3]);
  
          document.getElementById("MdvpFo").value = columns[1];
          document.getElementById("MdvpFhi").value = columns[2];
          document.getElementById("MdvpFlo").value = columns[3];
          document.getElementById("MdvpJitter").value = columns[4];
          document.getElementById("MdvpJitterAbs").value = columns[5];
          document.getElementById("MdvpRap").value = columns[6];
          document.getElementById("MdvpPpq").value = columns[7];
          document.getElementById("JitterDdp").value = columns[8];
          document.getElementById("MdvpShimmer").value = columns[9];
          document.getElementById("MdvpShimmerDb").value = columns[10];
          document.getElementById("ShimmerApq3").value = columns[11];
          document.getElementById("ShimmerApq5").value = columns[12];
          document.getElementById("MdvpApq").value = columns[13];
          document.getElementById("ShimmerDda").value = columns[14];
          document.getElementById("Nhr").value = columns[15];
          document.getElementById("Hnr").value = columns[16];
          document.getElementById("Rpde").value = columns[18];
          document.getElementById("Dfa").value = columns[19];
          document.getElementById("spread1").value = columns[20];
          document.getElementById("spread2").value = columns[21];
          document.getElementById("D2").value = columns[22];
          document.getElementById("Ppe").value = columns[23];
  
          //document.getElementById("hdnDNI").value
          var jsonData = {
            "IdUsuario": "1",
            "MdvpFo":document.getElementById("MdvpFo").value,
            "MdvpFhi":document.getElementById("MdvpFhi").value,
            "MdvpFlo":document.getElementById("MdvpFlo").value,
            "MdvpJitter":document.getElementById("MdvpJitter").value,
            "MdvpJitterAbs":document.getElementById("MdvpJitterAbs").value,
            "MdvpRap":document.getElementById("MdvpRap").value,
            "MdvpPpq":document.getElementById("MdvpPpq").value,
            "JitterDdp":document.getElementById("JitterDdp").value,
            "MdvpShimmer":document.getElementById("MdvpShimmer").value,
            "MdvpShimmerDb":document.getElementById("MdvpShimmerDb").value,
            "ShimmerApq3":document.getElementById("ShimmerApq3").value,
            "ShimmerApq5":document.getElementById("ShimmerApq5").value,
            "MdvpApq":document.getElementById("MdvpApq").value,
            "ShimmerDda":document.getElementById("ShimmerDda").value,
            "Nhr":document.getElementById("Nhr").value,
            "Hnr":document.getElementById("Hnr").value,
            "Rpde":document.getElementById("Rpde").value,
            "Dfa":document.getElementById("Dfa").value,
            "spread1":document.getElementById("spread1").value,
            "spread2":document.getElementById("spread2").value,
            "D2":document.getElementById("D2").value,
            "Ppe":document.getElementById("Ppe").value
          }
  
          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://parkinson-prediction-api.ew.r.appspot.com/test-parkinson');
          xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
          xhr.responseType = 'json';
          xhr.onload = function(e) {
            if (this.status == 200) {
              console.log('response', this.response); // JSON response  
              document.getElementById("txtResultado").value = this.response.data.message
            }else{
              console.log(this.response)
            }
          };
          xhr.send(JSON.stringify(jsonData));
  
  
  
          //console.log(jsonData);
        }
        c = c+1;
      }
    });
    reader.readAsText(picker.files[0]);
};

  
function Diagnostico(){

    const { dni } = useParams();
    console.log("DNI:" + dni)
    return (        
        <div className="container">
            <main>
                <h1>Realizar exámen Parkinson</h1>
                <div className="row g-3">
                                
                    <div className="col-sm-6 loadFile">

                    <input type="hidden" id="hdnDNI" value={dni} />
                    <Form.Group as={Col} controlId="fileData">
                        <Form.Control type="file" />
                    </Form.Group>
                    </div>

                    <div className="col-sm-3 loadFile">
                    <Form.Label>&nbsp;</Form.Label>
                        <Button id="btnLoadExamen" onClick={CargarExamen} >
                            Cargar Exámen
                        </Button>
                    </div>

                    <div className="col-sm-3 loadFile">
                    </div>


                    <div className="col-sm-3">
                    <Form.Label>MDVP:Fo(Hz)</Form.Label>
                    <Form.Control 
                        id = "MdvpFo"
                        type="number" disabled
                        placeholder="0.0"
                        autoFocus />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>MDVP:Fhi(Hz)</Form.Label>
                    <Form.Control id="MdvpFhi"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>MDVP:Flo(Hz)</Form.Label>
                    <Form.Control id="MdvpFlo"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    </div>

                    <div className="col-sm-3">
                    <Form.Label>MDVP:Jitter(%)</Form.Label>
                    <Form.Control id="MdvpJitter"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>MDVP:Jitter(Abs)</Form.Label>
                    <Form.Control id="MdvpJitterAbs"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3">
                    </div>

                    <div className="col-sm-3">
                    <Form.Label>MDVP:RAP</Form.Label>
                    <Form.Control id="MdvpRap"
                        type="number" disabled
                        placeholder="0.0"/>
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>MDVP:PPQ</Form.Label>
                    <Form.Control id="MdvpPpq"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>Jitter:DDP</Form.Label>
                    <Form.Control id="JitterDdp"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    </div>


                    <div className="col-sm-3">
                    <Form.Label>MDVP:Shimmer</Form.Label>
                    <Form.Control id="MdvpShimmer"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>MDVP:Shimmer(dB)</Form.Label>
                    <Form.Control id="MdvpShimmerDb"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>Shimmer:APQ3</Form.Label>
                    <Form.Control id="ShimmerApq3"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>Shimmer:APQ5</Form.Label>
                    <Form.Control id="ShimmerApq5"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>

                    <div className="col-sm-3">
                    <Form.Label>MDVP:APQ</Form.Label>
                    <Form.Control id="MdvpApq"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>Shimmer:DDA</Form.Label>
                    <Form.Control id="ShimmerDda"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-3">
                    </div>


                    <div className="col-sm-3">
                    <Form.Label>NHR</Form.Label>
                    <Form.Control id="Nhr"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>HNR</Form.Label>
                    <Form.Control id="Hnr"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>RPDE</Form.Label>
                    <Form.Control id="Rpde"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    </div>

                    <div className="col-sm-3">
                    <Form.Label>DFA</Form.Label>
                    <Form.Control id="Dfa"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>Spread1</Form.Label>
                    <Form.Control id="spread1"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>Spread2</Form.Label>
                    <Form.Control id="spread2"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    </div>
                    
                    <div className="col-sm-3">
                    <Form.Label>D2</Form.Label>
                    <Form.Control id="D2"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-3">
                    <Form.Label>PPE</Form.Label>
                    <Form.Control id="Ppe"
                        type="number" disabled
                        placeholder="0.0"
                        />
                    </div>
                    <div className="col-sm-12 loadFile">
                    <Form.Label>Resultado del test</Form.Label>
                    <Form.Control id="txtResultado"
                        disabled
                        placeholder=""
                        />
                    </div>
                </div>
                
            </main>
        </div>
    )
}


export default Diagnostico;