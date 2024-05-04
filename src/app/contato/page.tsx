import Image from "next/image";
import Titulo from "@/components/Titulo";
import Contato from "@/components/Contato";
export default function ContatoPage() {
  return (
    <main>
      <Titulo content="Fale conosco" />
      <Contato />
    </main>
  );
}
