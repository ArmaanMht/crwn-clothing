import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import { selectCartItems    } from '../../redux/cart/cart.selectors'
import { selectCartTotal    } from '../../redux/cart/cart.selectors'
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
        </div>
    )
}

const mapStateToProps= createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(Checkout);