import React from 'react'
import useConverter from '../../useConverter'

function KilogramPound() {
    const [value,ref]=useConverter(2.5)
    return (
        <div className='units'>
            enter kilogram
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default KilogramPound