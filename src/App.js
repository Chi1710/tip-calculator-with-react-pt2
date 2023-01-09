import { useState } from 'react';
import './App.css';


function App() {

  const[bill, setBill] = useState(0);
  const[totalTip, setTotalTip] = useState(0);
  const[numOfPpl, setNumOfPeople] = useState(0);
  const[tipPercentage, setTipPercentage] = useState(0);
  // const[splitTip, setSplitTip] = useState(0);
  // const[splitTotal, setSplitTotal] = usestate(0);

  return (
    <div>
      <h1>Tip Calculator</h1>

      <label>Bill</label>
      <span>$</span>
      <input type="number" 
            placeholder='0.00' 
            min="0"
            value={bill}
            onChange={ e => setBill(e.target.value)}
        />

        <label>Tip</label>
        <span>$</span>
        <input type="number" 
            placeholder='0' 
            min="0"
            value={totalTip}
            onChange={ e => setTotalTip(e.target.value)}
        />

        <label>Tip Percentage</label>
        <span>{tipPercentage}%</span>
        <input type="range"
                placeholder='0'
                min="10"
                max="50"
                value={tipPercentage}
                onChange = { e => setTipPercentage(e.target.value)}
                />

        <label>Number of People</label>
        <span>{numOfPpl}</span>
        <input type="range"
              placeholder='1'
              min="1"
              value={numOfPpl}
              onChange = { e => setNumOfPeople(e.target.value)}
              />

    </div>
  );
}


export default App;
