import './App.css';
import Length from './Component/Length'
import Mass from './Component/Mass'
import Time from './Component/Time'
import Volume from './Component/Volume'
import Home from './Component/Home';

import CentimeterMeter from './Component/LengthComponent/CentimeterMeter'
import MeterCentimeter from './Component/LengthComponent/MeterCentimeter'
import FootMeter from './Component/LengthComponent/FootMeter'
import MeterFoot from './Component/LengthComponent/MeterFoot'
import KilometerMeter from './Component/LengthComponent/KilometerMeter'
import MeterKilometer from './Component/LengthComponent/MeterKilometer'


import OnceKilogram from './Component/MassComponent/OnceKilogram'
import KilogramOnce from './Component/MassComponent/KilogramOnce'
import PoundKilogram from './Component/MassComponent/PoundKilogram'
import KilogramPound from './Component/MassComponent/KilogramPound'

import SecondDay from './Component/TimeComponent/SecondDay'
import DaySecond from './Component/TimeComponent/DaySecond'
import SecondWeek from './Component/TimeComponent/SecondWeek'
import WeekSecond from './Component/TimeComponent/WeekSecond'

import LitterGalon from './Component/VolumeComponent/LitterGalon'
import GalonLitter from './Component/VolumeComponent/GalonLitter'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import image from './images/tool_icon.png'
function App() {


  return (
    <Router>
      <div className='App-warp'>
        <div className="App">
          <nav>
            <Link to='/'><img src={image} alt="converter" className='conerter-home' /></Link>
            <Link to='/Volume'>Volume</Link>
            <Link to='/Mass'>Mass</Link>
            <Link to='/Time'>Time</Link>
            <Link to='/Length'>Length</Link>
          </nav>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/Volume/*' element={<Volume />}>
              <Route path='GalonLitter' element={<GalonLitter />} />
              <Route path='LitterGalon' element={<LitterGalon />} />
            </Route>
            <Route path='/Mass/*' element={<Mass />}>
              <Route path='PoundKilogram' element={<PoundKilogram />} />
              <Route path='KilogramPound' element={<KilogramPound />} />
              <Route path='OnceKilogram' element={<OnceKilogram />} />
              <Route path='KilogramOnce' element={<KilogramOnce />} />
            </Route>
            <Route path='/Time/*' element={<Time />}>
              <Route path='SecondDay' element={<SecondDay />} />
              <Route path='DaySecond' element={<DaySecond />} />
              <Route path='SecondWeek' element={<SecondWeek />} />
              <Route path='WeekSecond' element={<WeekSecond />} />
            </Route>
            <Route path='/Length/*' element={<Length />}>
              <Route path='MeterCentimeter' element={<MeterCentimeter />} />
              <Route path='CentimeterMeter' element={<CentimeterMeter />} />
              <Route path='Kilometermeter' element={<KilometerMeter />} />
              <Route path='meterKilometer' element={<MeterKilometer />} />
              <Route path='FootMeter' element={<FootMeter />} />
              <Route path='MeterFoot' element={<MeterFoot />} />
            </Route>
          </Routes>
        </div >

      </div>

    </Router >
  )
}

export default App;
