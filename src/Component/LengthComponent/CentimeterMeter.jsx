import React from 'react'
import useConverter from '../../useConverter'

function CentimeterMeter() {
    const [value,ref]=useConverter(0.01)
    return (
        <div className='units'>
            enter Centimeter
            <input type="number"  ref={ref} placeholder='type here'/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default CentimeterMeter