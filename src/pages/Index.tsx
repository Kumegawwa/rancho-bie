import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection'; // Importado
import PromoSection from '@/components/PromoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MenuSection />
        <GallerySection /> {/* Adicionado */}
        <PromoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;