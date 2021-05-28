import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


export const StripeCheckoutButton = ({price,}) => {
    const priceForStripe=price*100;
    const publishableKey='pk_test_51Ivx2wSJaR7XsMnFMjFdTKBaRd3jBoSSGy0j4RnJN9OBGoqpPtg65ldKnikyOIv4fz9yD0IzLtrJqHDVV68g7uuZ00x1ORUUVs'
    const onToken=function(token){
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
        label="Pay Now"
        name="CRWN-Clothing Ltd."
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your Total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        >

        </StripeCheckout>
    )
}


export default StripeCheckoutButton;