import React from 'react'

import './Display.css'

const Display = () => {
    return ( 
        <>
            <div className='display-container'>
                <div className='display'>
                    <span className='display-value'>0</span>
                    <span className='display-result'>0</span>
                </div>
            </div>
        </>
     );
}
 
export default Display;