import React from 'react'
import {Link,Outlet} from 'react-router-dom'
function Length() {
  return (
    <div className='Length'>
      <nav>
        <Link to='MeterCentimeter' >Meter to Centimeter</Link>
        <Link to='CentimeterMeter' >Centimeter to Meter</Link>
        <Link to='Kilometermeter' >Kilometer to meter</Link>
        <Link to='meterKilometer' >meter to Kilometer</Link>
        <Link to='FootMeter' >Foot to Meter</Link>
        <Link to='MeterFoot' >Meter to Foot</Link>
        
      </nav>
      
      <Outlet/>
      
    </div>
  )
}

export default Length