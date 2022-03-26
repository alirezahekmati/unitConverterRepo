import React from 'react'
import useConverter from '../../useConverter'

function PoundKilogram() {
    const [value,ref]=useConverter(0.45)
    return (
        <div className='units'>
            enter Pound
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default PoundKilogram