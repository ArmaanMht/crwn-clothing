import React from 'react';
import Directory from '../../components/directory/directory.component'
// import './homepage.styles.scss'
import {HomePageContainer} from './homepage.styles.jsx'

const Homepage = () => {
    return (
        <HomePageContainer>
            <Directory></Directory>
        </HomePageContainer>
    )
}

export default Homepage;