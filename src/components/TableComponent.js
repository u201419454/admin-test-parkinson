import React from "react";

import axios from 'axios'

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }


  async componentDidMount() {
    const { idExamen } = this.props;
    const response = await fetch("https://parkinson-prediction-api.ew.r.appspot.com/examen/" + idExamen);
    const json = await response.json();
    this.setState({ data: json });
  }

  render() {
    const { idExamen } = this.props;
    console.log(idExamen)
    console.log(this.state.data.data)
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
            <td>
                <img src="https://i.pravatar.cc/50?img=1" alt="thumb" />
            </td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
            <td>
                <img src="https://i.pravatar.cc/50?img=2" alt="thumb" />
            </td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
            <td>
                <img src="https://i.pravatar.cc/50?img=3" alt="thumb" />
            </td>
          </tr>
        </tbody>
      </table>);
  }
}

export default TableComponent;