import './App.css';
import { useState } from 'react';
import uuid from 'react-uuid'

function App() {
  
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('Male')
  const [bal, setBal] = useState(0);

  const calcBal = (e) => {
    e.preventDefault()
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    let result = 0
      
    if(gender == 'male') {
       result = gramsLeft/(weight*0.7)
    } else {
      result = (gramsLeft/(weight*0.6))
    }
    if(result<0) {
      setBal(0)
    } else {
      setBal(result)
    }
  }
  return (
    <>
    <h1>Calculating alcohol blood level</h1>
    <form onSubmit={calcBal}>
    <div>
      <label>Weight</label>
      <input type="number" name="weight" id="weight" onChange={e => setWeight(e.target.value)}/>
      </div>
      <div>
      <label>Bottles</label>
      <input type="number" name="bottles" id="bottles" onChange={e => setBottles(e.target.value)}/>
      </div>
      <div>
      <label>Time</label>
      <input type="number" name="time" id="time" onChange={e => setTime(e.target.value)}/>
      </div>
      <div>
      <label>Gender</label>
      <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
      </div>
      <div>
        <output>{bal.toFixed(2)}</output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
    </>
);
}

export default App;