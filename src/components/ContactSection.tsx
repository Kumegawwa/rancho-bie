import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ranch font-bold text-3xl md:text-4xl text-primary mb-4">
            Venha nos Conhecer!
          </h2>
          <p className="font-rustic text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos de portas abertas para receber você e sua família em nosso ambiente acolhedor.
          </p>
        </div>

        <Card className="shadow-card border-border/50 bg-card/50 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Informações de Contato */}
            <div className="p-8">
              <h3 className="font-ranch font-bold text-2xl text-primary mb-6">
                Nossas Informações
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-rustic font-semibold text-card-foreground">Endereço</h4>
                    <p className="font-rustic text-muted-foreground">
                      Rua Gabriel Pucka, 139<br />
                      Tranqueira, Almirante Tamandaré - PR
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-rustic font-semibold text-card-foreground">Horário de Funcionamento</h4>
                    <ul className="font-rustic text-muted-foreground">
                      <li><strong>Seg a Qui:</strong> 17:00 - 23:00</li>
                      <li><strong>Sex e Sáb:</strong> 17:00 - 00:00</li>
                      <li><strong>Domingo:</strong> 11:00 - 22:00</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-rustic font-semibold text-card-foreground">Reservas e Pedidos</h4>
                    <p className="font-rustic text-muted-foreground">(41) 8801-6046</p>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full mt-8 font-rustic font-semibold text-lg bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm"
                onClick={() => window.open('https://wa.me/554188016046', '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Fale Conosco no WhatsApp
              </Button>
            </div>

            {/* Mapa Interativo (Corrigido) */}
            <div className="w-full h-80 md:h-full min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.398688486244!2d-49.3090216854932!3d-25.3239849838367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce7e7841c6f7f%3A0x8f2d5f8c6b7e0a4!2sRua%20Gabriel%20Pucka%2C%20139%20-%20Tangu%C3%A1%2C%20Alm.%20Tamandar%C3%A9%20-%20PR%2C%2083508-490!5e0!3m2!1spt-BR!2sbr!4v1671234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização do Rancho do Bié"
              ></iframe>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;