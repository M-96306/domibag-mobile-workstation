
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
  {
    src: "/lovable-uploads/0c1e1838-84ea-477f-88b7-fa6156880b28.png",
    alt: "Domibag - Solução inovadora para cuidados domiciliários"
  },
  {
    src: "/lovable-uploads/3be9ca73-ba08-4305-a1ed-483c0a392459.png",
    alt: "Domibag - Vista lateral completa"
  },
  {
    src: "/lovable-uploads/8cf57c81-7cb4-4425-8931-4e1a60c324fe.png",
    alt: "Domibag - Vista traseira com sistema modular"
  }
];

export const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="relative">
      <div className="relative z-10">
        <img 
          src={heroImages[currentImage].src}
          alt={heroImages[currentImage].alt}
          className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-200/20 to-green-300/20 blur-3xl transform scale-75 -z-10"></div>
      
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-xl opacity-15 animate-pulse delay-1000"></div>
      
      {heroImages.length > 1 && (
        <div className="flex justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevImage}
            className="rounded-full border-emerald-200 hover:bg-emerald-50"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-2 items-center">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImage 
                    ? 'bg-emerald-600 scale-125' 
                    : 'bg-emerald-200 hover:bg-emerald-300'
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextImage}
            className="rounded-full border-emerald-200 hover:bg-emerald-50"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
