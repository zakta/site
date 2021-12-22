import { BtnClose, Container, IcClose } from "./styles";


export default function Terms() {
  return (
    <Container id="termos" className="close">
      <BtnClose
        onClick={() => {
          document.querySelector("#termos").classList.add("close");
          document.body.style.overflow = "visible";
        }}
      ><IcClose /></BtnClose> 
      
      <div className="terms-content">
        <h1>Termos de Serviço</h1>
        <p>
          <span>Termos</span> {`Zakta possui e opera o site em zakta.com.br (o
          “Site”), onde você pode encontrar informações sobre nossos produtos e
          serviços. Estes Termos e Condições do site (o “Termos do site”)
          descrevem os direitos e obrigações de um usuário ou visitante não
          registrado do site ("usuário" ou "você") em conexão com o uso do Site.
          Acessando ou usando o Site em qualquer forma, inclusive como visitante
          não registrado do site, você concorda em ser vinculado a estes Termos
          do site e à nossa Política de Privacidade, que é disponíveis no Site.
          Estes Termos do site se aplicam apenas ao uso de o Site, e o conteúdo
          disponibilizado no ou por meio do Site, como um usuário ou visitante
          não registrado do site. De vez em quando, podemos fazer modificações,
          exclusões ou acréscimos ao Site ou a estes Termos do site. Seu uso
          continuado do Site após a postagem de quaisquer alterações aos Termos
          do site constitui aceitação daqueles alterar.`}
        </p>
        <p>
          <span>Elegibilidade.</span> {`O site e os serviços que ele descreve são
          disponível apenas para indivíduos com pelo menos 16 anos de idade, a
          menos que especificamos o contrário. Ninguém abaixo dessa idade pode
          acessar ou usar o Site ou fornecer qualquer informação pessoal através
          do Site.`}
        </p>
        <p>
          <span>Conteúdo.</span> {`O texto, imagens, vídeos, clipes de áudio,
          software e outro conteúdo gerado, fornecido ou feito de outra forma
          acessíveis no ou através do Site (coletivamente, "Conteúdo") são
          contribuído por nós e nossos licenciados. O conteúdo e o site são
          protegido pelas leis de direitos autorais do Brasil e internacionais.
          Nós e nossos licenciadores retêm todos os direitos de propriedade do
          Site e do Conteúdo disponibilizados no ou através do Site e, exceto
          conforme expressamente definido estipulado nestes Termos do Site,
          nenhum direito é concedido a qualquer Conteúdo. Sujeito a estes Termos
          do site, concedemos a cada usuário do site um mundial, não exclusivo,
          não sublicenciável e intransferível licença para usar (ou seja, para
          baixar e exibir localmente) Conteúdo apenas para visualizar, navegar e
          usar a funcionalidade do Local. Todo o conteúdo é apenas para fins
          informativos gerais. Nós reservam-se o direito, mas não têm nenhuma
          obrigação de monitorar, remover, editar, modificar ou remover qualquer
          Conteúdo, a nosso exclusivo critério, a qualquer momento, por qualquer
          motivo ou sem motivo algum.`}
        </p>
        <p>
          <span>Reclamações de violação de direitos autorais.</span>{" "}
          {`Reivindicações de direitos autorais a violação devem ser enviadas ao
          agente designado da Zakta.`}
        </p>
        <p>
          <span>
            Isenção de responsabilidade; Limitação de responsabilidade.
          </span>{" "}
          {`Na medida permitida por lei, nós e nossos afiliados, pais e sucessores
          e cada um de nossos e seus funcionários, cessionários, executivos,
          agentes e diretores (coletivamente, as "Partes Zakta") renunciam a
          todos garantias e termos, expressos ou implícitos, com relação ao
          Site, Conteúdo ou serviços (incluindo serviços de terceiros) em ou
          acessível através do Site, incluindo quaisquer garantias ou termos de
          comercialização, adequação a uma finalidade específica, título, não
          violação e quaisquer garantias implícitas ou decorrentes do curso de
          negociação, curso de desempenho ou uso no comércio. Em nenhum caso as
          Partes Zakta serão responsáveis sob contrato, ato ilícito, estrito
          responsabilidade, negligência ou qualquer outra teoria legal ou
          equitativa com com relação ao Site para (a) qualquer especial,
          indireto, incidental, danos punitivos, compensatórios ou emergentes de
          qualquer tipo de qualquer natureza (independentemente de como
          surgirem).`}
        </p>
        <p>
          <span>Diversos.</span> {`Estes Termos do Site serão regidos por e
          interpretado de acordo com as leis do Brasil. Estes Termos do site
          constituem o acordo integral entre em relação ao Site e substitui e
          mescla quaisquer propostas anteriores, entendimentos e comunicações
          contemporâneas. Se houver alguma disposição destes Termos do site é
          considerada inválida ou inexequível, que provisão deve ser limitada ou
          eliminada ao mínimo necessário para que estes Termos do Site
          permaneçam na íntegra força e efeito e executória. Para qualquer
          renúncia de conformidade com estes Termos do site para ser
          vinculativa, devemos fornecer você com notificação por escrito de tal
          renúncia. O fracasso de qualquer uma das partes para fazer valer seus
          direitos sob estes Termos do site a qualquer momento para qualquer
          período não será interpretado como uma renúncia de tais direitos.`}
        </p>
      </div>
    </Container>
  );
}
