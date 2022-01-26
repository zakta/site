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
            Início
          </Breadcrumb.Link>
          <Breadcrumb.Item>
            Serviços
          </Breadcrumb.Item>
        </Breadcrumb>

        <Services full />
      </ServiceInfo>
    </div>
  );
};

export default OfferedServices;
