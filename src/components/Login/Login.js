import React, {useState} from "react";
import FormField from "../Form/FormField";
import Form from "../Form/Form";
import FormAction from "../Form/FormAction";
import {useHistory} from "react-router-dom";
function Login() {
    const [formData , setFormData] = useState({
        username:"",
        password:""
    });;
    
    const myOnChange = function (e) {
        const {name, value} = e.currentTarget;
        setFormData({...formData, [name]:value, [name+"Error"]:console.error});
        console.log(formData);
    }
    const history = useHistory();
    const CambioDePagina = (username) => 
    {   
        history.push('/Todo'); 
        alert(`!Bievenido ${username}!`)
    };
    return(
        <Form
            rutaDeImagen="https://raw.githubusercontent.com/aldoorivera/LoginApp/master/src/Img/Letra%20A.png"
        >
            <FormField 
            caption="Usuario"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={myOnChange}>
                
            </FormField>
            <FormField 
            caption="Contraseña"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={myOnChange}>
                
            </FormField>
            <FormAction
            caption="Iniciar"
            onClick={
                (modal)=>{
                    modal.preventDefault();
                    modal.stopPropagation();
                    const { username, password } = formData;
                    
                    if (password){
                        (/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,32}$/).test(password) ?CambioDePagina(username) :alert("Contraseña Inválida");
                    }
                    
                }
            }
            >
            </FormAction>
        </Form>
    )
    
}

export default Login;