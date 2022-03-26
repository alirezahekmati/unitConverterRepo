import React from 'react'
import useConverter from '../../useConverter'

function GalonLitter() {
    const [value,ref]=useConverter(3.7)
    return (
        <div className='units'>
            enter galon
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default GalonLitter