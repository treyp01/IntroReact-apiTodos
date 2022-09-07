import React from "react";
import './CreateTodoButton.css';


function CreateTodoButton(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);//esta aron funcion me permite colocar el estado anterior al darle click osea juega si es true o si es false el estado
    }

    return(
        <button
            className="CreateTodoButton"
            //onClick={() => console.log('el usuario iso click')} esta es una forma pero sin el const de arriba
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};