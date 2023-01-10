import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const[bill, setBill] = useState();
  const[totalTip, setTotalTip] = useState(0);
  const[numOfPpl, setNumOfPeople] = useState(1);
  const[tipPercentage, setTipPercentage] = useState(0);
  const[splitTip, setSplitTip] = useState(0);
  const[splitTotal, setSplitTotal] = useState(0);

  function calculatorTip() {
    const result = ((bill *tipPercentage)/100).toFixed(2)
    return setTotalTip(result);
  }

  function calculatorSplitTip() {
    const result = (totalTip/numOfPpl).toFixed(2);
    return setSplitTip(result); 
  }

  function calculatorSplitTotal() {
    const result = ((bill/numOfPpl) + (totalTip/numOfPpl)).toFixed(2)
    return setSplitTotal(result); 
  }

  useEffect( ()=> {
    calculatorTip(); calculatorSplitTip(); calculatorSplitTotal()
  }, [bill, tipPercentage, numOfPpl])
 
  return (
    <div className='gradient'>
      <div className='container'>
        <div className='title'>
      <h1>Tip Calculator</h1>
      </div>

      <div className='wrapper'>
      <label>Bill</label>
      <span className='dollarsign'>$</span>
      <input type="number" 
            placeholder='0.00' 
            min="0"
            value={bill}
            onChange={ e => setBill(e.target.value)}
        />
        <span className='dollarsign'>$</span>
      </div>

      <div className='wrapper'>
        <label>Tip</label>
        <span className='dollarsign'>$</span>
        <input type="number" 
            placeholder='$0' 
            min="0"
            value={totalTip}
        />
        <span className='dollarsign'>$</span>
        </div>

        <div className='wrapper'>
        <label>Tip Percentage</label>
        <span>{tipPercentage}%</span>
        <input type="range"
                placeholder='0'
                min="0"
                max="50"
                value={tipPercentage}
                onChange = { e => setTipPercentage(e.target.value)}
                />
        </div>

        <div className='wrapper'>
        <label>Number of People</label>
        <span>{numOfPpl}</span>
        <input type="range"
              placeholder='1'
              min="1"
              max="20"
              value={numOfPpl}
              onChange = { e => setNumOfPeople(e.target.value)}
              />
        </div>      

        <div className='wrapper'>
        <label>Tip Per Person</label>
        <span>$ {splitTip}</span>
        </div>

        <div className='wrapper'>
        <label>Total Per Person</label>
        <span>$ {splitTotal}</span>
        </div>
        </div>
    </div>
  );
}


export default App;
