import React from 'react'
import './Stripe.css'
import StripeCheckout from 'react-stripe-checkout';
function Stripe() {
    const onToken =(token)=>{

    }
    const onClick=(button)=>{
        alert('Button Clicked');
    }
  return (
    <div className='stripe-pay'>
        <StripeCheckout
        name='Peaceful Resort'
        stripeKey="pk_test_51NM7wZSG90wxmop0JD4ItuBpVw3CDky9lBpaLxYNFE3ToOyuY7dS9O1GMJpveibC9c6APFkkEwCrnPqgfHlNkFsu00R1AufQPR"
        token={onToken} // Pass the callback function for handling the token
        amount={1000} // Amount in cents
        currency="USD"
        />
    </div>
  )
}

export default Stripe
