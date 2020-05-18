import React, {useContext} from 'react'
import styled from 'styled-components'
import { GeneralContext } from '../store/GeneralContext'

const Wrapper = styled.div`
    width: 100%;
    height: auto;
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
