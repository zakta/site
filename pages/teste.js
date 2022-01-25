// 3rd parties

import { useState } from 'react';
import BottomModal from '../components/BottomModal';

export default function Home() {
  const [activeModal, setActiveModal] = useState(false);
  const [formStatus, setFormStatus] = useState('success');
  return (
    <div>
      <button type="button" onClick={() => setActiveModal(true)}>Abrir Bottom Modal </button>
      <BottomModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        setFormStatus={setFormStatus}
        formStatus={formStatus}
      />
    </div>
  );
}
