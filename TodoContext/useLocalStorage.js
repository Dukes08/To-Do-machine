import React from 'react'

function useLocalStorage(itemName, initialValue){
  const [item,setItem] = React.useState(initialValue);

  const [loading,setLoading] = React.useState(true);

  const [error,setError] = React.useState(false);

  //effect para que mientras cargue la app muestre un mensaje

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        let localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem; 
    
      if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(initialValue)); //caso de que el localStorage este vacio
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem); //caso de que el local storage no este vacio
        setItem(parsedItem)
      }
  
      setLoading(false);
    }
      catch(error){
        setLoading(false);
        setError(true);
      }
  
    },2000)
   
  },[]);
  const saveItem = (newItem) =>{ //esta funcion hace que se guarden los cambios de por vida tanto en el estado como localStorage
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  };
  return {
    item,  //al retornar mas de dos valores se debe retornar en forma de objeto
    saveItem,
    loading,
    error
  }
}

//const defaultsTodo =[{text:'Cortar cebolla', completed: true },
// {text:'Tomer curso de react intro', completed: false },
// {text:'Tomar curso de docker', completed: false },
// {text:'Que edward me regale una macbook pro 2024 con m3', completed: false },
// {text:'Que moris haga shawarma', completed: true},
// {text:'Mostrar este proyecto', completed: true}
// ]

  export {useLocalStorage};