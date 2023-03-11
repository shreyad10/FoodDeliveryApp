import React, {useContext} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { ShopContext } from '../../context/shop-context';
import './checkout.css'

export const Checkout = () => {
    const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

    const onToken = (token) => {
        console.log(token)
    }
  return (
    <>
    <br/>
    <br/>
    <br/> 
    <div className='Bill-details'>
        <h1>Order Summary</h1>
        <h2> <p>Amount: ₹ {totalAmount}</p></h2>
        <h2> <p>GST: ₹ 50</p></h2>
        <h2> <p>Subtotal: {totalAmount+50}</p></h2>
        <br/>
        <StripeCheckout
        token={onToken}
        name = "Powered By Stripe"
        currency='Inr'
        amount={totalAmount+50}
        stripeKey="pk_test_51MkXvaSJB7k8CTlsH5oPzL3mmZryUv7ZSyUpu5HVPBYP9iC89CbtfB4OsBXHTUG9YDjgGxeqFUy7szi5LMviTP0700eR0AE9lJ"
      />
    </div>
    </>
  )
}
