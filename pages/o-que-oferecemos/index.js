// styles
import Services from '../../components/Services';
import Breadcrumb from '../../components/Breadcrumb';
import ServiceInfo from '../../components/ServiceInfo';

const OfferedServices = function PageOfferedServices() {
  return (
    <div>
      <ServiceInfo>
        <Breadcrumb>
          <Breadcrumb.Link href="/">
            Inicio
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            O Que Oferecemos
          </Breadcrumb.Item>
        </Breadcrumb>
        <Services full />
      </ServiceInfo>
    </div>
  );
};

export default OfferedServices;
