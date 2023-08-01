import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [no, setNO] = useState(0);

  const btnplus = () => {
    setNO(
      no + 1
    )
  }

  const btnminus = () => {
   if(no > 0){
    setNO(
      no - 1
    )
   }
  }

  const btnreset = () => {
    setNO(
     0
    )
  }

  useEffect(() => {
    // This effect will run whenever the 'no' state changes
    console.log('Current value of no state:', no);
  }, [no]);

  return (
    <div style={{ position: 'relative', height: "100vh", width: "100%" }}>
      <img src="https://images.pexels.com/photos/752484/pexels-photo-752484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="My Image" style={{ height: "100%", width: "100%", objectFit: "cover" }} />

      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-20%, -130%)', textAlign: 'center', color: 'white', zIndex: 1 }}>
        <h1 style={{fontFamily: 'Russo One',fontWeight:"500"}}>COUNTER</h1>
        <h1 style={{ fontSize: "70px" }}>{no}</h1>
        <button onClick={() => btnplus()} className="glow-on-hover">+</button>
        <button onClick={() => btnreset()} className="glow-on-hover">Reset</button>
        <button onClick={() => btnminus()} className="glow-on-hover">-</button>
      </div>
    </div>
  );
}

export default App;

