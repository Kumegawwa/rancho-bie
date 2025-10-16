import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Beer, ChefHat, Sandwich } from 'lucide-react';

// Dados do menu (inalterados)
const menuItems = {
  porcoes: [
    { name: 'Batata 500g', price: 'R$ 20,00', description: '' },
    { name: 'Batata Bacon c/ Cheddar 500g', price: 'R$ 40,00', description: '' },
    { name: 'Calabresa Acebolada 500g', price: 'R$ 30,00', description: '' },
    { name: 'Coração Acebolado 500g', price: 'R$ 40,00', description: '' },
    { name: 'Aipim com Bacon 500g', price: 'R$ 30,00', description: '' },
    { name: 'Polenta com Queijo 500g', price: 'R$ 30,00', description: '' },
    { name: 'Anel de Cebola 500g', price: 'R$ 30,00', description: '' },
    { name: 'Frango Crocante 500g', price: 'R$ 30,00', description: '' },
    { name: 'Frango Passarinho 600g', price: 'R$ 29,00', description: '' },
    { name: 'Nuggets 500g', price: 'R$ 35,00', description: '' },
    { name: 'Tilápia 400g', price: 'R$ 40,00', description: '' },
    { name: 'Bolinho de Carne 600g', price: 'R$ 40,00', description: '' },
  ],
  pratos: [
    { name: 'Filé Acebolado s/ Osso 500g', price: 'R$ 45,00', description: '' },
    { name: 'Filé Completo 1,4kg', price: 'R$ 100,00', description: 'Filé, Batata, Coração e Polenta' },
    { name: 'Porção Rancho 1kg', price: 'R$ 90,00', description: 'Batata, Anéis de Cebola, Coração e Frango' },
    { name: 'Prato de Frios 500g', price: 'R$ 40,00', description: 'Queijo, Salame, Pepino e Azeitonas' },
    { name: 'Carne de Onça 400g', price: 'R$ 50,00', description: '' },
    { name: 'Mini Churros 500g', price: 'R$ 30,00', description: '' }
  ],
  burgers: [
    { name: "Rancho Kids", price: "R$ 10,00", description: "Pão Brioche, Hambúrguer 100g e Maionese Rancho" },
    { name: "Rancho Burguer", price: "R$ 12,00", description: "Pão Brioche, Hambúrguer 100g, Maionese Rancho e Queijo Cheddar" },
    { name: "Rancho Salad", price: "R$ 15,00", description: "Pão Brioche, Hambúrguer 100g, Maionese Rancho, Picles, Alface, Tomate e Queijo Cheddar" },
    { name: "Rancho Bacon", price: "R$ 20,00", description: "Pão Brioche, Hambúrguer 100g, Maionese Rancho, Picles, Alface, Tomate, Bacon e Queijo Cheddar" },
    { name: "Rancho Onion Bacon", price: "R$ 25,00", description: "Pão Brioche, Hambúrguer 100g, Maionese Rancho, Picles, Alface, Tomate, Cebola Crocante e Bacon" },
    { name: "Rancho Bacon Duplo", price: "R$ 25,00", description: "Pão Brioche, 2 Hambúrgueres 100g, Maionese Rancho, Picles, Alface, Tomate, Bacon e Queijo Cheddar" }
  ],
  bebidas: [
    { name: "Chopp Pilsen", price: "R$ 8,00", description: "300ml - Chopp gelado e cremoso" },
    { name: "Cerveja Long Neck", price: "R$ 6,50", description: "Várias marcas disponíveis" },
    { name: "Caipirinha", price: "R$ 12,00", description: "Tradicional com cachaça artesanal" },
    { name: "Refrigerantes", price: "R$ 5,00", description: "Coca-Cola, Guaraná, Sprite (lata)" }
  ]
};

// Componente reutilizável para cada item do menu
const MenuItem = ({ name, price, description }: { name: string; price: string; description?: string }) => (
  <div className="py-3 border-b border-dashed border-border/50 last:border-b-0">
    <div className="flex justify-between items-start mb-1">
      <h4 className="font-rustic font-semibold text-card-foreground pr-4">{name}</h4>
      <span className="font-ranch font-bold text-accent text-lg whitespace-nowrap">{price}</span>
    </div>
    {description && <p className="font-rustic text-sm text-muted-foreground">{description}</p>}
  </div>
);

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

        {/* Layout de duas colunas para o cardápio */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Coluna da Esquerda */}
          <div className="space-y-8">
            <Card className="shadow-card border-border/50 bg-card/50">
              <CardHeader className="text-center">
                <Utensils className="h-8 w-8 text-accent mx-auto mb-2" />
                <CardTitle className="font-ranch text-2xl text-primary">Porções</CardTitle>
              </CardHeader>
              <CardContent>
                {menuItems.porcoes.map((item) => <MenuItem key={item.name} {...item} />)}
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-border/50 bg-card/50">
              <CardHeader className="text-center">
                <ChefHat className="h-8 w-8 text-accent mx-auto mb-2" />
                <CardTitle className="font-ranch text-2xl text-primary">Pratos Principais</CardTitle>
              </CardHeader>
              <CardContent>
                {menuItems.pratos.map((item) => <MenuItem key={item.name} {...item} />)}
              </CardContent>
            </Card>
          </div>

          {/* Coluna da Direita */}
          <div className="space-y-8">
            <Card className="shadow-card border-border/50 bg-card/50">
              <CardHeader className="text-center">
                <Sandwich className="h-8 w-8 text-accent mx-auto mb-2" />
                <CardTitle className="font-ranch text-2xl text-primary">Burgers</CardTitle>
              </CardHeader>
              <CardContent>
                {menuItems.burgers.map((item) => <MenuItem key={item.name} {...item} />)}
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/50 bg-card/50">
              <CardHeader className="text-center">
                <Beer className="h-8 w-8 text-accent mx-auto mb-2" />
                <CardTitle className="font-ranch text-2xl text-primary">Bebidas & Chopp</CardTitle>
              </CardHeader>
              <CardContent>
                {menuItems.bebidas.map((item) => <MenuItem key={item.name} {...item} />)}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="font-rustic text-sm text-muted-foreground">
            * Os preços podem sofrer alterações sem aviso prévio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;