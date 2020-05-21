import React, { createContext, useState, useEffect} from 'react'
import sanityClient from '../client'
export const AboutContext = createContext()

const AboutContextProvider = (props) => {
    const [about, setabout] = useState('')
    useEffect(() => {
        const aboutQuery = `*[_type == "about"]`
        sanityClient.fetch(aboutQuery).then(about => {
          about.forEach(about => {
            setabout(about)
          })
        })
    }, [])
   
    return (
        <AboutContext.Provider value={{about}}>
            
            {props.children}
            
        </AboutContext.Provider>
    )
}

export default AboutContextProvider