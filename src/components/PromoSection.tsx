import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Sparkles } from 'lucide-react';

const PromoSection = () => {
  return (
    <section className="py-16 bg-gradient-promo">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-promo-foreground border-none shadow-wood overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-12 w-12 text-promo animate-pulse" />
              </div>
              
              <h2 className="font-ranch font-bold text-3xl md:text-4xl text-promo mb-4">
                QUARTA-FEIRA ESPECIAL!
              </h2>
              
              <div className="bg-promo/10 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-promo mx-auto mb-3" />
                    <h3 className="font-rustic font-bold text-xl text-foreground mb-2">
                      Toda Quarta-feira
                    </h3>
                    <p className="font-rustic text-muted-foreground">
                      Desconto especial em porções
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-promo mx-auto mb-3" />
                    <h3 className="font-rustic font-bold text-xl text-foreground mb-2">
                      18h às 22h
                    </h3>
                    <p className="font-rustic text-muted-foreground">
                      Happy hour estendido
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-ranch font-bold text-2xl text-promo mb-4">
                  30% OFF em Porções Selecionadas
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <ul className="space-y-2">
                    <li className="font-rustic text-foreground">✨ Porção de Frango à Passarinho</li>
                    <li className="font-rustic text-foreground">✨ Porção de Calabresa Acebolada</li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="font-rustic text-foreground">✨ Porção de Pastéis Variados</li>
                    <li className="font-rustic text-foreground">✨ Chopp em Dobro*</li>
                  </ul>
                </div>
                <p className="font-rustic text-sm text-muted-foreground mt-4">
                  * Na compra de uma porção, ganhe outro chopp
                </p>
              </div>

              <Button 
                size="lg" 
                className="font-rustic font-semibold text-lg px-8 py-6 bg-promo hover:bg-promo/90 text-promo-foreground shadow-wood transition-all duration-300 hover:scale-105"
                onClick={() => window.open('http://wa.me/554188016046', '_blank')}
              >
                Reserve sua Mesa para Quarta!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;