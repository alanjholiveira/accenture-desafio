import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import phone from './assets/phone.jpg'
import './App.css';

function App() {
  const [valueDiplay, setValueDisplay] = useState('');
  const [valueArray, setValueArray] = useState([]);


  function btnNumb(value) {
   setValueDisplay(`${valueDiplay}${value}`);
   setValueArray(prevArray => [...prevArray, value]);
  }

  return (
     <div className="container">
       {/*<img src={phone} alt="teste" width={550} />*/}

       <div className="phone-container">
        <div className="phone-display">
            <span id="displayValue">{valueDiplay}</span>
        </div>
         <div id="keyboard" className="phone-keyboard">
          <div className={"phone-keyboard-row"}>
            <button type={"button"} className={"btn"} onClick={() => btnNumb(1)}>1</button>
            <button type={"button"} className={"btn"} onClick={() => btnNumb(2)}>2</button>
            <button type={"button"} className={"btn"} onClick={() => btnNumb(3)}>3</button>
          </div>

           <div className={"phone-keyboard-row"}>
             <button type={"button"} className={"btn"} onClick={() => btnNumb(4)}>4</button>
             <button type={"button"} className={"btn"} onClick={() => btnNumb(5)}>5</button>
             <button type={"button"} className={"btn"} onClick={() => btnNumb(6)}>6</button>
           </div>

           <div className={"phone-keyboard-row"}>
             <button type={"button"} className={"btn"} onClick={() => btnNumb(7)}>7</button>
             <button type={"button"} className={"btn"} onClick={() => btnNumb(8)}>8</button>
             <button type={"button"} className={"btn"} onClick={() => btnNumb(9)}>9</button>
           </div>

           <div className={"phone-keyboard-row"}>
             <button type={"button"} className={"btn "}>*</button>
             <button type={"button"} className={"btn "} onClick={() => btnNumb(' ')}>0</button>
             <button type={"button"} className={"btn "}>#</button>
           </div>

         </div>


       </div>

     </div>
  )
}

export default App;



