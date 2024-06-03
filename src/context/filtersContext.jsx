import { createContext, useState } from "react";

export const filtersContext = createContext()

export function FiltersProvider({children}){

    const [filter, setFilter] = useState('all')
    const [sortBy, setSortBy] = useState('recommended')
    
    
    return(
        <filtersContext.Provider value={{filter, setFilter, sortBy, setSortBy}}>
            {children}
        </filtersContext.Provider>
    )
}