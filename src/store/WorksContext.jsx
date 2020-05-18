import React, { createContext, useState, useEffect, useContext} from 'react'
import sanityClient from '../client'
import Context from './context'
export const WorksContext = createContext()

const WorksContextProvider = (props) => {
    const [works, setWorks] = useState([])
    useEffect(() => {
        const worksArray = []
        const workQuery = `*[_type == "works"]`
        sanityClient.fetch(workQuery).then(works => {
          works.forEach(work => {
            worksArray.push(work)
          })
          setWorks(worksArray)
        })
    }, [])
   
    return (
        <WorksContext.Provider value={{works}}>
            
            {props.children}
            
        </WorksContext.Provider>
    )
}

export default WorksContextProvider
