import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Utensils } from 'lucide-react';
import promoAlmoco from '@/assets/images/promo-almoco.jpg'; // Imagem mantida, mas agora dentro de um Card

const PromoSection = () => {
  return (
    <section id="promocoes" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ranch font-bold text-3xl md:text-4xl text-primary mb-4">
            Promoções Especiais
          </h2>
          <p className="font-rustic text-lg text-muted-foreground max-w-2xl mx-auto">
            Aproveite nossos sabores com condições imperdíveis!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-border/50 bg-card/50 overflow-hidden md:flex md:items-center">
            <div className="md:w-1/2">
              {/* ⚠️ Idealmente, use uma foto horizontal de alta qualidade aqui */}
              <img src={promoAlmoco} alt="Promoção de almoço no Rancho do Bié" className="w-full h-64 md:h-full object-cover" />
            </div>
            <div className="p-8 md:w-1/2">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-ranch text-3xl text-primary">
                  Almoço Executivo
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="font-rustic text-muted-foreground mb-4">
                  De segunda a sexta, temos um cardápio especial para o seu almoço, com pratos completos e saborosos a um preço que cabe no seu bolso.
                </p>
                <div className="flex items-center space-x-4 mb-6 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    <span className="font-rustic">Segunda a Sexta</span>
                  </div>
                  <div className="flex items-center">
                    <Utensils className="h-4 w-4 mr-2 text-accent" />
                    <span className="font-rustic">Pratos a partir de R$ 19,90</span>
                  </div>
                </div>
                <Button 
                  className="w-full font-rustic font-semibold bg-accent hover:bg-accent/90"
                  onClick={() => document.getElementById('contato')?.scrollIntoView()}
                >
                  Confira o Cardápio
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