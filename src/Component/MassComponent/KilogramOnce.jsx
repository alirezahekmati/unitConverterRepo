import React from 'react'
import useConverter from '../../useConverter'

function KilogramOnce() {
    const [value,ref]=useConverter(35)
    return (
        <div className='units'>
            enter Kilogram
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default KilogramOnce