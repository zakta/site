import { faLaptop, faShoppingCart, faWindowMaximize, faMobile, faSearch, faEdit, faSyncAlt, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { Center, Container } from "./styles";
import { Card, Icon} from "../Card/styles";


export default function Services(){
  return(
    <Container id="servicos">
      <Center>
        <Card animate={true}>
          <Icon icon={faLaptop} />
          <p>Criação de Sites</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faEdit} />
          <p>Otimização de Sites - SEO</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faShoppingCart} />
          <p>Sistemas em Nuvem</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faWindowMaximize} />
          <p>Marketing de Conteúdo - SEM</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faSearch} />
          <p>Campanha Google Adwords</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faMobile} />
          <p>Criação de Aplicativos</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faSyncAlt} />
          <p>Lojas Virtuais</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faUsersCog} />
          <p>Intranet e Extranet</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faUsersCog} />
          <p>Manutenção de Sites</p>
        </Card>
      </Center>
    </Container>
  );
}
