import React, { useState } from 'react'
import './App.css'
import Button from './components/Button';
import Display from './components/Display';

//sfc
const App = () => {
  
  let select = document.querySelector(".display-result")
  const [state, setState] = useState("0")

  const handleInput = (e) => {
    console.log(e.target.textContent)
  }

  const handleAddNumber = (e) => {
    if(e.target.textContent == "0") {
      setState("")
      setState(state + e.target.textContent)
    }
    setState(state + e.target.textContent)
  }

  const handleAddDecimal = (e) => {

  }

  const handleOperator = (e) => {
    
  }

  const handleClearDisplay = (e) => {
    setState("0")
    console.log(select.value)
  }

  return ( 
    <>
      <div className='container'>
        <Display className='display' state={state}/>
        <Button value={"C"} onClick={handleClearDisplay}/>
        <Button value={"x2"} onClick={handleOperator}/>
        <Button value={"%"} onClick={handleOperator}/>
        <Button value={"÷"} onClick={handleOperator}/>
        <Button value={"1"} onClick={handleAddNumber}/>
        <Button value={"2"} onClick={handleAddNumber}/>
        <Button value={"3"} onClick={handleAddNumber}/>
        <Button value={"X"} onClick={handleOperator}/>
        <Button value={"4"} onClick={handleAddNumber}/>
        <Button value={"5"} onClick={handleAddNumber}/>
        <Button value={"6"} onClick={handleAddNumber}/>
        <Button value={"-"} onClick={handleOperator}/>
        <Button value={"7"} onClick={handleAddNumber}/>
        <Button value={"8"} onClick={handleAddNumber}/>
        <Button value={"9"} onClick={handleAddNumber}/>
        <Button value={"+"} onClick={handleOperator}/>
        <Button value={"0"} onClick={handleAddNumber}/>
        <Button value={","} onClick={handleAddDecimal}/>
        <Button value={"="} onClick={handleOperator}/>
      </div>
    </>
   );
}
 
export default App;