import React from 'react'
import useConverter from '../../useConverter'

function WeekSecond() {
    const [value,ref]=useConverter(604796.1)
    return (
        <div className='units'>
            enter Week
            <input type="number"  ref={ref} placeholder='type here'/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default WeekSecond