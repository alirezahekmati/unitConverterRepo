import React from 'react'
import useConverter from '../../useConverter'

function DaySecond() {
    const [value,ref]=useConverter(86400)
    return (
        <div className='units'>
            enter day
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default DaySecond