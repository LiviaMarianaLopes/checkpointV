import Image from "next/image";
import Banner from "@/components/Banner";
import Titulo from "@/components/Titulo";
import Subtitulo from "@/components/Subtitulo";
export default function Sobre() {
  return (
    <main>
      <Titulo content="Nossa missão e
nossos valores"/>
<Subtitulo content="Nossa promessa de desempenhar com responsabilidade
como uma empresa líder global."/>
        <Banner class="banner-black" src="/sustentabilidade.avif" link="/sobre" title="Nossos passos para um futuro melhor" content="Consideramos a eficiência energética e a circularidade de recursos de nossos produtos durante todo o ciclo de vida, o que envolve a implementação de várias medidas durante as etapas de fornecimento, produção, distribuição, uso e reciclagem para reduzir nosso impacto no meio ambiente."></Banner>
        <Subtitulo content="A Samsung tem o compromisso de cumprir as leis e regulamentos locais, bem como aplicar um código de conduta global rigoroso a todos os funcionários. Ela acredita que a gestão ética não é apenas uma ferramenta para responder às rápidas mudanças no ambiente de negócios global, mas também um veículo para construir confiança com suas várias partes interessadas, incluindo clientes, acionistas, funcionários, parceiros de negócios e comunidades locais. Com o objetivo de se tornar uma das empresas mais éticas do mundo, a Samsung continua treinando seus funcionários e operando sistemas de monitoramento, enquanto pratica a gestão empresarial justa e transparente."/>
        <Banner class="banner-white" src="/quemsomos.avif" link="/sobre" title="Nossa missão e abordagem" content="A Samsung segue uma filosofia simples: dedicar seu talento e tecnologia à criação de produtos e serviços superiores que contribuam para uma sociedade global melhor. Para conseguir isso, a Samsung valoriza muito seu pessoal e suas tecnologias."></Banner>

    </main>
  );
}
