import React from 'react'
import Hero from '../Hero/Hero'
import Banner from '../Banner/Banner'
import { Link } from 'react-router-dom'
import Services from '../Services/Services'
import Featured from '../Featured Rooms/Featured'
function Home() {
  
  return (
    <div><Hero><Banner title='Luxurious rooms' subtitle='Deluxe rooms starting at $299'><Link to='/rooms' className='btn-primary'>Our Rooms</Link></Banner></Hero>
     <Services/>
    <Featured/>
    </div>
  )
}

export default Home