import "./styles.css";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Link href="/">
            <Image src="/logo.png" width={150} height={100} alt="logo" />
          </Link>
          <ul className="nav">
            <Link href="/produtos">
              <li>Produtos</li>
            </Link>
            <Link href="/sobre">
              <li>Sobre</li>
            </Link>
            <Link href="/contato">
              <li>Contato</li>
            </Link>
          </ul>
        </div>
        <hr></hr>
      </header>
    </>
  );
};

export default Header;
