import React, { useEffect, useState } from 'react'

import './Button.css'

const Button = ({ children, onClick }) => {
    console.log(children)
    const [button, setButton] = useState("button")
    
    useEffect(() => {
        if (children === "0") {
            setButton("button large")
        } else if(children === "C" || children === "x2" || children === "%") {
            setButton("button red")
        } else if(children === "÷" || children === "X" || children === "-" || children === "+" || children === "=") {
            setButton("button white")
        }
    },{})
    return ( 
        <button onClick={onClick} className={button}>
            {children}
        </button>
     );
}
 
export default Button;