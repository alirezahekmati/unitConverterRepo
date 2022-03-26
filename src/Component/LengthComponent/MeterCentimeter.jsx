import React from 'react'
import useConverter from '../../useConverter'
function MeterCentimeter() {
    const [value,ref]=useConverter(100)
    return (
        <div className='units'>
            enter meter
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default MeterCentimeter