import Image from "next/image";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import ContatoForm from "@/components/ContatoForm";
export default function Contato() {
  return (
    <main>
      <Titulo content="Fale conosco"/>
      <ContatoForm/>
    </main>
  );
}
