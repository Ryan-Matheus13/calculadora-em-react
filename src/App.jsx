import React, { useState } from 'react'
import './App.css'
import Button from './components/Button';
import Display from './components/Display';

//sfc
const App = () => {
  const [calculo, setCalculo] = useState({
      valor1: 0,
      valor2: 0,
      operador: "",
      operando: false
    })
  const [state, setState] = useState("0")

  const handleClearDisplay = () => {
    setState("0")
    setCalculo({valor1: 0, valor2: 0, operador: "", operando: false, resultado: 0})
  }
    
  const handleAddNumber = (e) => {
    if (calculo.operando == true) {
      if (state[0] == calculo.operador) {
        setState(state.replace(calculo.operador, e.target.textContent))
        calculo.valor2 = Number(e.target.textContent)
      } else {
        setState(state.replace(/^0+/, "") + e.target.textContent)
        calculo.valor2 = Number(state + e.target.textContent)
      }
    } else {
      setState(state.replace(/^0+/, "") + e.target.textContent)
      calculo.valor1 = Number(state + e.target.textContent)
    }
  }

  const handleAddDecimal = (e) => {
    if(state.indexOf(",") == -1 ) {
      setState(state + ",")
    }
  }

  const handleOperation = ({operador, valor1, valor2}) => {
    switch (operador) {
      case "+":
        return valor1 + valor2
      case "-":
        return valor1 - valor2
      case "x":
        return valor1 * valor2
      case "÷":
        return valor1 / valor2
      case "%":
        return (valor1 * valor2 / 100)
      case "x2":
        return valor1 ** valor2
      default:
        break;
    }
  }

  const handleOperator = (e) => {
    if(calculo.operando == false) {
      setState(e.target.textContent)
      calculo.operador = e.target.textContent
      calculo.operando = true
    } else {
      return
    }
  }

  const handleResult = () => {
    setState(handleOperation(calculo))
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
        <Button value={"x"} onClick={handleOperator}/>
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
        <Button value={"="} onClick={handleResult}/>
      </div>
    </>
   );
}
 
export default App;