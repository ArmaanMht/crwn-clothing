import React from 'react'
import './signin-and-signup.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
const SignInAndSignUp = () => {
    return (
        <div className="signin-and-signup">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}
export default SignInAndSignUp;