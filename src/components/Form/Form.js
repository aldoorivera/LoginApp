function Form({children,rutaDeImagen}) {
    const style = ["h-100","p-5","w-96"];
    return(
        <form className={style.join(" ")}>
            
            <img src="" ></img>
            {children}            
        </form>
    );
}
export default Form;