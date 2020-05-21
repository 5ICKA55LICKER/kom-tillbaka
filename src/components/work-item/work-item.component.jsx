import React from 'react'
import styled from 'styled-components'
import sanityClient from "../../client"
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const Image = styled.img`
    width: 80%;
    height: auto;
`
const WorkItem = ({work}) => {

    return (
        <Image src={urlFor(work.image).url()} />
    )
}

export default WorkItem
