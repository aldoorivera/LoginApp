import { useState } from "react";
import NavBar from "../navbar/NavBar";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import "./Todo.css";
function Todo() {
    
    const [toDoDato, setToDoDato] = useState(
        {
            todos:[],
            nuevaToDo:"",
        }
    );
    
    const InsertarUnaNota = (elemento) =>
    {
        const {value} = elemento.currentTarget;
        setToDoDato({...toDoDato, nuevaToDo: value});
        console.log(toDoDato);
    };
    const AgregarNota = () => 
    {
        let newToDo = {
            description: toDoDato.nuevaToDo,
            completed:false,
            id : new Date().getTime()
        };
        let newTodos = toDoDato.todos;
        newTodos.push(newToDo);
    
        setToDoDato({todos:newTodos, nuevaToDo: ""});
    }

    const DoneHandler = (id)=>{
        const newTodos = toDoDato.todos.map((elemento)=>{
        if(elemento.id === id){
            elemento.completed = !elemento.completed;
        }
        return elemento;
        });
    
        setToDoDato({...toDoDato, todos:newTodos});
    };
    
    const DeleteHandler = (id)=>{
        const newTodos = toDoDato.todos.filter((elemento) => {
            return elemento.id !==id;
        });
    
        setToDoDato({ ...toDoDato, todos: newTodos });
    }

    return(
    <div className="Fondo">
        <NavBar>
            
        </NavBar>

        <div className="flex flex-col items-center py-20 md:px-60 px-5 w-full">
        <NewTodo
            onChange = {InsertarUnaNota}
            value    = {toDoDato.nuevaToDo}
            addTodo  = {AgregarNota}
            >

        </NewTodo>

        <TodoList 
            toDos={toDoDato.todos}
            doneHandler={DoneHandler}
            deleteHandler={DeleteHandler}
            >
            </TodoList>
        </div>
    </div>
    ) 
}
export default Todo;