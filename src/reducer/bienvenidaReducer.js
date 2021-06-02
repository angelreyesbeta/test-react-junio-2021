import { types } from "../types/types";

const initialStoreBienvenida=""
 
 const bienvenidaReducer=(state,action)=>{
    switch (action.type) {
        case types.seleccionarNombre:
            return[

                action.payload
            ]

            
        default:
            return state;
    }
}

export {initialStoreBienvenida}
export default bienvenidaReducer