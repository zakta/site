import { faLaptop, faShoppingCart, faWindowMaximize, faMobile, faSearch, faEdit, faSyncAlt, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { Container, Title } from "./styles";
import { Card, Icon} from "../Card/styles";


export default function Services(){
  return(
    <Container id="servicos">
      <Title>Serviços</Title>
      <Card animate={true}>
        <Icon icon={faLaptop} />
        <p>Sites Responsivos</p>
      </Card>
      <Card animate={true}>
        <Icon icon={faMobile} />
        <p>Aplicativos</p>
      </Card>
      <Card animate={true}>
        <Icon icon={faShoppingCart} />
        <p>E-commerce</p>
      </Card>
      <Card animate={true}>
        <Icon icon={faWindowMaximize} />
        <p>Sistemas Web</p>
      </Card>
      <Card animate={true}>
        <Icon icon={faSearch} />
        <p>Otimização SEO</p>
      </Card>
      <Card animate={true}>
        <Icon icon={faEdit} />
        <p>Blogs</p>
      </Card>
      <Card animate={true}>
        <Icon icon={faSyncAlt} />
        <p>Integrações com CRM</p>
      </Card>
      <Card animate={true}>
        <Icon icon={faUsersCog} />
        <p>Consultoria</p>
      </Card>
    </Container>
  );
}
