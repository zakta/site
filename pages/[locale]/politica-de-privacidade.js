// 3rd parites
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic';
// components
import PrivacyModal from '../../components/PrivacyTerms';

const Privacy = function PrivacyPage() {
  return <PrivacyModal />;
};

export default Privacy;
const getStaticProps = makeStaticProps(['politica-de-privacidade']);
export { getStaticPaths, getStaticProps };
