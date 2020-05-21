import React, {useContext} from 'react'
import styled from 'styled-components'
import { GeneralContext } from '../store/GeneralContext'

const Wrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: auto;
    position: relative;
    z-index: 1;
`

const PageContainer = (props) => {
    const { general } = useContext(GeneralContext)
    return (
        <Wrapper style={general ? {background: `${general.backgroundColor.hex}`, color: `${general.textColor.hex}`}: null}>
            {props.children}
        </Wrapper>
    )
}

export default PageContainer
