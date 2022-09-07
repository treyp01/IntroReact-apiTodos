import React from "react";

function useLocalStorage(itemName, initialValue){//vamos crear nuestro reacHub REGLA QUE COMIENCE CON use la funcion hub
    const [error, seterror]=React.useState(false);//aqui a el estado de error le asamos por defecto false que nos dice que no hay ningun error
    const [loading, setLoading]=React.useState(true);//creamos el stado loading que es cargando... y tiene true por defecto
    const [item, setItem]=React.useState(initialValue);//aqui llamamos a
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          
          //vamos a crear nuestro localStorage para que me guarde todos los datos en el navegador
          const localStorageItem=localStorage.getItem('itemName');
           //vamos a crear localstoregeTodos para averiguar los datos de los usuarios y si en un caso son nuevo se le mandara  como 
            //un arreglo vacio para que puedan meter datos por primera ves
          let parcedItem;
          if(!localStorageItem){//aqui veriica si localStorageItem no existe
            localStorage.setItem('itemName', JSON.stringify(initialValue));//CREAMOS UNO POR DFECTO PERO VA A HACER UN ARRAY VACIO
            parcedItem=initialValue;//nuestro parcetodos por defecto va hacer un array vacio
          }else{//de lo contrario si localStorageItem existe osea ya tiene todos de alguna version anterior
            parcedItem = JSON.parse(localStorageItem);
          }
          setItem(parcedItem);//aqui llamamos a setItem y le decimos que actualice el valor de nuestro estado que esta guardada en parcedItem
          setLoading(false)//aqui le pasamos  para cuando haya recargado el estado le pasamos a setloading false para que no se siga actualizando o mejor dicho que se siga cargando
        } catch(error){
          seterror(error);
        }
  
      }, 1000);
    });
  
  
     
  
     //AQUI VAMOS A CREAR UNA FUNCION QUE SIRVA COM PUENTE ENTRE MIS FUNCIONES DELETETODOS Y COMPLETETODOS CONTRA NUESTRO LOCALSTOREGE Y NUESTRO ESTADO
    const saveItem= (newItem)=>{//vamos a guardar nuestros todos en el estado si no ademas que tambien l vamos a guardar en localstorage
      try{
  
        const stringifyItem=JSON.stringify(newItem);//aqui convertimos en arrays todos nuestros todos 
        localStorage.setItem(itemName , stringifyItem);//aqui estamos guardando la informacion es TODOS_V1
        setItem(newItem);//aqui modificamos el estado de la pagina 
      }catch(error){
        seterror(error)
      }
      
  
    };
  
    return {//aqui retornamos el array de los estados osea savetodos
      item,
      saveItem,
      loading,
      error,
    };
  }

  export {useLocalStorage};