import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

//la etiqueta textarea nos sirve como un input pero tiene la particularidad que el espacio donde escribimos no es tan pequeño como un input
function TodoForm(){

    const [newTodoValue, setNewTodoValue]=React.useState('');//este es el estado para los nuevos todos a guardar

    const {
        addTodo, 
        setOpenModal,
    }=React.useContext(TodoContext);//importanto la funcion addTodo que se encuentra en el archivo TodoContext


    const onChange= (event)=>{//funcion para resivir cada ves que los usuarios escriban  en la caja de texto llamada textarea

        setNewTodoValue(event.target.value);
    };

    const onCancel= ()=>{//funcion para cancelar 
    
        setOpenModal(false);
    };
    const onSubmit= (event)=>{//funcion para añadir todos --funciona de forma que recargue la pagina para ir cogiendo los valores  
        event.preventDefault();//este evento preventDefault nos sirve para que cuando e formulario se envie no trate de recargar la pagina o enviar ls datos algun lado OSEA VAMOS A CANCELAR ESO
        addTodo(newTodoValue);//aqui llamamos a la funcion addtodo y le vamos a enviar nuestro new todovalue que es el texto que escribiremos en la caja de texto textarea
        setOpenModal(false);//para cerrar nuestro modal
        setNewTodoValue('');

    };


//el form tambien tiene su propio evento llamado onsubmit y a este le vamos a llamar a la funcion onsubmit para añadir
    return(
        
        <form onSubmit={onSubmit}>
            <label>escribe todo
            </label>

            <textarea  
                value={newTodoValue}
                onChange={onChange}
                placeholder="cortar la cebolla para el almuerzo"
            /> 


            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel "
                    onClick={onCancel}
                 >
                    cancelar

                </button>


                <button 
                    
                    type="submit"
                    className="TodoForm-button TodoForm-button--add "
                >
                    añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};