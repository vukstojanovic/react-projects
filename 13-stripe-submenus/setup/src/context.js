import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

export const NewContext = createContext();

export const ContextProvider = ({children}) => {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <NewContext.Provider value={{showSidebar, setShowSidebar}}>
            {children}
        </NewContext.Provider>
    )

}






