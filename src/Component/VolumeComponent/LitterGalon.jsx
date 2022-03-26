import React from 'react'
import useConverter from '../../useConverter'

function LitterGalon() {
    const [value,ref]=useConverter(0.26)
    return (
        <div className='units'>
            enter litter
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default LitterGalon