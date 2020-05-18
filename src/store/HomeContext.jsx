import React, { createContext, useState, useEffect, useContext} from 'react'
import sanityClient from '../client'
import Context from './context'
export const HomeContext = createContext()

const HomeContextProvider = (props) => {
    const [header, setHeader] = useState('')
    const {globalState, globalDispatch} = useContext(Context)
    useEffect(() => {
        const headerQuery = `*[_type == "header"]`
        sanityClient.fetch(headerQuery).then(header => {
          header.forEach(header => {
            setHeader(header)
          })
        })
    }, [])
   
    return (
        <HomeContext.Provider value={{header}}>
            
            {props.children}
            
        </HomeContext.Provider>
    )
}

export default HomeContextProvider
