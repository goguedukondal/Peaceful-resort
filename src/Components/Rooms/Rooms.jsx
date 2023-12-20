import React from 'react'
import Hero from '../Hero/Hero'
import Banner from '../Banner/Banner'
import {Link} from 'react-router-dom';
import Roomcontainer from '../RoomContainer/Roomcontainer';
function Rooms() {
  return (
    <div>
      <Hero hero='roomsHero'>
        <Banner>
          <Link to='/' className='btn-primary'>Return To Home</Link>
        </Banner>
      </Hero>
      <Roomcontainer/>
    </div>
  )
}

export default Rooms