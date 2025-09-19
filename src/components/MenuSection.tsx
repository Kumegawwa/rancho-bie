import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Coffee, Beer, ChefHat } from 'lucide-react';

const menuItems = {
  porcoes: [
    { name: "Porção de Frango à Passarinho", price: "R$ 35,00", description: "Frango temperado e frito, acompanha batata frita" },
    { name: "Porção de Pastéis Variados", price: "R$ 28,00", description: "Pastéis de carne, queijo e frango (10 unidades)" },
    { name: "Porção de Calabresa Acebolada", price: "R$ 32,00", description: "Calabresa grelhada com cebola roxa" },
    { name: "Porção de Mandioca Frita", price: "R$ 25,00", description: "Mandioca crocante com molho especial" }
  ],
  pratos: [
    { name: "Filé de Peixe Grelhado", price: "R$ 42,00", description: "Acompanha arroz, feijão, salada e batata frita" },
    { name: "Bife à Parmegiana", price: "R$ 48,00", description: "Bife empanado com molho de tomate e queijo" },
    { name: "Feijoada Completa", price: "R$ 45,00", description: "Sábados - Feijoada tradicional com acompanhamentos" },
    { name: "Prato Executivo do Dia", price: "R$ 28,00", description: "Consulte as opções do dia" }
  ],
  bebidas: [
    { name: "Chopp Pilsen", price: "R$ 8,00", description: "300ml - Chopp gelado e cremoso" },
    { name: "Cerveja Long Neck", price: "R$ 6,50", description: "Várias marcas disponíveis" },
    { name: "Caipirinha", price: "R$ 12,00", description: "Tradicional com cachaça artesanal" },
    { name: "Refrigerantes", price: "R$ 5,00", description: "Coca-Cola, Guaraná, Sprite (lata)" }
  ]
};

const MenuSection = () => {
  return (
    <section id="cardapio" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ranch font-bold text-3xl md:text-4xl text-primary mb-4">
            Nosso Cardápio
          </h2>
          <p className="font-rustic text-lg text-muted-foreground max-w-2xl mx-auto">
            Sabores autênticos em um ambiente acolhedor. Venha experimentar nossas especialidades!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Porções */}
          <Card className="shadow-card border-border bg-card">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Utensils className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-ranch text-2xl text-primary">Porções</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {menuItems.porcoes.map((item, index) => (
                <div key={index} className="border-b border-border pb-3 last:border-b-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-rustic font-semibold text-card-foreground">{item.name}</h4>
                    <span className="font-rustic font-bold text-accent">{item.price}</span>
                  </div>
                  <p className="font-rustic text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Pratos Principais */}
          <Card className="shadow-card border-border bg-card">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <ChefHat className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-ranch text-2xl text-primary">Pratos Principais</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {menuItems.pratos.map((item, index) => (
                <div key={index} className="border-b border-border pb-3 last:border-b-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-rustic font-semibold text-card-foreground">{item.name}</h4>
                    <span className="font-rustic font-bold text-accent">{item.price}</span>
                  </div>
                  <p className="font-rustic text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Bebidas - Span full width */}
          <Card className="shadow-card border-border bg-card md:col-span-2">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Beer className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-ranch text-2xl text-primary">Bebidas & Chopp</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {menuItems.bebidas.map((item, index) => (
                  <div key={index} className="border-b border-border pb-3 last:border-b-0 md:last:border-b">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-rustic font-semibold text-card-foreground">{item.name}</h4>
                      <span className="font-rustic font-bold text-accent">{item.price}</span>
                    </div>
                    <p className="font-rustic text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="font-rustic text-muted-foreground">
            * Os preços podem sofrer alterações sem aviso prévio
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;