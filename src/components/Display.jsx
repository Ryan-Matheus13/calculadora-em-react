import React from 'react'

import './Display.css'

const Display = ( {state, onChange} ) => {
    return ( 
        <>
            <div className='display-container'>
                <div className='display'>
                    <span className='display-value'>1+2</span>
                    <input onChange={onChange} value={state} className='display-result'/>
                </div>
            </div>
        </>
     );
}
 
export default Display;