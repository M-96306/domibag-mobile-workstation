
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-green-700 min-h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-in slide-in-from-bottom duration-1000">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/735031b8-e50f-4d5b-ad5f-c023b69c5d2b.png" 
              alt="Domibag Logo" 
              className="h-24 w-auto"
            />
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Domibag
            <span className="text-emerald-200">™</span>
          </h1>
          
          <h2 className="text-2xl lg:text-4xl font-semibold text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            A Nova Geração de Mobilidade para Cuidados Domiciliários
          </h2>
          
          <div className="pt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              <ArrowDown className="mr-2 h-5 w-5" />
              Explorar Pitch Deck
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
