import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Beer, ChefHat, Hamburger } from 'lucide-react'; // CORREÇÃO FINAL: Voltamos para 'Hamburger'

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {item.description && <p className="font-rustic text-sm text-muted-foreground">{item.description}</p>}
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
                  {item.description && <p className="font-rustic text-sm text-muted-foreground">{item.description}</p>}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Burgers */}
          <Card className="shadow-card border-border bg-card">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Hamburger className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-ranch text-2xl text-primary">Burgers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {menuItems.burgers.map((item, index) => (
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
        </div>

        {/* Bebidas */}
        <div className="mt-8">
          <Card className="shadow-card border-border bg-card">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Beer className="h-8 w-8 text-accent" />
              </div>
              <CardTitle className="font-ranch text-2xl text-primary">Bebidas & Chopp</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {menuItems.bebidas.map((item, index) => (
                  <div key={index} className="border-b border-border pb-3 last:border-b-0 md:border-b-0">
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
            * Os preços podem sofrer alterações sem aviso prévio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;