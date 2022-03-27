import React from 'react'
import useConverter from '../../useConverter'
function MeterKilometer() {
    const [value,ref]=useConverter(0.001)
    return (
        <div className='units'>
            enter meter
            <input type="number"  ref={ref} placeholder='type here'/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default MeterKilometer