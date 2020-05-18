import React from 'react'
import styled from 'styled-components'

const ItemContainer = styled.div`
    
    padding: 5% 0; 
`

const Item = styled.p`
    font-size: 26px;
    transform: scale(.6, 1);
    -webkit-transform: scale(.6, 1); /* Safari and Chrome */
    -moz-transform: scale(.6, 1); /* Firefox */
    -ms-transform: scale(.6, 1); /* IE 9+ */
    -o-transform: scale(.6, 1); /* Opera */
`


const MenuItem = ({item}) => {
    return (
        <ItemContainer>
            <Item>{item.name}</Item>
        </ItemContainer>
       
    )
}

export default MenuItem
