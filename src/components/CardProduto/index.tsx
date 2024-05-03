import "./styles.css";

const CardProduto = (props:any)=>{
    return(
        <div className="card">
        <div><p>
        {props.title}
        </p></div>
        <div>
           <img src={props.image} />
        </div>
        <div>
            <p>{props.price}</p>
        </div>
        <div className="button">
        <button><a>Adicionar ao carrinho</a></button>
        </div>
    </div>
    )
}
export default CardProduto;