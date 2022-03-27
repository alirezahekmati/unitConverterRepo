import React from 'react'
import useConverter from '../../useConverter'

function OnceKilogram() {
    const [value,ref]=useConverter(0.02)
    return (
        <div className='units'>
            enter Once
            <input type="number"  ref={ref} placeholder='type here'/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default OnceKilogram