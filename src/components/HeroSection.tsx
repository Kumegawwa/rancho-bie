import { Button } from '@/components/ui/button';
import { MapPin, UtensilsCrossed } from 'lucide-react';

const HeroSection = () => {
  return (
    // A classe `hero-background` agora aplica um efeito parallax definido em `index.css`
    <section id="inicio" className="relative hero-background text-white pt-20">
      {/* Overlay para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative container mx-auto px-4 py-24 md:py-32 text-center z-10">
        <div className="max-w-3xl mx-auto">
          {/* Tagline rústica */}
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 font-rustic text-sm">
              <UtensilsCrossed className="h-4 w-4" />
              Culinária Rústica & Sabor Autêntico
            </span>
          </div>

          {/* Título principal com a fonte da marca */}
          <h1 className="font-ranch font-bold text-5xl md:text-7xl text-white drop-shadow-lg mb-4 leading-tight">
            O Verdadeiro Sabor do Rancho
          </h1>

          {/* Descrição mais elegante */}
          <p className="font-rustic text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md">
            Porções generosas, carnes nobres e um ambiente acolhedor para reunir quem você ama.
          </p>

          {/* Botão de Ação Principal */}
          <Button
            size="lg"
            className="font-rustic font-semibold text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-wood transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open('https://wa.me/554188016046', '_blank')}
            aria-label="Peça pelo WhatsApp"
          >
            Faça seu Pedido
          </Button>

          {/* Endereço (opcional, para reforçar localização) */}
          <div className="mt-8 flex items-center justify-center text-white/70">
            <MapPin className="h-4 w-4 mr-2" />
            <p className="font-rustic text-sm">
              Almirante Tamandaré - PR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;