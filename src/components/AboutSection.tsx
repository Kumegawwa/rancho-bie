import React, { useState } from 'react'; // Importa o useState do React
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, CalendarCheck, MessageCircle } from 'lucide-react';

const AboutSection = () => {
  // 1. Cria estados para armazenar o valor dos campos de texto
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  // 2. Número de WhatsApp do restaurante (o mesmo usado no restante do site)
  const whatsAppNumber = '554188016046';

  // 3. Função que será chamada ao clicar no botão
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o envio do formulário (que causa o erro 404)

    // 4. Formata a mensagem exatamente como você pediu
    const textoPreenchido = `Meu nome é ${nome}! Estou entrando em contato pois ${mensagem}`;

    // 5. Codifica a mensagem para ser usada em uma URL (substitui espaços por %20, etc.)
    const textoCodificado = encodeURIComponent(textoPreenchido);

    // 6. Monta a URL final do WhatsApp
    const urlWhatsApp = `https://wa.me/${whatsAppNumber}?text=${textoCodificado}`;

    // 7. Abre o WhatsApp em uma nova aba
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <section id="sobre" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Coluna de Texto (Branding - Inalterada) */}
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

          {/* Coluna de Formulário (Funcional) */}
          <div>
            <Card className="shadow-wood border-black/5">
              <CardContent className="p-8">
                <h3 className="font-ranch font-bold text-2xl text-primary mb-1">
                  Reservas e Eventos
                </h3>
                <p className="font-rustic text-muted-foreground mb-6">
                  Planejando um aniversário ou confraternização? Fale conosco!
                </p>
                
                {/* 8. O <form> agora usa a função handleSubmit */}
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="font-rustic text-sm font-semibold text-primary">Nome</label>
                    {/* 9. O Input é "controlado": seu valor é lido do estado 'nome'
                       e qualquer mudança (onChange) atualiza o estado. */}
                    <Input 
                      id="name" 
                      name="name" 
                      type="text" 
                      placeholder="Seu nome" 
                      required 
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  
                  {/* Removi o campo "Telefone" pois ele não era usado na sua mensagem de exemplo,
                      simplificando o formulário para o cliente. */}

                  <div className="space-y-2">
                    <label htmlFor="message" className="font-rustic text-sm font-semibold text-primary">Mensagem</label>
                    {/* 10. O Textarea também é "controlado" pelo estado 'mensagem' */}
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Ex: Gostaria de reservar uma mesa para 10 pessoas no próximo sábado..." 
                      required
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value)}
                    />
                  </div>
                  
                  {/* 11. O botão agora é do tipo "submit", que aciona o 'onSubmit' do formulário */}
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full font-rustic font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-wood"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Solicitar via WhatsApp
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