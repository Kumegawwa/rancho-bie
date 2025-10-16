import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logoRancho from '@/assets/logo-rancho.png';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#cardapio', label: 'Cardápio' },
  { href: '#promocoes', label: 'Promoções' },
  { href: '#contato', label: 'Contato' },
];

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <a href="#inicio" className="flex items-center space-x-3">
            <img 
              src={logoRancho} 
              alt="Rancho do Bié Logo" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="font-ranch font-bold text-xl text-primary">
                Rancho do Bié
              </h1>
              <p className="font-rustic text-sm text-muted-foreground">
                Restaurante & Bar
              </p>
            </div>
          </a>

          {/* Navegação para Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-rustic font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de Menu para Mobile */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <div className="flex flex-col space-y-6 pt-10">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="font-ranch text-2xl text-primary transition-colors hover:underline"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;