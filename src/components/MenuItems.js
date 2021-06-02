import React, { useContext, useEffect } from 'react'
import { StoreContex } from '../store/Store';
import {types} from '../types/types'

export const MenuItems = ({airline}) => {
    const [,,,dispatchBienvenida] = useContext(StoreContex)

    const action=()=>{
        dispatchBienvenida({
            type:types.seleccionarNombre,
            payload:airline.name
        })
    }

    const hanledOptenerName=(e)=>{
       e.preventDefault();
        action()
        
    }

    useEffect(() => {
        action()
    }, [airline])

    return (
        <>
            
                <li 
                    className="nav-item nav-link"
                    onClick={hanledOptenerName}
                    id="enlace"
                    >
                    {airline.name}
                </li>
            
            
        </>
    )
}
