import React, { createContext } from "react";



const CalcContext = createContext({})

const CalcProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {





    return (
        <CalcContext.Provider value={{}}>
            {children}
        </CalcContext.Provider>
    )
}

export { CalcContext, CalcProvider }