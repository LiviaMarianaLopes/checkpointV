import "./styles.css";
import ContatoForm from "../ContatoForm";
import Link from "next/link";
const Contato = () => {
  return (
    <div className="contato">
      <ContatoForm />
      <div className="menu">
        <div className="cadastro">
          <h1>Entre em contato</h1>
          <div className="numero">
            <div>
              <h2> Telefones:</h2>
              <ul>
                <li>+55 (11) 98364-7723</li>
                <li>+55 (43) 97263-4473</li>
                <li>+55 (25) 4586-0021</li>
              </ul>
            </div>
            <div>
              <h2>Email:</h2>
              <p>suportesamsung@samsung.com.br</p>
            </div>
            <div>
              <h2>Redes Sociais:</h2>
              <a href="/contato">Linkedin</a>
              <a href="/contato">Instagram</a>
              <a href="/contato">Facebook</a>
            </div>
            <div>
              <h2>Endereço:</h2>
              <p>Av. Samsung, 2032 - São Paulo - SP - Brasil</p>
              <p>
                Rua Samsung 687, Pq. Monte Alto - Rio de Janeiro - RJ - Brasil
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contato;
