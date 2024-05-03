import CardProduto from "../CardProduto";
import "./styles.css";
import Titulo from "../Titulo";

const Produtos = () => {
  return (
    <>
    <Titulo content="Produtos"/>
      <div className="cartaz">
        <CardProduto title="Galaxy Buds 2" image="/buds.webp" price="R$599,99"/>
        <CardProduto title="Galaxy Z Fold5" image="/zfold.jpeg" price="R$14.219,10"/>
        <CardProduto  title="Galaxy Book 4 Pro"  image="/book4.webp" price="8.999,10"/>
        <CardProduto title="Galaxy Tab S9 FE 5G" image="/tabs9.avif" price="R$3.149,10"/>
        <CardProduto title="Galaxy Z Fold5" image="/zfold.jpeg" price="R$14.219,10"/>
        <CardProduto  title="Galaxy Book 4 Pro"  image="/book4.webp" price="8.999,10"/>
        <CardProduto title="Galaxy Tab S9 FE 5G" image="/tabs9.avif" price="R$3.149,10"/>
        <CardProduto title="Galaxy Z Fold5" image="/zfold.jpeg" price="R$14.219,10"/>
        <CardProduto  title="Galaxy Book 4 Pro"  image="/book4.webp" price="8.999,10"/>
        <CardProduto title="Galaxy Buds 2" image="/buds.webp" price="R$599,99"/>

      </div>
    </>
  );
};

export default Produtos;