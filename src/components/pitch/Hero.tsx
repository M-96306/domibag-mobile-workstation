
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
    <section className="relative overflow-hidden min-h-screen flex items-center bg-white">
      {/* Subtle Industrial Pattern */}
      <div className="absolute inset-0 industrial-texture opacity-30"></div>
      
      {/* Accent Gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-clinical-info font-medium text-sm">
              <span className="w-2 h-2 bg-clinical-success rounded-full mr-2 animate-pulse-soft"></span>
              Inovação em Cuidados Domiciliários
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
              Domibag
              <span className="text-clinical-info">™</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground leading-relaxed">
              A Nova Geração de Mobilidade para Cuidados Domiciliários
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Uma solução inovadora que combina mobilidade, ergonomia e organização numa única plataforma portátil, desenvolvida para profissionais de saúde.
            </p>
            
            <div className="pt-4">
              <Button 
                onClick={scrollToNextSection}
                size="lg"
                className="bg-clinical-info hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-clinical transition-all duration-300 hover:shadow-lg"
              >
                Descobrir Mais
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="relative">
            {/* Product Image with Industrial Frame */}
            <div className="relative bg-gradient-to-br from-metallic-light to-metallic-aluminum rounded-2xl p-8 shadow-soft-lg">
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-clinical-success"></div>
                <div className="w-3 h-3 rounded-full bg-clinical-warning"></div>
                <div className="w-3 h-3 rounded-full bg-clinical-danger"></div>
              </div>
              <img 
                src="/lovable-uploads/d98fb43b-f0fd-4e98-a1f3-7183b1a8708d.png"
                alt="Domibag - Estação de Trabalho Móvel"
                className="w-full h-auto rounded-lg"
              />
              {/* QR Code Badge */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-soft border border-border">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <div className="w-6 h-6 bg-foreground rounded grid grid-cols-3 gap-0.5 p-1">
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-foreground rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-foreground rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-foreground rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                    <div className="bg-white rounded-sm"></div>
                  </div>
                  Stock Digital
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
