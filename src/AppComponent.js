import React from 'react'
import { Bienvenida } from './components/Bienvenida'
import { Formulario } from './components/Formulario'
import { Menu } from './components/Menu'
import Store from './store/Store'

export const AppComponent = () => {
    return (
        <> 
            <Store>
                <Menu/>
                <Bienvenida/>
                <Formulario/> 
            </Store>
        </>
    )
}
