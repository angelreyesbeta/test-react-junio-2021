import React from 'react'
import { useForm } from '../hooks/useForm';
import validator from 'validator'
import Swal from "sweetalert2";
import { expresiones } from '../helpers/expresiones';

export const Formulario = () => {
    const [formValues,handleInputChange,reset]=useForm({
        name:'',
        email:'',
        phone:'',
        age:''
    })
    const {name,email,phone,age}=formValues

    const hanledEnviar=(e)=>{
        e.preventDefault();
        
        if(isFormValid()){

            console.log('Nombre: '+name+' Email: '+email+' Phone: '+phone+' Edad: '+age)
            reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Registro OK',
                text:'Tu información fue enviada con éxito, estaremos en contacto contigo',
                timer: 5000,
                
              })
        }
    }
    const isFormValid=()=>{
        if(!validator.isEmail(email)){  
            Swal.fire({
                icon: 'error',
                title: 'Correo incorrecto',
                text: 'Por favor ingresa un correo valido',
              })
            return false
        }else if(!validator.isNumeric(phone) || phone.length>10){
            Swal.fire({
                icon: 'error',
                title: 'Teléfono Incorrecto',
                text: 'Por favor ingresa un teléfono valido',
              })
            return false
        }else if(!validator.isNumeric(age)){
            Swal.fire({
                icon: 'error',
                title: 'Edad incorrecta',
                text: 'Por favor ingresa una edad valida',
              })
            return false
        }else if(age<17 || age>100){
            Swal.fire({
                icon: 'error',
                title: 'Edad incorrecta',
                text: 'Por favor ingresa una edad entre 18 a 100',
              })
            return false
        }else if(!expresiones.nombre.test(name)){
            Swal.fire({
                icon: 'error',
                title: 'Nombre incorrecto',
                text: 'Por favor ingresa un nombre valido',
              })
            return false
        }
               
        return true
    }
    
    return (
        <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                <div className="well well-sm">
                    <form className="form-horizontal" method="post">
                    <fieldset>
                        <legend className="text-center header">Registro</legend>
                        <div className="form-group divCenter mt-3">
                        <span className="col-md-1 col-md-offset-2 text-center d-none d-lg-block"><i className="fa fa-user bigicon" /></span>
                        <div className="col-md-6">
                            <input 
                                id="fname" 
                                name="name"
                                onChange={handleInputChange}
                                value={name}
                                type="text" 
                                placeholder="First Name" 
                                className="form-control" />
                        </div>
                        </div>
                        
                        <div className="form-group divCenter">
                        <span className="col-md-1 col-md-offset-2 text-center d-none d-lg-block"><i className="fa fa-envelope bigicon" /></span>
                        <div className="col-md-6">
                            <input 
                                id="email" 
                                name="email" 
                                onChange={handleInputChange}
                                value={email}
                                type="email" 
                                placeholder="Email Address" 
                                className="form-control" />
                        </div>
                        </div>
                        <div className="form-group divCenter">
                            <span className="col-md-1 col-md-offset-2 text-center d-none d-lg-block"><i className="fa fa-phone-square bigicon" /></span>
                            <div className="col-md-6">
                                <input 
                                    id="phone" 
                                    name="phone" 
                                    value={phone}
                                    onChange={handleInputChange}
                                    type="number" 
                                    placeholder="Phone" 
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="form-group divCenter">
                            <span className="col-md-1 col-md-offset-2 text-center d-none d-lg-block"><i className="fa fa-calendar bigicon" /></span>
                            <div className="col-md-6">
                                <input 
                                    id="date" 
                                    name="age"
                                    onChange={handleInputChange}
                                    value={age}
                                    type="number" 
                                    placeholder="Edad" 
                                    className="form-control" />
                            </div>
                        </div>
                        <div className="form-group divCenter">
                        <div className="col-md-12 text-center">
                            <button type="submit" onClick={hanledEnviar} className="btn btn-outline-success btn-lg">Enviar</button>
                        </div>
                        </div>
                    </fieldset>
                    </form>
                </div>
                </div>
            </div>
</div>

            
        </>
    )
}
