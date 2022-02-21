// 3rd parties
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
// components
import TermsModal from '../../components/Terms';

const Terms = function TermsPage() {
  return <TermsModal />;
};

export default Terms;
const getStaticProps = makeStaticProps(['termos-de-servico']);
export { getStaticPaths, getStaticProps };
