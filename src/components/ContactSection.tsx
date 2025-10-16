import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ranch font-bold text-3xl md:text-4xl text-primary mb-4">
            Venha nos Conhecer!
          </h2>
          <p className="font-rustic text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos sempre prontos para receber você e sua família em nosso ambiente acolhedor
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Informações de Contato */}
          <Card className="shadow-card border-border bg-card">
            <CardContent className="p-6">
              <h3 className="font-ranch font-bold text-xl text-primary mb-6 text-center">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-rustic font-semibold text-card-foreground mb-1">Endereço</h4>
                    <p className="font-rustic text-muted-foreground">
                      Rua Gabriel Pucka, 139<br />
                      Tranqueira, Almirante Tamandaré - PR
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-rustic font-semibold text-card-foreground mb-1">Horário de Funcionamento</h4>
                    <div className="font-rustic text-muted-foreground">
                      <p>Segunda a Quinta: 17h às 23h</p>
                      <p>Sexta e Sábado: 17h às 24h</p>
                      <p>Domingo: 11h às 22h</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-rustic font-semibold text-card-foreground mb-1">Telefone</h4>
                    <p className="font-rustic text-muted-foreground">
                      (41) 8801-6046
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WhatsApp CTA */}
          <Card className="shadow-card border-border bg-card">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-6">
                <MessageCircle className="h-16 w-16 text-accent" />
              </div>
              
              <h3 className="font-ranch font-bold text-xl text-primary mb-4">
                Fale Conosco no WhatsApp
              </h3>
              
              <p className="font-rustic text-muted-foreground mb-6">
                Entre em contato conosco para fazer sua reserva, tirar dúvidas sobre o cardápio ou conhecer nossas promoções especiais!
              </p>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full font-rustic font-semibold text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground shadow-wood transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('http://wa.me/554188016046', '_blank')}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Abrir WhatsApp
                </Button>
                
                <p className="font-rustic text-sm text-muted-foreground">
                  Clique no botão acima e seja direcionado diretamente para nosso WhatsApp
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mapa Interativo */}
        <div className="mt-12">
          <Card className="shadow-card border-border bg-card">
            <CardContent className="p-6 text-center">
              <h3 className="font-ranch font-bold text-xl text-primary mb-4">
                Como Chegar
              </h3>
              <div className="aspect-w-16 aspect-h-9 bg-muted rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.59104033481!2d-49.32435568498863!3d-25.31846098384024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dceb0b4a45c3a3%3A0x1e3e0e3b4a4a4f8b!2sR.%20Gabriel%20Pucka%2C%20139%20-%20Tranqueira%2C%20Alm.%20Tamandar%C3%A9%20-%20PR%2C%2083514-060!5e0!3m2!1spt-BR!2sbr!4v1671234567890!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mapa de Localização do Rancho do Bié"
                ></iframe>
              </div>
              <p className="font-rustic text-sm text-muted-foreground mt-4">
                Estamos localizados na Rua Gabriel Pucka, 139, no bairro Tranqueira, em Almirante Tamandaré - PR
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
