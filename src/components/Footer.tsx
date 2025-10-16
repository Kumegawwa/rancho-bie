import { Heart, Instagram, Facebook } from 'lucide-react';
import logoRancho from '@/assets/logo-rancho.png';

const Footer = () => {
  // Garante que o ano do copyright esteja sempre atualizado
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t-4 border-accent/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo e Info */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#inicio" className="flex items-center mb-4">
              <img 
                src={logoRancho} 
                alt="Rancho do Bié Logo" 
                className="h-16 w-auto"
              />
            </a>
            <p className="font-rustic text-sm text-primary-foreground/80 max-w-xs">
              O sabor autêntico da culinária rústica em um ambiente acolhedor para toda a família.
            </p>
          </div>

          {/* Navegação Rápida */}
          <div>
            <h4 className="font-ranch font-bold text-lg mb-4">Navegue</h4>
            <div className="flex flex-col space-y-2 font-rustic text-primary-foreground/80">
              <a href="#inicio" className="hover:text-accent transition-colors">Início</a>
              <a href="#cardapio" className="hover:text-accent transition-colors">Cardápio</a>
              <a href="#galeria" className="hover:text-accent transition-colors">Galeria</a>
              <a href="#promocoes" className="hover:text-accent transition-colors">Promoções</a>
              <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-ranch font-bold text-lg mb-4">Siga-nos</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="https://www.instagram.com/ranchodobie?igsh=aXI0YnQwazF2N2Z4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full transition-transform hover:bg-primary-foreground/20 hover:scale-110"
                aria-label="Instagram do Rancho do Bié"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/149235202375260" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary-foreground/10 p-3 rounded-full transition-transform hover:bg-primary-foreground/20 hover:scale-110"
                aria-label="Facebook do Rancho do Bié"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />

        <div className="text-center font-rustic text-sm text-primary-foreground/70">
          <p>
            © {currentYear} Rancho do Bié. Todos os direitos reservados. 
          </p>
          <p className="mt-1 flex items-center justify-center">
            Feito com <Heart className="h-4 w-4 mx-1.5 text-accent" /> para nossos clientes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;