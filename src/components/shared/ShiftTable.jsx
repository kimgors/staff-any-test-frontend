import Shifts from '../Shifts';
import React from 'react';

function ShiftTable() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Time</th>
        </tr>
      </thead>
      <tbody>
        <Shifts/>
      </tbody>
    </table>
  );
}

export default ShiftTable;
