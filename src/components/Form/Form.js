function Form({children,rutaDeImagen}) {
    const style = ["h-100","p-5","w-96"];
    const imgstyle = ["flex","flex-col","items-center"];
    return(
        <form className={style.join(" ")}>
            
            <section className={imgstyle.join(" ")}>
                <img src={rutaDeImagen} ></img>
            </section>
            {children}            
        </form>
    );
}
export default Form;