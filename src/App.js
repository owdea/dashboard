import './App.css';
import DataBox from './components/DataBox';
import GraphBox from './components/GraphBox';
import AlertBox from './components/AlertBox';
import coldImg from './icons/cold.png';
import hotImg from "./icons/hot.png";
import tempImg from "./icons/temp.png";
import sosImg from "./icons/sos.png"
import { useState } from 'react';

function App() {
  

  return (
    <div className="App">
      <div className="Container">
        <DataBox title="Temperature" data="21" unit="°C" img={tempImg} imgAlt="thermometer"/>
        <DataBox title="Min Temperature" data="17" unit="°C" img={coldImg} imgAlt="snowflake - low temperature icon" />
        <DataBox title="Max Temperature" data="25" unit="°C" img={hotImg} imgAlt="fire - hot temperature icon"/>
        <DataBox title="Workplace situation" data="OK" img={sosImg} imgAlt="SOS text icon"/>
      </div>
      <div className='Container'>
        <GraphBox title="Temperature"/>
        <AlertBox title="Alert history"/>
      </div>
    </div>
  );
}

export default App;
