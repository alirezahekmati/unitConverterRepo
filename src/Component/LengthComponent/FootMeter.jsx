import React from 'react'
import useConverter from '../../useConverter'
function FootMeter() {
    const [value,ref]=useConverter(0.3)
    return (
        <div className='units'>
            enter foot
            <input type="number"  ref={ref} placeholder='type here'/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default FootMeter