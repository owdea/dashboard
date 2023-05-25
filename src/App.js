import './App.css';
import React, { useState } from "react";
import coldImg from './icons/cold.png';
import hotImg from "./icons/hot.png";
import tempImg from "./icons/temp.png";
import sosImg from "./icons/sos.png"
import Dashboard from './components/Dashboard';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

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

const DataBoxes = [
  {
    title: "Temperature",
    data: lastTemperature,
    unit: "°C",
    img: tempImg,
    imgAlt: "thermometer",
  },
  {
    title: "Min temperature",
    data: minTemperature,
    unit: "°C",
    img: coldImg,
    imgAlt: "snowflake - low temperature icon",
  },
  {
    title: "Max temperature",
    data: maxTemperature,
    unit: "°C",
    img: hotImg,
    imgAlt: "fire - hot temperature icon",
  },
  {
    title: "Workplace situation",
    data: "OK",
    img: sosImg,
    imgAlt: "SOS text icon",
  },
]

  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = (date) => {
    console.log("Vybrané datum", date)
    setSelectedDate(date);
  }

  return (
    <div>
      <DatePicker 
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
      />
      <Dashboard DataBoxes={DataBoxes} generatedData={generatedData}/>
    </div>
  );
}

export default App;
