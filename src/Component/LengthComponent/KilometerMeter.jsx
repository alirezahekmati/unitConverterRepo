import React from 'react'
import useConverter from '../../useConverter'
function KilometerMeter() {
    const [value,ref]=useConverter(1000)
    return (
        <div className='units'>
            enter Kilometer
            <input type="number"  ref={ref} placeholder='type here'/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default KilometerMeter