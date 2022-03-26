import React from 'react'
import useConverter from '../../useConverter'

function SecondDay() {
    const [value,ref]=useConverter(0.000011574)
    return (
        <div className='units'>
            enter second
            <input type="number"  ref={ref}/>
            =>
            <p>{value}</p>
        </div>
    )
}

export default SecondDay