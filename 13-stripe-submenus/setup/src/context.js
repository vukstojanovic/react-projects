import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

export const NewContext = createContext();

export const ContextProvider = ({children}) => {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [page, setPage] = useState({page: "", links: []});
    const [location, setLocation] = useState({});

    function openSubmenu(text, coordinates) {
        const currentPage = sublinks.find(sublink => sublink.page === text);
        setPage(currentPage);
        setLocation(coordinates);
        setShowSubmenu(true);
    }

    function closeSubmenu() {
        setShowSubmenu(false);
    }

    return (
        <NewContext.Provider 
        value={{
            showSidebar,
            setShowSidebar,
            showSubmenu,
            openSubmenu,
            closeSubmenu,
            page,
            setPage
            }}
        >
            {children}
        </NewContext.Provider>
    )

}






