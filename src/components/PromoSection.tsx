import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Percent, MessageCircle } from 'lucide-react';
// ⚠️ Recomendo fortemente substituir esta imagem por uma foto real da promoção de quarta-feira
import promoQuarta from '@/assets/images/promo-almoco.jpg'; 

const PromoSection = () => {
  return (
    <section id="promocoes" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ranch font-bold text-3xl md:text-4xl text-primary mb-4">
            Nossa Quarta Especial!
          </h2>
          <p className="font-rustic text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvido o problema de onde ir no meio da semana. Temos um motivo especial para você nos visitar!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* O Card já usa a sombra 'shadow-wood' da nossa última alteração */}
          <Card className="overflow-hidden md:flex md:items-center">
            <div className="md:w-1/2">
              <img 
                src={promoQuarta} 
                alt="Promoção especial de Quarta-Feira no Rancho do Bié" 
                className="w-full h-64 md:h-full object-cover" 
              />
            </div>
            <div className="p-8 md:w-1/2">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-ranch text-3xl text-primary">
                  Quarta-Feira em Dobro!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="font-rustic text-muted-foreground mb-4">
                  Toda quarta-feira, na compra de uma porção de Chuleta, você ganha 
                  <strong className="text-accent"> 2 Chopps Pilsen 300ml</strong> por nossa conta.
                  A desculpa perfeita para relaxar e aproveitar a metade da semana.
                </p>
                <div className="flex items-center space-x-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span className="font-rustic">Válido às Quartas-feiras</span>
                  </div>
                  <div className="flex items-center">
                    <Percent className="h-4 w-4 mr-2 text-accent" />
                    <span className="font-rustic">2 Chopps Grátis</span>
                  </div>
                </div>
                <Button 
                  size="lg"
                  className="w-full font-rustic font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-wood"
                  onClick={() => window.open('https://wa.me/554188016046', '_blank')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Reservar sua Mesa
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;