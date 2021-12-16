// 3rd parties
import { BiWrench } from "react-icons/bi";
import { AiOutlineCloudSync, AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsMegaphone, BsDiagram3 } from "react-icons/bs";
import { BsGlobe, BsCart3 } from "react-icons/bs";
import { SiGoogleads } from "react-icons/si";
import { MdOutlineManageSearch } from "react-icons/md";

// Styles
import { Center, Container } from "./styles";
import { Card, Icon } from "../Card/styles";

export default function Services() {
  return (
    <Container id="servicos">
      <Center>
        <Card animate={true}>
          <Icon>
            <BsGlobe/>
          </Icon>
          <h3>Criação de Sites</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
        <Card animate={true}>
          <Icon>
            <MdOutlineManageSearch />
          </Icon>
          <h3>Otimização de Sites - SEO</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
        <Card animate={true}>
          <Icon>
            <AiOutlineCloudSync />
          </Icon>
          <h3>Sistemas em Nuvem</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
        <Card animate={true}>
          <Icon>
            <BsMegaphone />
          </Icon>
          <h3>Marketing de Conteúdo - SEM</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
        <Card animate={true}>
          <Icon>
            <SiGoogleads />
          </Icon>
          <h3>Campanha Google Adwords</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
        <Card animate={true}>
          <Icon>
            <AiOutlineAppstoreAdd />
          </Icon>
          <h3>Criação de Aplicativos</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
        <Card animate={true}>
          <Icon>
            <BsCart3 />
          </Icon>
          <h3>Lojas Virtuais</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
        <Card animate={true}>
          <Icon>
            <BsDiagram3 />
          </Icon>
          <h3>Intranet e Extranet</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
        <Card animate={true}>
          <Icon>
            <BiWrench />
          </Icon>
          <h3>Manutenção de Sites</h3>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium.
          </p>
        </Card>
      </Center>
    </Container>
  );
}
