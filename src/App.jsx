import React from 'react'
import './App.css'
import Button from './components/Button';
import Display from './components/Display';

//sfc
const App = () => {
  return ( 
    <>
      <div className='container'>
        <Display/>
        <Button>C</Button>
        <Button>x2</Button>
        <Button>%</Button>
        <Button>÷</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>X</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>-</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>+</Button>
        <Button className='large-button'>0</Button>
        <Button>,</Button>
        <Button>=</Button>
      </div>
    </>
   );
}
 
export default App;