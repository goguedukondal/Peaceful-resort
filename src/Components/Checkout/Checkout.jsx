import React from 'react'
// import { useState } from 'react'
import Stripe from '../Stripe/Stripe'
import './Checkout.css'
function Checkout() {
  return (
    <div className='checkout'>
      <div className='payout-pic'>
        <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/304616595.jpg?k=fd72d44b9e77582f9843647fd64ded4dfe1de6cba459f6de2e1a3fee476c9538&o=&hp=1' alt='payout' className='payout' height='450px' width='400px'/>
        </div>
       
      <div>
        <button className='btn'><Stripe/></button>
      </div>
    </div>
  )
}

export default Checkout
