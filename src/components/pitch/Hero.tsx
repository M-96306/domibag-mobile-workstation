
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center text-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/d98fb43b-f0fd-4e98-a1f3-7183b1a8708d.png')`
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-green-700/85 to-emerald-800/80"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8 animate-in slide-in-from-bottom duration-1000">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Domibag
            <span className="text-emerald-200">™</span>
          </h1>
          
          <h2 className="text-2xl lg:text-4xl font-semibold text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            A Nova Geração de Mobilidade para Cuidados Domiciliários
          </h2>
          
          <div className="pt-12">
            <Button 
              onClick={scrollToNextSection}
              variant="outline" 
              size="lg"
              className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Saber mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
