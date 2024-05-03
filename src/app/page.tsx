import Image from "next/image";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Cartaz from "@/components/Cartaz";
export default function Home() {
  return (
    <main>
      <Titulo content="Open always wins"></Titulo>
        <Banner class="banner-white" src="/banner.webp" link="/produtos"></Banner>
        <Titulo content="Destaques"/>
        <Cartaz/>

    </main>
  );
}
