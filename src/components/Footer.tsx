import { Heart, Instagram, Facebook } from 'lucide-react';
import logoRancho from '@/assets/logo-rancho.png';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo e Info */}
          <div className="md:col-span-1">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img 
                src={logoRancho} 
                alt="Rancho do Bié Logo" 
                className="h-16 w-auto mr-3"
              />
              <div>
                <h3 className="font-ranch font-bold text-xl">Rancho do Bié</h3>
                <p className="font-rustic text-sm text-primary-foreground/80">
                  Restaurante Bar e Petiscaria
                </p>
              </div>
            </div>
            <p className="font-rustic text-primary-foreground/80 mb-4">
              Sabores autênticos em um ambiente acolhedor. Venha experimentar nossa culinária caseira e nosso atendimento especial.
            </p>
          </div>

          {/* Informações */}
          <div className="md:col-span-1">
            <h4 className="font-rustic font-bold text-lg mb-4">Informações</h4>
            <div className="space-y-2 font-rustic text-primary-foreground/80">
              <p>📍 Rua Gabriel Pucka, 139</p>
              <p>Tranqueira, Almirante Tamandaré - PR</p>
              <p>📞 (41) 8801-6046</p>
              <p>🕒 Seg-Dom: Consulte horários</p>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="md:col-span-1">
            <h4 className="font-rustic font-bold text-lg mb-4">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram do Rancho do Bié"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook do Rancho do Bié"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="font-rustic text-primary-foreground/80 text-sm">
              Acompanhe nossas novidades e promoções especiais nas redes sociais!
            </p>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />

        <div className="text-center">
          <p className="font-rustic text-primary-foreground/80 flex items-center justify-center">
            © 2024 Rancho do Bié. Todos os direitos reservados. 
            <span className="ml-2 flex items-center">
              Feito com <Heart className="h-4 w-4 mx-1 text-accent" /> para nossos clientes
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;