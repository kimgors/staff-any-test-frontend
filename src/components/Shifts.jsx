import React from 'react';

class Shifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shifts: [{ name: 'Shift 1'}, { name: 'Shift 2' } ]
    }
  }

  render() {
    return (
      this.state.shifts.map((shift, index) =>
        <tr key = {index}>
          <td>{shift.name}</td>
          <td>Sample Date</td>
          <td>Sample Start Time</td>
          <td>Sample End Time</td>
        </tr>
      )
    );
  }
}

export default Shifts;
