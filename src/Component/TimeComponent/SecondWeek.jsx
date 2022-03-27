import React from 'react'
import useConverter from '../../useConverter'

function SecondWeek() {
    const [value,ref]=useConverter(0.00000165)
    return (
        <div className='units'>
            enter second
            <input type="number"  ref={ref} placeholder='type here'/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default SecondWeek