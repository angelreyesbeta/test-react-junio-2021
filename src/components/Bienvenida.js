import React, { useContext } from 'react'
import { StoreContex } from '../store/Store'

export const Bienvenida = () => {
    const [,,bienvenida] = useContext(StoreContex)

    return (
        <>
            <div className="container mt-5">
                <h1 className="mensajeBienvenida">Hola, bienvenido, sabemos que quieres viajar en un <span className="nameAirLine">{bienvenida}</span>, por favor
diligencia el siguiente formulario:</h1>
            </div>
        </>
    )
}
