import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeRevamp from './Components/HomeRevamp';
import { Button } from 'react-bootstrap';
import HireMe from './Components/HireMe';
import React from 'react';


function App() {

  const [showModal, setShowModal] = React.useState(false);
  const handleShowModal = (value) => {
      setShowModal(value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{float:"right", padding:"10px", display:"flex", flexDirection:"column"}}>
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="outline-success" size="sm" onClick={()=>setShowModal(true)}>Hire Me</Button>
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* <Home/>  */}
      <HomeRevamp/>

      <HireMe showModal={showModal} handleShowModal={handleShowModal}/>

      

    </div>
  );
}

export default App;
