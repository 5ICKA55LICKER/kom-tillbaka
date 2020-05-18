import React, {useContext} from 'react'
import MenuItem from '../menuItem/menuItem.component'
import styled from 'styled-components'
import { HomeContext } from '../../store/HomeContext'

const MenuContainer = styled.div`

    display: flex;
    width: 100%;
    justify-content: center;
    height: auto;
    writing-mode: vertical-rl;
    -webkit-transform:rotate(180deg);
    -moz-transform:rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform:rotate(180deg);
    transform: rotate(180deg);
`
const Menu = () => {
    const { header } = useContext(HomeContext)
    console.log(header)
    return (
        <MenuContainer>
               {header ? header.menu.map((item, id) => 
               <MenuItem key={id} item={item} /> )
               : null }
        </MenuContainer>
    )
}

export default Menu

