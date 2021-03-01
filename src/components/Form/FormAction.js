function FormAction({caption, onClick}) {
    const botonstyle = ["my-2","rounded-lg" ,"p-2", " w-full","bg-red-900","text-white"];
    return(
        <button className={botonstyle.join(" ")}
        onClick={onClick}
        >
            {caption}
        </button>
    );
}

export default FormAction;