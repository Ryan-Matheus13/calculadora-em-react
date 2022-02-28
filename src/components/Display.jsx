import React from 'react'

import './Display.css'

const Display = ( { state } ) => {
    return ( 
        <div className='display-container'>
            <div className='display'>
                <input value={state} className='display-result'/>
            </div>
        </div>
     );
}
 
export default Display;