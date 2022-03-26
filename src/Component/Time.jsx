import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Time() {
  return (
    <div>
      <nav>
        <Link to='SecondDay' >SecondDay</Link>
        <Link to='DaySecond' >DaySecond</Link>
        <Link to='SecondWeek' >SecondWeek</Link>
        <Link to='WeekSecond' >WeekSecond</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Time