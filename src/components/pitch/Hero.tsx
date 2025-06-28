
import { Button } from '@/components/ui/button';
import { ArrowDown, Mail, Phone } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-green-700 min-h-screen flex items-center text-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8 animate-in slide-in-from-bottom duration-1000">
          <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full text-white font-medium text-lg backdrop-blur-sm">
            <span className="w-3 h-3 bg-emerald-300 rounded-full mr-3 animate-pulse"></span>
            Pitch Deck
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Domibag
            <span className="text-emerald-200">™</span>
          </h1>
          
          <h2 className="text-2xl lg:text-4xl font-semibold text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            A Nova Geração de Mobilidade para Cuidados Domiciliários
          </h2>
          
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 pt-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Fundadoras</h3>
              <p className="text-emerald-100">Magda Brandão & Catarina Pishchyk</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Mail className="h-5 w-5" />
                <span>Domibag_@outlook.com</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                <Phone className="h-5 w-5" />
                <span>937 148 651</span>
              </div>
            </div>
          </div>
          
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
