import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css';

function TodoCounter(){
     const {totalTodos, completedTodos}=React.useContext(TodoContext)

    return(
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} Todos</h2>
    );
}
export {TodoCounter};//exportamos la funcion para mandarla App.js 