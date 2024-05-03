import "./styles.css";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="column">
            <p>Produtos</p>
            <ul>
              <Link href="/produtos">
                <li>Smartphones</li>
              </Link>
              <Link href="/produtos">
                <li>Tablets</li>
              </Link>
              <Link href="/produtos">
                <li>Notebooks</li>
              </Link>
            </ul>
          </div>
          <div className="column">
            <p>Sobre</p>
            <ul>
              <Link href="/sobre">
                <li>Valores</li>
              </Link>
              <Link href="/sobre">
                <li>Missão</li>
              </Link>
              <Link href="/sobre">
                <li>Informações</li>
              </Link>
            </ul>
          </div>
          <div className="column">
            <p>Contato</p>
            <ul>
              <Link href="/contato">
                <li>Telefone</li>
              </Link>
              <Link href="/contato">
                <li>Email</li>
              </Link>
              <Link href="/contato">
                <li>Redes Sociais</li>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
