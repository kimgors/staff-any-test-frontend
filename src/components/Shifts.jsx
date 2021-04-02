import React from 'react';
import { URL, axios } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

class Shifts extends React.Component {
  constructor(props) {
    super(props);
    library.add(faEdit);
    library.add(faTrash);

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
            <button type="button" className="btn btn-info ml-2" onClick={() => this.props.openModal(shift)}>
              <FontAwesomeIcon icon={["fas", "edit"]} />
            </button>
            <button type="button" className="btn btn-danger ml-2" onClick={() => this.props.deleteShift(shift)}>
              <FontAwesomeIcon icon={["fas", "trash"]} />
            </button>
          </td>
        </tr>
      )
    );
  }
}

export default Shifts;
