import { Button } from '@/components/ui/button';
import { MapPin, Star } from 'lucide-react';
import logoRancho from '@/assets/logo-rancho.png';

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={logoRancho} 
              alt="Rancho do Bié Logo" 
              className="h-32 md:h-40 w-auto mx-auto mb-6"
            />
            <h1 className="font-ranch font-bold text-4xl md:text-6xl text-primary mb-4">
              Rancho do Bié
            </h1>
            <p className="font-rustic text-xl md:text-2xl text-secondary-foreground mb-6">
              Restaurante Bar e Petiscaria
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-wood p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-5 w-5 text-accent mr-2" />
              <p className="font-rustic text-lg text-card-foreground">
                Restaurante, happy hour, chopp e porções ✨
              </p>
            </div>
            
            <div className="flex items-center justify-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              <p className="font-rustic">
                📍 Rua Gabriel Pucka, 139 - Tranqueira, Almirante Tamandaré - PR
              </p>
            </div>
          </div>

          <Button 
            size="lg" 
            className="font-rustic font-semibold text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-wood transition-all duration-300 hover:scale-105"
            onClick={() => window.open('http://wa.me/554188016046', '_blank')}
          >
            Fale conosco no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;