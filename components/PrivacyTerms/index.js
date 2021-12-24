// Styles
import {
  BtnClose, Center, Container, IcClose,
} from '../Terms/styles';
import SpanTitle from './styles';

const PrivacyTerms = function PrivacyTermsPage() {
  const closeModal = () => {
    const modal = document.querySelector('#privacy');
    modal.classList.add('close');
    document.body.style.overflow = 'visible';
    document.location.hash = '';
  };

  return (
    <Container id="privacy" className="close">
      <Center>
        <BtnClose onClick={closeModal}>
          <IcClose />
        </BtnClose>

        <h1>Política de Privacidade</h1>

        <div className="modalTerms" id="modalPrivacy">
          <p>
            <SpanTitle>INTRODUÇÃO</SpanTitle>
            {' '}
            Informações pessoais. “Informações Pessoais”
            são dados relacionados a você e podem –– isoladamente ou em combinação
            com outras informações –– identificar você como um indivíduo. As
            Informações Pessoais não incluem dados que foram agregados ou tornados
            anônimos, de modo que você não possa mais ser identificado usando
            meios razoavelmente disponíveis para nós.
          </p>
          <p>
            Nossos serviços. Os serviços mencionados nesta Política incluem os
            serviços fornecidos pela Zakta. Você pode ler mais sobre como as
            Informações Pessoais que são usadas clicando abaixo no nome da empresa
            de serviços, sites ou aplicativos Zakta que você usa.
          </p>
          <p>
            Referências a “você”. Nesta Política, “você” significa qualquer pessoa
            que use nossos sites, aplicativos ou outros serviços. Se você é um
            funcionário ou candidato, a Política de Privacidade da Zakta para
            Dados Pessoais de um funcionário ou um Candidato, a Política de
            Privacidade da Zakta para Dados Pessoais explica como usamos as
            Informações Pessoais no contexto de nossa relação empregatícia com
            você. Se você é um funcionário ou candidato que usa nossos serviços,
            esta Política explica como coletamos, usamos e divulgamos suas
            Informações Pessoais no contexto de seu uso de nossos Serviços.
          </p>
          <p>
            Versão autorizada. Quando o texto desta Política está disponível em
            vários idiomas, a versão em inglês é a versão autorizada, exceto
            quando proibido pela lei aplicável.
          </p>
          <p>
            <SpanTitle>INFORMAÇÕES QUE COLETAMOS</SpanTitle>
            {' '}
            As Informações Pessoais que
            coletamos e nosso uso dessas informações dependem do seu
            relacionamento conosco e dos requisitos da lei aplicável, conforme
            descrito abaixo
          </p>
          <p>
            Nós coletamos informações: que você nos fornece diretamente; que sua
            empresa, seu corretor, seu host, pai ou responsável nos forneça; sobre
            seus dispositivos e sua localização, e seu uso de nossos serviços,
            incluindo por meio de cookies, pixels, web beacons, registros e outras
            tecnologias da Internet.
          </p>
          <p>
            Se você optar por determinados recursos ou dependendo das
            configurações do seu dispositivo, obteremos dados de geolocalização e
            informações sobre seus contatos; e que obtemos de outras fontes.
          </p>
          <p>
            <SpanTitle>INFORMAÇÕES COLETADAS DE VOCÊ</SpanTitle>
            {' '}
            A Zakta solicita
            diferentes tipos de Informações Pessoais de sua parte e sua empresa ou
            outros, dependendo dos serviços que você usa e do seu relacionamento
            conosco. Podemos coletar as seguintes categorias de informações,
            dependendo dos serviços que você usa:
          </p>
          <p>
            Informações de Contato e outros Identificadores, incluindo seu nome,
            endereço para correspondência, número de telefone, endereço de e-mail
            e outras informações que nos permitam entrar em contato com você;
          </p>
          <p>
            Informações de Verificação, incluindo um documento com foto ou
            documento de identidade emitido pelo governo e data de nascimento; e
            Informações Relacionadas ao seu Vínculo Trabalhista Informações.
          </p>
          <p>
            Profissionais, incluindo o nome da empresa, título, cargo, equipe e
            outras informações sobre sua profissão;
          </p>
          <p>
            Informações sobre Pagamentos, incluindo detalhes do cartão de crédito
            ou débito, informações da conta bancária e pagamento ou outras
            informações necessárias ao fazer uma compra;
          </p>
          <p>
            Informações de Calendário do E-mail , quando nós nos integramos ao seu
            calendário de e-mail corporativo (Gmail ou Microsoft Outlook) e
            coletamos dados referentes às salas de conferência que você reserva;
          </p>
          <p>
            Preferências de Escritório, incluindo suas solicitações ou
            preferências quanto a temperatura, velocidade do ventilador, altura da
            mesa e da cadeira, localização da mesa, cabine telefônica, bebida,
            lanche e outras preferências relacionadas aos serviços;
          </p>
        </div>
      </Center>
    </Container>
  );
};

export default PrivacyTerms;
