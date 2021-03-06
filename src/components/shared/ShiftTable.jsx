import Shifts from '../Shifts';
import React from 'react';

function ShiftTable({ openModal, deleteShift }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Date</th>
          <th scope="col">Start Time</th>
          <th scope="col">End Time</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <Shifts openModal={openModal} deleteShift={deleteShift}/>
      </tbody>
    </table>
  );
}

export default ShiftTable;
