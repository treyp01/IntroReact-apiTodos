import React from "react";
import {TodoCounter} from '../TodoCounter'
import {TodoSerch} from '../TodoSerch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodoContext}from '../TodoContext';
import {Modal} from '../Modal';
import { TodoForm } from "../TodoForm";
import {TodosError} from "../TodosError";
import {EmptyTodos} from "../EmptyTodos";
import {TodosLoading} from "../TodosLoading";
function AppUI(){
    const {error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal,}=React.useContext(TodoContext)
    return (
      <React.Fragment>
        
        <TodoCounter/>
        <TodoSerch/>
          {/*en todolist en la parte de key se pone todo.text para indicar que es el valor que no se va a repetir 
          de los todos en ese caso el tipo que no se v a repetir es el text    
          En nuestro onComplete={()=>completeTodos(todo.text)} le estamos mandando el valor del key unico para identificarlo*/}
          
               

        <TodoList> 
        {error && <TodosError error={error} />}
        {loading && <TodosLoading />}
        {(!loading && !searchedTodos.length) && <EmptyTodos />}{/*aqui estamos diciendo que si no estamos cargando y ademas no hay info enserchedtodos entonces cree su primer todo*/}

        {searchedTodos.map(todo=>(
      
          <TodoItem
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          onComplete={()=>completeTodo(todo.text)}
          ondelete={()=>deleteTodo(todo.text)}
          />  
        ))}   
        </TodoList>      

        {!!openModal &&(//aqui afirmo que openModal es true 
          
          <Modal>
            <TodoForm />
          </Modal> 
        )}
         
            
        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />   
     
    </React.Fragment>
    );
}

export {AppUI};