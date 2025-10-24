import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection'; // 1. Importar
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import PromoSection from '@/components/PromoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection /> {/* 2. Adicionar nova seção */}
        <MenuSection />
        <GallerySection />
        <PromoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;