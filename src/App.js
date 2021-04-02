import { useState, useEffect } from 'react';
import ShiftTable from './components/shared/ShiftTable';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from 'react-modal';
import { modalCustomStyles, URL, axios } from './constants';
import DatePicker from "react-datepicker";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [currentShift, setCurrentShift] = useState(null);

  useEffect(() => {
    Modal.setAppElement('#root')
  });

  function openModal(shift) {
    setModalIsOpen(true);
    if (shift.id) {
      setCurrentShift(shift);
      setName(shift.name);
      setStartDate(new Date(shift.date));
      setStartTime(shift.converted_start_time);
      setEndTime(shift.converted_end_time);
    }
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  function deleteShift(shift) {
    axios.delete(`${URL}/v1/shifts/${shift.id}`, {}).then( () => {
      alert('Success');
      window.location.reload(false);
    }).catch((e) => {
      alert(e);
    });
  }

  function addNewShift(e) {
    const shift = { name: name, date: startDate, start_time: startTime, end_time: endTime }

    e.preventDefault();
    if (currentShift) {
      axios.put(`${URL}/v1/shifts/${currentShift.id}`, {
        shift: shift
      }).then( () => {
        alert('Success');
        closeModal();
        window.location.reload(false);
        setCurrentShift(null);
      })
      .catch (error => {
        alert(error);
      });
    } else {
      axios.post(`${URL}/v1/shifts`, {
        shift: shift
      }).then( () => {
        closeModal();
        window.location.reload(false);
        alert('Success');
      })
      .catch (error => {
        alert(error);
      });
    }
  }


  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#home">Take Home Assignment</a>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mb-2 mt-2">
            <button type="button" className="btn btn-primary" onClick={openModal}>
              Add New Shift
            </button>
          </div>
          <div className="col-12">
            <ShiftTable openModal={openModal} deleteShift={deleteShift}/>
          </div>
        </div>
      </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={modalCustomStyles}
          contentLabel="Add New Shift"
        > 
          <button className="btn btn-link float-right" onClick={closeModal}>&times;</button>
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name: </label>
                <input type="text" className="form-control" value={name} id="name" aria-describedby="name" onChange={e => setName(e.target.value)} placeholder="Name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date: </label><br/>
                <DatePicker selected={startDate} className="form-control" onChange={date => setStartDate(date)} />
              </div>
              <div className="form-group">
                <label htmlFor="start_time">Start time: </label><br/>
                <input type="time" id="start_time" value={startTime} className="form-control" onChange={e => setStartTime(e.target.value)} name="start_time" required/>
              </div>
              <div className="form-group">
                <label htmlFor="end_time">End time: </label><br/>
                <input type="time" id="end_time" value={endTime} className="form-control" onChange={e => setEndTime(e.target.value)} name="end_time" required/>
              </div>
              <button type="submit" onClick={addNewShift} className="btn btn-primary">Save</button>
            </form>
          </div>
        </Modal>
    </div>
  );
}

export default App;
