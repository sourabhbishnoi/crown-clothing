import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
 const priceForStripe = price * 100;
 const publishablekey =  'pk_test_TYooMQauvdEDq54NiTphI7jx';
 const onToken = token => {
 	console.log(token);
 	alert('Payment Successful')
 }

 return(
      <StripeCheckout
       label ='Pay Now'
       name='Crown Clothing PVT LTD'
       billingAddress
       shippingAddress
       img='https://svgshare.com/i/CUz.svg'
       description={`Your total value is $${price}`}
       amount={priceForStripe}
       panelLabel='Pay Now'
       token={onToken}
       stripeKey={publishablekey}
        />
    );
};

export default StripeCheckoutButton;