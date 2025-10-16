import { Card, CardContent } from '@/components/ui/card';
// ⚠️ Crie a pasta /src/assets/images/gallery/ e adicione suas imagens.
// Usei placeholders, você deve substituí-los.
import gallery1 from '@/assets/images/gallery/image1.jpg';
import gallery2 from '@/assets/images/gallery/image2.jpg';
import gallery3 from '@/assets/images/gallery/image3.jpg';
import gallery4 from '@/assets/images/gallery/image4.jpg';

const galleryImages = [
  { src: gallery1, alt: 'Ambiente interno aconchegante do Rancho do Bié' },
  { src: gallery2, alt: 'Prato principal de chuleta com acompanhamentos' },
  { src: gallery3, alt: 'Detalhe de uma porção de batatas com bacon e cheddar' },
  { src: gallery4, alt: 'Área externa do restaurante com mesas ao ar livre' },
];

const GallerySection = () => {
  return (
    <section id="galeria" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-ranch font-bold text-3xl md:text-4xl text-primary mb-4">
            Nossos Momentos
          </h2>
          <p className="font-rustic text-lg text-muted-foreground max-w-2xl mx-auto">
            Um pouco do nosso ambiente, nossos pratos e da alegria de quem passa por aqui.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;