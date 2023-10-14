import {createContext, useState} from 'react'

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    const [cart, setCart] = useState('') 
    const value = {
        cart,
        setCart
    }

    return(
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
export {GlobalContext, GlobalProvider}