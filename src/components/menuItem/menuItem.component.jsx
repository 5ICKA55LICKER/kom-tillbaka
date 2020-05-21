import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const ItemContainer = styled.div`
    
    padding: 5% 0; 
  
`

const Item = styled(Link)`
    position: relative;
    z-index: 99;
    pointer-events: auto;
    font-size: 26px;
    transform: scale(.6, 1);
    -webkit-transform: scale(.6, 1); /* Safari and Chrome */
    -moz-transform: scale(.6, 1); /* Firefox */
    -ms-transform: scale(.6, 1); /* IE 9+ */
    -o-transform: scale(.6, 1); /* Opera */
    text-decoration: none;
    color: white;
`
const HashItem = styled(HashLink)`
    position: relative;
    z-index: 99;
    pointer-events: auto;
    font-size: 26px;
    transform: scale(.6, 1);
    -webkit-transform: scale(.6, 1); /* Safari and Chrome */
    -moz-transform: scale(.6, 1); /* Firefox */
    -ms-transform: scale(.6, 1); /* IE 9+ */
    -o-transform: scale(.6, 1); /* Opera */
    text-decoration: none;
    color: white;
`


const MenuItem = ({item}) => {
const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    })}
  
    return (
        <ItemContainer>
            {item.name !== 'WORKS' ? 
             <Item to={item.link}>{item.name}</Item>
            :<HashItem scroll={el => scrollWithOffset(el, 85)} to={`/#${item.link}`}>{item.name}</HashItem>
            }
           
        </ItemContainer>
       
    )
}

export default MenuItem
