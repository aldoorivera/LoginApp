import { MdDelete, MdDone} from 'react-icons/md';
import "./Todo.css";

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler})
{
    const elemenListStyle =[
        " flex"," items-center","my-3 ","p-3"," flex-row", "w-full"
    ]
    
    const onClick = ()=>{
        doneHandler(id);
    }
    const onDeleteClick = ()=>{
        deleteHandler(id);
    }
    
    const tacharTexto = (completed)?" striked": " ";

    return (
    <li className={elemenListStyle.join(" ")} >        
        <MdDelete color={"#fff"}size={"2rem"} onClick={onDeleteClick}></MdDelete>
        <MdDone color={"#fff"}size={"2rem"} onClick={onClick}></MdDone>
        <p className={"text-2xl mx-2 text-white" + tacharTexto} >{descripcion}</p>
    </li>);
}


function TodoList({toDos, doneHandler, deleteHandler}) {
    const toDoItems = toDos.map((elemento)=>{
        return(
            <TodoListItem
                key={elemento.doneHandlerid}
                descripcion={elemento.description}
                id={elemento.id}
                completed={elemento.completed}
                doneHandler={doneHandler}
                deleteHandler={deleteHandler}
            >

            </TodoListItem>
        )
    });
    
    return(
        <section className=" w-full">
            <ul>
                {toDoItems}
            </ul>
        </section>
    )
}

export default TodoList;