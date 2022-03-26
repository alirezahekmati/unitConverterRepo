import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Volume() {
  return (
    <div>
      <nav>
        <Link to='GalonLitter' >GalonLitter</Link>
        <Link to='LitterGalon' >LitterGalon</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Volume