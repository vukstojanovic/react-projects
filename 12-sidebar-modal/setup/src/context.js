import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

function AppProvider({children}) {

    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function toggleSidebar() {
        setShowSidebar(prevValue => !prevValue);
    }

    function toggleModal() {
        setShowModal(prevValue => !prevValue);
    }

    return (
        <AppContext.Provider value={{showSidebar, showModal, toggleSidebar, toggleModal}}>
            {children}
        </AppContext.Provider> 
    );

}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export default {AppContext, AppProvider}




