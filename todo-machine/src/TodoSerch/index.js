import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSerch.css';

function TodoSerch(){
   const {SearchValue, setSerchValue}=React.useContext(TodoContext);
    //searchvalue es el estado inial y el setsearchvalue para modificar el valor

    const onSerchValueChange = (event) => {//esta funcion nos perimte que cada ves que hagamos un cambio en el input va a llamar a la funcion setSerchValue para actualizar nuestro estado inicial
        console.log(event.target.value);//esta propirdad target value nos da el valor de lo que escribamos en el input serch
        setSerchValue(event.target.value);//aqui es para que el valor de modificacion se guarde 
    }
    return(
        <input className='TodoSerch' 
               placeholder='cebolla'
               value={SearchValue}//aqui enviamos nuesto estado inicial para conectarlo  //ademas decimo que el valor de nuestro input tiene que ser igual a nuestro estado OSE LOS ESTAMOS CONECTANDO
               onChange={onSerchValueChange}//aqui estamos llamando a la funcion onSerchValueChange para hacer dicha actualizacion
        />  
    );
}

export {TodoSerch};//creamos la funcion para despues exportarla