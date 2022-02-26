import React, { useState } from 'react'
import './App.css'
import Button from './components/Button';
import Display from './components/Display';

//sfc
const App = () => {
  
  let teste = {}
const [teste, setTeste] = useState(`${teste}`)
  const [state, setState] = useState("0")

  const handleInput = (e) => {
    console.log(e.target.textContent)
  }

  const handleAddNumber = (e) => {
    setState(state.replace(/^0+/, "") + e.target.textContent)
    console.log()
  }

  const handleAddDecimal = (e) => {
    if(state.indexOf(",") == -1 ) {
      setState(state + ",")
    } else {
      console.log("teste")
    }
  }

  const handleOperator = (e) => {
    setState(state + e.target.textContent)

    teste[`valor ${Object.keys(teste).length + 1}`] = state
    setState("")
    console.log(teste)
  }

  const handleClearDisplay = (e) => {
    setState("0")
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