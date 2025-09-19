import logoRancho from '@/assets/logo-rancho.png';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-4">
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
                Restaurante Bar e Petiscaria
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;