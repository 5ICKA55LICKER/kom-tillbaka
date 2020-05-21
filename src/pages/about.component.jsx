import React, {useContext} from 'react'
import styled from 'styled-components'
import { AboutContext } from '../store/AboutContext'
import PortableText from '@sanity/block-content-to-react'

const Container = styled.div`

    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-flow: column wrap;
    text-align: left;
    padding: 7%;
    box-sizing: border-box;
    font-family: 'Helvetica'
`

const DescContainer = styled.div`
    width: 50%;
    font-size: 36px;
    font-family: 'Helvetica'
`
const Desc = styled(PortableText)`

`

const Press = styled.p`
    font-size: 32px;
    font-family: 'Helvetica', 'Arial', sans-serif;
`

const PressLinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-flow: column wrap;
    text-align: left;
    width: 100%;
`

const PressLink = styled.a`
    text-decoration: none;
    color: white;
    font-weight: 400;
    font-size: 22px;
    line-height: 50px;
    `

const About = () => {
    const { about } = useContext(AboutContext)
    return (
        <Container >
            <DescContainer>
            <Desc blocks={about.about} />
            <Press>{about.pressMessage}</Press>
            <PressLinkContainer>
            {about ? about.press.map((item, id) => <PressLink key={id} href={item.link}>>{item.name}</PressLink>
            ): null}
            </PressLinkContainer>
           
            </DescContainer>
            
        </Container>
    )
}

export default About
