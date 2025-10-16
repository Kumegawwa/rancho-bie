import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Sparkles, Sun } from 'lucide-react';
import promoAlmoco from '@/assets/images/promo-almoco.jpg';

const PromoSection = () => {
  return (
    <section id="promocoes" className="py-16 bg-gradient-promo">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ranch font-bold text-3xl md:text-4xl text-promo-foreground drop-shadow-md mb-4">
            Nossas Ofertas Especiais
          </h2>
          <p className="font-rustic text-lg text-white/80 max-w-2xl mx-auto">
            Aproveite nossos pratos e promoções exclusivas!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Almoço */}
          <Card className="bg-promo-foreground border-none shadow-wood overflow-hidden flex flex-col">
            <img src={promoAlmoco} alt="Promoção de Almoço" className="w-full h-48 object-cover" />
            <CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
              <div>
                <Sun className="h-10 w-10 text-promo mx-auto mb-4" />
                <h3 className="font-ranch font-bold text-2xl text-primary mb-2">Almoço Rancho</h3>
                <p className="font-rustic text-muted-foreground mb-4">De Quarta a Sábado, a partir das 11h30.</p>
                <p className="font-rustic text-xl font-bold text-promo mb-4">Buffet Livre com Chuleta por R$28,00</p>
                <div className="text-left font-rustic text-card-foreground space-y-2">
                  <p>Temos também Marmitas:</p>
                  <p><strong>Marmita P:</strong> R$ 18,00 | <strong>Marmita M:</strong> R$ 20,00 | <strong>Marmita G:</strong> R$ 24,00</p>
                </div>
              </div>
              <Button 
                size="lg" 
                className="font-rustic w-full mt-6 font-semibold bg-promo hover:bg-promo/90 text-promo-foreground shadow-sm transition-all duration-300"
                onClick={() => window.open('https://wa.me/554188016046', '_blank')}
              >
                Peça sua Marmita!
              </Button>
            </CardContent>
          </Card>

          {/* Card Quarta-Feira */}
          <Card className="bg-promo-foreground border-none shadow-wood overflow-hidden flex flex-col">
            <CardContent className="p-6 text-center flex-1 flex flex-col justify-between">
              <div>
                <Sparkles className="h-10 w-10 text-promo mx-auto mb-4 animate-pulse" />
                <h3 className="font-ranch font-bold text-2xl text-primary mb-2">Quarta-Feira Especial</h3>
                <p className="font-rustic text-muted-foreground mb-4">Toda quarta com descontos imperdíveis!</p>
                <div className="bg-promo/10 rounded-lg p-4 mb-4">
                  <h4 className="font-rustic font-bold text-xl text-foreground mb-2">
                    Happy Hour Estendido
                  </h4>
                  <p className="font-rustic text-muted-foreground">e descontos em porções selecionadas.</p>
                </div>
                <p className="font-rustic text-card-foreground">
                  Venha aproveitar o melhor da sua quarta com a gente. Chame os amigos e a família!
                </p>
              </div>
              <Button 
                size="lg" 
                className="font-rustic w-full mt-6 font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm transition-all duration-300"
                onClick={() => window.open('https://wa.me/554188016046', '_blank')}
              >
                Reserve sua Mesa
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;