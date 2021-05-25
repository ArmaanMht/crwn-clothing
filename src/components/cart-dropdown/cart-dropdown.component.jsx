import React from 'react'
import CustomButton from "../custom-button/custom-button.component"
import './cart-dropdown.styles.scss'



export const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton className="button custom-button" >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown;