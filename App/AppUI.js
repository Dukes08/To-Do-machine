import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodoTittle } from '../TodoTittle';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI(){
 //React hook para poder atraer parametros de mejor forma
  const {loading,
    error,
    todosSearched,
    completeTodo,
    deleteTodo,
    openModal,  
    setOpenModal
  } = React.useContext(TodoContext);

    return(
    <>

      <TodoTittle/>

      {/* se esta pasando como propiedad los valores
      completed y total que gracias a los props se renderizan en el 
      mensaje y cambiaran de acuerdo a las interacciones */}
      {/* <TodoCounter completed={completedTodos} total={totalTodos}/> gracias al estado derivado completedTodos podemos mostrar realmente cuando todos han sido completados y cuales son los totales */}

      <TodoSearch
      // // los sieguientes props son los que permiten guardar los inputs del usuario
      // searchValue={searchValue}
      // setSearchValue = {setSearchValue}
      />
      <TodoCounter/>


             <TodoList > {/*Aca tenemos una etiqueta de apertura y cierre para encapsular la lista de los todos */}
             {/* uso del useEffect */}
             {loading && (<>
               <TodosLoading/>
               <TodosLoading/>
               <TodosLoading/>
             </>)}
             {error && <TodosError/>}
             {(!loading && todosSearched == 0) && <EmptyTodos/>} {/*en logica && significa y, pero si se coloca luego de la logica significa entonces */}
                           
               {/* .map() itera sobre el array padre y crea un array nuevo aplicando una funacion a cada elemento del padre
               renderizando un todoitem por cada objeto del array defaultstodo */}
       
               {todosSearched.map(todo => ( //como es arrow function el return es implicito, pero esta ahi
                 <TodoItem key={todo.text} //cada elemento debe ser diferente teniendo como text eso que los diferencias
                  text = {todo.text} //este prop permite mostrar el texto
                  completed = {todo.completed} //estado del todo
                  onComplete = {() => completeTodo(todo.text)} //se encapsula en otra funcion porque no se puede ejecutar una funcion directamente en react
                  onDelete = {() => deleteTodo(todo.text)}
                  /> 
       
                 
               ))
               }
       
                  </TodoList>
  
               {/* React portals */}

     
      <CreateTodoButton setOpenModal = {setOpenModal}/>
      {openModal && (
      <Modal>
        <TodoForm/>
      </Modal>)}

      
 
  </>
)}

export {AppUI}