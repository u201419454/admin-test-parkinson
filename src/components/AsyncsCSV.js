import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import axios from 'axios'

const headers = [
    { label: 'MdvpFo'        , key: 'MdvpFo'       },
    { label: 'MdvpFhi'       , key: 'MdvpFhi'      },
    { label: 'MdvpFlo'       , key: 'MdvpFlo'      },
    { label: 'MdvpJitter'    , key: 'MdvpJitter'   },
    { label: 'MdvpJitterAbs' , key: 'MdvpJitterAbs'},
    { label: 'MdvpRap'       , key: 'MdvpRap'      },
    { label: 'MdvpPpq'       , key: 'MdvpPpq'      },
    { label: 'JitterDdp'     , key: 'JitterDdp'    },
    { label: 'MdvpShimmer'   , key: 'MdvpShimmer'  },
    { label: 'MdvpShimmerDb' , key: 'MdvpShimmerDb'},
    { label: 'ShimmerApq3'   , key: 'ShimmerApq3'  },
    { label: 'ShimmerApq5'   , key: 'ShimmerApq5'  },
    { label: 'MdvpApq'       , key: 'MdvpApq'      },
    { label: 'ShimmerDda'    , key: 'ShimmerDda'   },
    { label: 'Nhr'           , key: 'Nhr'          },
    { label: 'Hnr'           , key: 'Hnr'          },
    { label: 'Rpde'          , key: 'Rpde'         },
    { label: 'Dfa'           , key: 'Dfa'          },
    { label: 'spread1'       , key: 'spread1'      },
    { label: 'spread2'       , key: 'spread2'      },
    { label: 'D2'            , key: 'D2'           },
    { label: 'Ppe'           , key: 'Ppe'          },
    { label: 'status'        , key: 'status'       }
];

class AsyncCSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.csvLinkEl = React.createRef();
  }
  getUserList = () => {
    
    const { idExamen } = this.props;

    return fetch("https://parkinson-prediction-api.ew.r.appspot.com/examen/" + idExamen)
      .then(res => res.json());
  }

  downloadReport = async () => {
    const reg = await this.getUserList();
    console.log(reg.data)
    var data = []
    data[0] = reg.data
    this.setState({ data: data }, () => {
      setTimeout(() => {
        this.csvLinkEl.current.link.click();
      });
    });
  }

  render() {
    const { data } = this.state;
    
    const { idExamen } = this.props;
    var fileNameEx = "Examen." + idExamen + ".csv"
    return (
      <div>
        <a href="#" onClick={this.downloadReport}>Descargar</a> 
        <CSVLink
          headers={headers}
          filename={fileNameEx}
          data={data}
          ref={this.csvLinkEl}
        />
      </div>
    );
  }
}

export default AsyncCSV;