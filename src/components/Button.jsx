import React, { useEffect, useState } from 'react'

import './Button.css'

const Button = ({ value , onClick }) => {
    
    const [button, setButton] = useState("button")
    
    useEffect(() => {
        if (value === "0") {
            setButton("button large")
        } else if(value === "C" || value === "x2" || value === "%") {
            setButton("button red")
        } else if(value === "÷" || value === "X" || value === "-" || value === "+" || value === "=") {
            setButton("button white")
        }
    },{})

    return ( 
        <button onClick={onClick} className={button}>
            {value}
        </button>
     );
}
 
export default Button;