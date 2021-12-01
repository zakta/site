import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faShoppingCart, faWindowMaximize, faMobile, faSearch, faEdit, faSyncAlt, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { Card, Container, Icon, Title } from "./styles";


export default function Services(){
  return(
    <Container>
      <Title>Serviços</Title>
      <Card>
        <Icon icon={faLaptop} />
        <p>Sites Responsivos</p>
      </Card>
      <Card>
        <Icon icon={faMobile} />
        <p>Aplicativos</p>
      </Card>
      <Card>
        <Icon icon={faShoppingCart} />
        <p>E-commerce</p>
      </Card>
      <Card>
        <Icon icon={faWindowMaximize} />
        <p>Sistemas Web</p>
      </Card>
      <Card>
        <Icon icon={faSearch} />
        <p>Otimização SEO</p>
      </Card>
      <Card>
        <Icon icon={faEdit} />
        <p>Blogs</p>
      </Card>
      <Card>
        <Icon icon={faSyncAlt} />
        <p>Integrações com CRM</p>
      </Card>
      <Card>
        <Icon icon={faUsersCog} />
        <p>Consultoria</p>
      </Card>
    </Container>
  );
}
