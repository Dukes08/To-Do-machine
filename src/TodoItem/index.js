import './TodoItem.css'
import { FaCheck } from "react-icons/fa";

function TodoItem(props){
    return(
      <li className = "TodoItem">

        <FaCheck className={`Icon Icon-Check ${props.completed && "Icon-Check--Active"}`}
        onClick={props.onComplete}
        />  {/*esta logica permite marcar en verder las tareas completadas, si completed true se pone verde */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p> {/*esta logica permite que las tareas completadas, si completed true se pone verde */}
        <span className="Icon Icon-delete"
        onClick = {props.onDelete}
        >X</span>

      </li>
    )
  }

  export {TodoItem};