import { createContext, useEffect, useState } from "react";

export const ScrollContext = createContext({})

export default function ScrollProvider({children}) {

    const [id, setId] = useState("")


    function onScroll(id) {

        setId("")
        setId(id)
       
        

    }


    useEffect( () => {console.log("MUDOU")}, [id] )

    return (

        <ScrollContext.Provider value={{id, setId, onScroll}}>

            {children}

        </ScrollContext.Provider> 
    )

}