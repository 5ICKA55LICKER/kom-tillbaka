import React, {useContext} from 'react'
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'
import styled from 'styled-components'
import { HomeContext } from '../../store/HomeContext'


const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}
const LogoImg = styled.img`
    width: 90%;
    height: auto;
`
const Logo = () => {
    const { header } = useContext(HomeContext)
    return (
        <LogoImg src={urlFor(header.logo).url()} alt="kom tillbaka"/>
    )
}

export default Logo

