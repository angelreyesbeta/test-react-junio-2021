import React, { createContext,useReducer } from "react";
import airLineReducer, { initialStore } from "../reducer/airLineReduces";
import bienvenidaReducer, { initialStoreBienvenida } from "../reducer/bienvenidaReducer";

const StoreContex=createContext()

const Store=({children})=>{

    const [airlines, dispatch] = useReducer(airLineReducer,initialStore)
    const [bienvenida, dispatchBienvenida] = useReducer(bienvenidaReducer,initialStoreBienvenida)
    return(
        <StoreContex.Provider value={
            [
                airlines,
                dispatch,
                bienvenida,
                dispatchBienvenida
            ]
            
        }
        >
            {children}
        </StoreContex.Provider>
    )
}

export {StoreContex}
export default Store
