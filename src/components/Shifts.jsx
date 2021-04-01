import React from 'react';

function Shifts({ shifts }) {
  return (
    shifts.map((shift, index) =>
      <tr key = {index}>
        <td>{shift.name}</td>
        <td>Sample Date</td>
        <td>Sample Start Time</td>
        <td>Sample End Time</td>
      </tr>
    )
  );
}

export default Shifts;
