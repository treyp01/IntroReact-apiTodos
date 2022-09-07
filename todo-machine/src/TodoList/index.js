import React from 'react';
import './TodoList.css'

function TodoList(props){//creamos la funcion con su propiedad props que luego la usaremos para convocar hacia el item
    return(
        <section>
            <ul>
              {props.children} 
            </ul>
        </section>
    );
}
//props.children nos servira para determinar el valor item que vamos a agregar por lo tanto estara sujeto a TodoItem.js y a
//a su ves TodoItem.js estara sujeto al valor del Array de los Todos 
export {TodoList};//