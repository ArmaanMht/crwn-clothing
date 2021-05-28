import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems    } from '../../redux/cart/cart.selectors'
import { selectCartTotal    } from '../../redux/cart/cart.selectors'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'
import './checkout.styles.scss'
const Checkout = ({cartItems,total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span className="product">Product</span>
                </div>
                <div className="header-block">
                    <span className="description">Description</span>
                </div>
                <div className="header-block">
                    <span className="quantity">Quantity</span>
                </div>
                <div className="header-block">
                    <span className="price">Price</span>
                </div>
                <div className="header-block">
                    <span className="remove">Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}> </CheckoutItem>)
            }

            <div className="total">{
                (
                    <span>TOTAL:${total }</span>
                )
            }</div>
            <div className="test-warning">*Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 04/24 - CVV: 123
            </div>
            <StripeCheckoutButton price={total}></StripeCheckoutButton>

        </div>
    )
}

const mapStateToProps= createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout);