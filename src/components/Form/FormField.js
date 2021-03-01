function FormField({caption, type, id, name, onChange ,value}) {
    const imputstyle = ["my-2","rounded-lg" ,"p-2", " w-full", "border-b-2","border-red-900"];
    return (
        <section>
            <input className={imputstyle.join(" ")} type={type} id={id} placeholder={caption} name={name} onChange={onChange} value={value}/>
        </section>
    )
}

export default FormField;