import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import Header from '../components/Header';
import Services from '../components/Services';

export default function Index() {
  useEffect(() => {
    const element = document.getElementById(location.pathname);

    window.scroll({
      behavior: 'smooth',
      top: element ? element.offsetTop : 0,
    });
  });

  return (
    <div>
      <Header />
      <Services id="/serviços" />
      <div id="/sobre" style={{ backgroundColor: 'white', height: 500 }}>
        <h1 style={{ margin: 0 }}>Sobre</h1>
      </div>
      <div id="/contato" style={{ backgroundColor: 'white', height: 500 }}>
        <h1 style={{ margin: 0 }}>Contato</h1>
      </div>
      <Footer />
    </div>
  )
}
