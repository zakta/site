// 3rd parties
import Head from 'next/head';

// styles
import Services from '../../components/Services';
import Breadcrumb from '../../components/Breadcrumb';
import ServiceInfo from '../../components/ServiceInfo';

const OfferedServices = function PageOfferedServices() {
  return (
    <>
      <Head>
        <title>Serviços em Santos | Zakta Tecnologia</title>
      </Head>

      <ServiceInfo none source="servicos-em-santos">
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
    </>
  );
};

export default OfferedServices;
