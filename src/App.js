import './App.css';
import DataBox from './components/DataBox';
import GraphBox from './components/GraphBox';
import AlertBox from './components/AlertBox';
import coldImg from './icons/cold.png';
import hotImg from "./icons/hot.png";
import tempImg from "./icons/temp.png";
import sosImg from "./icons/sos.png"
import { useState } from 'react';
import { DateRangePicker } from 'rsuite';

function App() {
  


  function generateData(numSamples, intervalMinutes, tempRange, decimalPlaces) {
    const data = [];
    let currentTime = new Date();
  
    for (let i = 0; i < numSamples; i++) {
      const temperature = parseFloat((Math.random() * (tempRange[1] - tempRange[0]) + tempRange[0]).toFixed(decimalPlaces));
      const time = currentTime.toISOString();
  
      data.push({ temperature, time });
  
      // Přidáváme interval v minutách k aktuálnímu času
      currentTime.setMinutes(currentTime.getMinutes() + intervalMinutes);
    }
  
    return data;
  }
  
  const numSamples = 288;
  const intervalMinutes = 20;
  const tempRange = [16, 23];
  const decimalPlaces = 1;
  
  const generatedData = generateData(numSamples, intervalMinutes, tempRange, decimalPlaces);
  
  const lastTemperature = generatedData[generatedData.length -1].temperature; //zjištení poslední teploty

  let maxTemperature = generatedData[0].temperature; //defaultní nastavení prvního členu na maxTemperature
  let minTemperature = generatedData[0].temperature //defaultní nastavení prvního členu na maxTemperature
  for (let i = 0; i < generatedData.length; i++) {
    if (generatedData[i].temperature > maxTemperature) {
      maxTemperature = generatedData[i].temperature
    }
    if (generatedData[i].temperature < minTemperature) {
      minTemperature = generatedData[i].temperature
    }
  }


  return (
    <div className="App">
      <div className="Container">
        <DataBox title="Temperature" data={lastTemperature} unit="°C" img={tempImg} imgAlt="thermometer"/>
        <DataBox title="Min Temperature" data={minTemperature} unit="°C" img={coldImg} imgAlt="snowflake - low temperature icon" />
        <DataBox title="Max Temperature" data={maxTemperature} unit="°C" img={hotImg} imgAlt="fire - hot temperature icon"/>
        <DataBox title="Workplace situation" data="OK" img={sosImg} imgAlt="SOS text icon"/>
      </div>
      <div className='Container'>
        <GraphBox title="Temperature" dataWithDate={generatedData}/>
        <AlertBox title="Alert history"/>
      </div>
    </div>
  );
}

export default App;
