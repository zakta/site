import { faLaptop, faShoppingCart, faWindowMaximize, faMobile, faSearch, faEdit, faSyncAlt, faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { Center, Container } from "./styles";
import { Card, Icon} from "../Card/styles";


export default function Services(){
  return(
    <Container id="servicos">
      <Center>
        <Card animate={true}>
          <Icon icon={faLaptop} />
          <h3>Criação de Sites</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faEdit} />
          <h3>Otimização de Sites - SEO</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faShoppingCart} />
          <h3>Sistemas em Nuvem</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faWindowMaximize} />
          <h3>Marketing de Conteúdo - SEM</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faSearch} />
          <h3>Campanha Google Adwords</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faMobile} />
          <h3>Criação de Aplicativos</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faSyncAlt} />
          <h3>Lojas Virtuais</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faUsersCog} />
          <h3>Intranet e Extranet</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
        <Card animate={true}>
          <Icon icon={faUsersCog} />
          <h3>Manutenção de Sites</h3>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</p>
        </Card>
      </Center>
    </Container>
  );
}
