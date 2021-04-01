import React from 'react';

function Shifts({ shifts }) {
  const listOfShifts = shifts.map((shift, index) => 
    <td key = {index}>{shift.name}</td>
  );
  return (
    <tr>{listOfShifts}</tr>
  );
}

export default Shifts;
