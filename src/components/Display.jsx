import React from 'react'

import './Display.css'

const Display = ( { display } ) => {
    return ( 
        <div className='display-container'>
            <div className='display'>
                <input value={display} className='display-result'/>
            </div>
        </div>
     );
}
 
export default Display;