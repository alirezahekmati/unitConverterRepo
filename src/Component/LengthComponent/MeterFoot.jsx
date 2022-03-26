import React from 'react'
import useConverter from '../../useConverter'
function MeterFoot() {
    const [value,ref]=useConverter(3.3)
    return (
        <div className='units'>
            enter meter
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default MeterFoot