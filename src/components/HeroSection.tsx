import { Button } from '@/components/ui/button';
import { MapPin, Sparkles } from 'lucide-react';
import logoRancho from '@/assets/logo-rancho.png';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gradient-hero py-16 md:py-24 hero-background">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container relative mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={logoRancho} 
              alt="Rancho do Bié Logo" 
              className="h-32 md:h-40 w-auto mx-auto mb-6 drop-shadow-lg"
            />
            <h1 className="font-ranch font-bold text-4xl md:text-6xl text-white drop-shadow-md mb-4">
              Rancho do Bié
            </h1>
            <p className="font-rustic text-xl md:text-2xl text-white/90 drop-shadow-sm mb-6">
              O sabor autêntico da culinária rústica em um ambiente acolhedor.
            </p>
          </div>
          
          <div className="bg-card/90 backdrop-blur-sm rounded-lg shadow-wood p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-5 w-5 text-accent mr-2" />
              <p className="font-rustic text-lg text-card-foreground">
                Porções, Hambúrgueres, Almoço e Happy Hour!
              </p>
            </div>
            
            <div className="flex items-center justify-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              <p className="font-rustic">
                Rua Gabriel Pucka, 139 - Tranqueira, Almirante Tamandaré - PR
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="font-rustic font-semibold text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-wood transition-all duration-300 hover:scale-105"
            onClick={() => window.open('https://wa.me/554188016046', '_blank')}
          >
            Peça pelo WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;