
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function Flightbooker() {
  const[flightType, setflightType]= useState('one-way');
  const[departureDate, setDepaturedate]= useState("");
  const[returnDate, setreturnDate]= useState("");
  
  const HandleSubmitt = () => {
    if (flighttype == 'one-way'){
      aert(`You have booked a one-way flight on ${departureDate}`)
    }else{
      alert(` You have booked a return flight from ${departureDate} to ${returnDate}.` )
    }
  }

  return (
    <div>
      <h1>Flight Booker</h1>

      <div style={{marginBottom:'10px'}}>
        <label>oneway</label>
        
        <input type='radio' value="oneway" checked={flighttype === 'oneway'} onChange={() => setflightType('oneway')}/>
         <label>round</label>
        <input type='radio' value="return" checked={flighttype === 'return'} onChange={() => setflightType('return')}/>
        <div>
          <label>Depature</label>
          <input type='date' value={departureDate} onChange={(e) => setDepaturedate(e.target.value)}/>
        </div>
        
        {flighttype === 'return'&& (
          <div>
          <label>Return</label>
          <input type='date' value={returnDate} onChange={(e) => setreturndate(e.target.value)}/>
        </div>
        )}
        
        <button onClick={HandleSubmitt}>Book Flight</button>
      </div>
    </div>
  )
}

export default Flightbooker
