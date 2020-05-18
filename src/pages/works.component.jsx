import React, {useContext} from 'react'
import styled from 'styled-components'
import { WorksContext } from '../store/WorksContext'
import WorkItem from '../components/work-item/work-item.component'


const WorkContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

const Works = () => {
    const { works } = useContext(WorksContext)
    return (
        <WorkContainer>
            {
                works ? works.map((item, id) => 
                <WorkItem key={id} work={item} />) : null
            }
        </WorkContainer>
    )
}

export default Works
