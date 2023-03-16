import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const[bill, setBill] = useState(0);
  const[tip, setTip] = useState(0);
  const[totalTip, setTotalTip] = useState(0);
  const[numOfPpl, setNumOfPeople] = useState(1);
  const[tipPercentage, setTipPercentage] = useState(0);
  const[totalBill, setTotalBill] = useState(0)

  function calculatorTip() {
    let result = (((parseFloat(bill) * tipPercentage)/100))/parseInt(numOfPpl)
    return setTip(result.toFixed(2));
  }

  function calculatorTotal() {
    let total = (parseFloat(bill) + parseFloat(totalTip)) / parseInt(numOfPpl)
    return setTotalBill(total.toFixed(2)); 
  }

  function calculatorTotalTip() {
    let result = parseFloat(((bill * tipPercentage)/100))
    return setTotalTip(result.toFixed(2));
  }

  useEffect( ()=> {
    calculatorTip(); 
    calculatorTotal();
    calculatorTotalTip();
  }, [bill, totalTip, numOfPpl, tipPercentage])
 
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
      </div>

      <div className='wrapper'>
        <label>Tip</label>
        <span>$ {totalTip}</span>
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
        <span>$ {tip}</span>
        </div>

        <div className='wrapper'>
        <label>Total Per Person</label>
        <span>$ {totalBill}</span>
        </div>
        </div>
    </div>
  );
}


export default App;
