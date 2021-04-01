import ShiftTable from './components/shared/ShiftTable';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Take Home Assignment</a>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ShiftTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
