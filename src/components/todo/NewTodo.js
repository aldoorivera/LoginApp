import FormField from "../Form/FormField";
import { MdAdd } from "react-icons/md";
import "./Todo.css";
function NewTodo({onChange, value, addTodo}) {
    const sectionStyle =[
        "p-5","m-5","flex","items-center","flex-row","w-full"
    ];

    return(
        <section  className={sectionStyle.join(" ")}>
            <MdAdd size={"4rem"} color={"#fff"} onClick={addTodo} ></MdAdd>
            <FormField
                caption="Escribe tu nota."
                type="text"
                id="TareaId"
                name="TareaName"
                onChange={onChange}
                value={value}
                onKeyUp={(e) => { if (e.keyCode == 13) { addTodo(e);} }}
            >
            
            </FormField>
        </section>
    );
}

export default NewTodo;