import "./styles.css";

const Titulo = (props:any)=>{
    return(
        <div className="div-titulo">
            <h1 className="titulo">{
                props.content
            }</h1>
        </div>
    )
}
export default Titulo;