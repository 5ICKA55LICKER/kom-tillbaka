import React from 'react'
import Logo from '../components/logo/logo.component'
import styled from 'styled-components'


const HomeSection = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Home = () => {
    return (
        <HomeSection>
            <Logo />
        </HomeSection>

    )
}

export default Home
