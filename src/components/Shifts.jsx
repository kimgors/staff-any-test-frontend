import React from 'react';
import { URL, axios } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

class Shifts extends React.Component {
  constructor(props) {
    super(props);
    library.add(faEdit);

    this.state = {
      shifts: []
    }
  }

  componentDidMount() {
    axios.get(`${URL}/v1/shifts`).then((response) => {
      this.setState({
        shifts: response.data
      });
    }) 
  }

  render() {
    return (
      this.state.shifts.map((shift, index) =>
        <tr key = {index}>
          <td>{shift.name}</td>
          <td>{shift.date}</td>
          <td>{shift.converted_start_time}</td>
          <td>{shift.converted_end_time}</td>
          <td>
            <button type="button" className="btn btn-info ml-2">
              <FontAwesomeIcon icon={["fas", "edit"]} />
            </button>
          </td>
        </tr>
      )
    );
  }
}

export default Shifts;
