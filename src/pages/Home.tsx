import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';
import NetworkBackground from '../components/NetworkBackground';

export default function Home() {
  return (
    <>
      <NetworkBackground />
      <Header />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
      <FloatingButtons />
    </>
  );
}
