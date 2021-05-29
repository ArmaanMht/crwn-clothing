import React, { Children } from 'react'
// import './custom-button.styles.scss'
import {CustomButtonContainer} from './custom-button.styles.jsx'
export const CustomButton = ({children,...props}) => {
    return (
        <CustomButtonContainer {...props}>
        {children}
        </CustomButtonContainer>
    )
}
export default CustomButton