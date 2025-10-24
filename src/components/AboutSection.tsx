import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, CalendarCheck } from 'lucide-react';

const AboutSection = () => {
  return (
    // Fundo de cor 'secondary' (cinza quente) para variar
    <section id="sobre" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna de Texto (Branding) */}
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 font-rustic text-sm text-accent font-semibold">
              <Heart className="h-4 w-4" />
              Nossa História
            </span>
            <h2 className="font-ranch font-bold text-3xl md:text-4xl text-primary leading-tight">
              Mais que um restaurante, um lugar para criar memórias.
            </h2>
            <p className="font-rustic text-lg text-muted-foreground">
              O Rancho do Bié nasceu do sonho de oferecer um refúgio acolhedor,
              onde a comida rústica de verdade e a boa conversa se encontram.
              Cada prato é preparado com carinho, resgatando o sabor autêntico
              da fazenda em pleno Almirante Tamandaré.
            </p>
            <p className="font-rustic text-lg text-muted-foreground">
              Somos um negócio de família dedicado a fazer você se sentir em casa.
              Venha para um almoço, um happy hour ou para celebrar momentos especiais.
            </p>
          </div>

          {/* Coluna de Formulário (Coleta de Dados - Problema 3) */}
          <div>
            <Card className="shadow-wood border-black/5">
              <CardContent className="p-8">
                <h3 className="font-ranch font-bold text-2xl text-primary mb-1">
                  Reservas e Eventos
                </h3>
                <p className="font-rustic text-muted-foreground mb-6">
                  Planejando um aniversário ou confraternização? Fale conosco!
                </p>
                {/* Este formulário pode ser integrado a serviços como Formspree,
                  Netlify Forms, ou um backend (PHP/Python) que a equipe sabe construir [cite: 2112]
                */}
                <form 
                  action="#" 
                  method="POST" 
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-rustic text-sm font-semibold text-primary">Nome</label>
                    <Input id="name" name="name" type="text" placeholder="Seu nome completo" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="font-rustic text-sm font-semibold text-primary">Telefone / WhatsApp</label>
                    <Input id="phone" name="phone" type="tel" placeholder="(41) 9...." required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="font-rustic text-sm font-semibold text-primary">Mensagem</label>
                    <Textarea id="message" name="message" placeholder="Ex: Gostaria de reservar uma mesa para 10 pessoas no próximo sábado..." required />
                  </div>
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full font-rustic font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-wood"
                  >
                    <CalendarCheck className="h-5 w-5 mr-2" />
                    Solicitar Reserva
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;