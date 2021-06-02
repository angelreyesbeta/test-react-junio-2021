import React, { useContext } from 'react'

//import { AirLineContex } from '../store/AirLineStore';
import { StoreContex } from '../store/Store';
import { MenuItems } from './MenuItems';
export const Menu = () => {

    //const [{airlines}] = useContext(AirLineContex)
    const [{airlines}] = useContext(StoreContex)
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        
                        {
                            airlines.map(air=>{

                                return <MenuItems
                                    key={air.id}
                                    airline={air}
                                    />  
                            })
                        }
                    </ul>
                    
                </div>
            </div>
        </nav>

        </>
    )
}
