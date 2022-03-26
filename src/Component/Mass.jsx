import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Mass() {
  return (
    <div>
      <nav>
        <Link to='KilogramPound' >KilogramPound</Link>
        <Link to='PoundKilogram' >PoundKilogram</Link>
        <Link to='KilogramOnce' >KilogramOnce</Link>
        <Link to='OnceKilogram' >OnceKilogram</Link>
      </nav>

      <Outlet />
    </div>

  )
}

export default Mass