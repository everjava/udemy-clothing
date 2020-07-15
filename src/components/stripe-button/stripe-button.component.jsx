import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    //stripe price = cents
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H4ugbHKEwTOysKwEnKBVnasrSuSSuSnw60hzOasEqUlgo9K1az2NOo3ng9xOyGmPg441LFLv1onIvNz1eWOLQ3800RPcuLJuN' 
    
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
        label="Pay Now"
        name="Udemy Course" 
        billingAddress 
        shippingAddres
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`} 
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
