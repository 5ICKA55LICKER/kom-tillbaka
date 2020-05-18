import React, { createContext, useState, useEffect} from 'react'
import sanityClient from '../client'
export const GeneralContext = createContext()

const GeneralContextProvider = (props) => {
    const [general, setGeneral] = useState('')
    useEffect(() => {
        const generalQuery = `*[_type == "general"]`
        sanityClient.fetch(generalQuery).then(general => {
          general.forEach(general => {
            setGeneral(general)
          })
        })
    }, [])
   
    return (
        <GeneralContext.Provider value={{general}}>
            
            {props.children}
            
        </GeneralContext.Provider>
    )
}

export default GeneralContextProvider
