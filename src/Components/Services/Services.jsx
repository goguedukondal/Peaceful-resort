// import React, { useState } from 'react';
import Title from '../Title/Title'


import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

function Services() {
    const services=[{
        icon:<FaCocktail/>,
        title:'Free Cocktails',
        info:'Book a room now and enjoy a complimentary cocktail service during your stay at our premium hotel. Cheers to relaxation!'
    },{
        icon:<FaHiking/>,
        title:'Endless Hiking',
        info:"Embark on endless hikes when you book with us – explore nature's beauty right from your room's doorstep."  
    },{
        icon:<FaShuttleVan/>,
        title:'Free Shuttle',
        info:'Experience convenience with our free shuttle service, making your stay enjoyable and hassle-free.'
    },{
        icon:<FaBeer/>,
        title:'Strongest Beer',
        info:'Savor the flavor of adventure with our strongest beer service, a perfect reward after a day of exploration.'
    }]

    // const modiyChanges =()=>{
    //   const newServise ={
    //     icon:<FaBeer/>,
    //     title:'New Servise',
    //   info:'New Information'
      
    //   }

    //   setServices((prev)=>[...prev,newServise])
    // }
  return (
    <div>
        <section className='services'>
      <Title title='Services' />
      <div className="services-center">
        {services.map((element,index)=>{
            return <div key={index} className='service'>
                 <span>{element.icon}</span>
                 <h6>{element.title}</h6>
                 <p>{element.info}</p>
            </div>
        })}
      </div>
      </section>
    </div>
  )
}

export default Services
