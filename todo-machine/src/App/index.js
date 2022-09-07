
import React from 'react';
import { AppUI } from './AppUI';
import {TodoProvider} from '../TodoContext';


//import logo from './logo.svg';
//import './App.css';
/*
const defoultTodos =[
{text:'cortar cebolla', completed: true},
{text:'tomar el curso de html', completed: false},
{text:'tomar curso de javascript', completed: false},
{text:'tomar curso de php', completed: false} ] ;//arrays de TAREAS PENDIENTES DE objetos con propiedades 
*/

function App() {
 
  return (

    //aqui estamos mandando todo el contenido de AppUI y ADEMAS le estamos mandando todas las propiedades
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
