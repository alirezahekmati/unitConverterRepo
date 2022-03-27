import React from 'react'
import image from '../images/ReactRouter.png'
import image2 from '../images/React.webp'

function Home() {
  return (
    <div>
      <p>with this converter you can convert diffrent units choose from any of the option above </p>
      <p className='refrence'>technologies and concepts that are used in this project:
      <br /> 
      <img src={image} alt="Router" className='ref-image'/> ReactRouter V6 - nested Routes   <br />
      <img src={image2} alt="React" className='ref-image'/>  useState useEffect useRef costumHook</p>
    </div>
  )
}

export default Home