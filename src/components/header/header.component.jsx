import React from 'react'
import styled from 'styled-components'
import Menu from '../menu/menu.components'
const HeaderCont = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = (props) => {
    return (
        <HeaderCont>
            <Menu/>
        </HeaderCont>
    )
}

export default Header

