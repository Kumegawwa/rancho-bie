import { useState } from 'react';
import { Button } from '@/components/ui/button';
import logoRancho from '@/assets/logo-rancho.png';
import { Menu, X } from 'lucide-react';
// CORREÇÃO: A importação agora usa chaves {} para corresponder à exportação nomeada.
import { useMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#cardapio', label: 'Cardápio' },
    { href: '#promocoes', label: 'Promoções' },
    { href: '#contato', label: 'Contato' },
  ];

  const handleLinkClick = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <a href="#inicio" className="flex items-center">
          <img src={logoRancho} alt="Rancho do Bié Logo" className="h-14 w-auto" />
        </a>

        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        ) : (
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-ranch text-lg text-white hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="font-rustic font-semibold bg-accent hover:bg-accent/90"
              onClick={() => window.open('https://wa.me/554188016046', '_blank')}
            >
              Peça Agora
            </Button>
          </nav>
        )}

        {isMobile && menuOpen && (
          <div className="absolute top-20 left-0 right-0 bg-primary shadow-lg p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-ranch text-lg text-white text-center py-2 hover:bg-white/10 rounded"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="w-full font-rustic font-semibold bg-accent hover:bg-accent/90 mt-4"
                onClick={() => {
                  window.open('https://wa.me/554188016046', '_blank');
                  handleLinkClick();
                }}
              >
                Peça Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;